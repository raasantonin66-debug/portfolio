"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Labels = {
  controlOn: string;
  controlOff: string;
  hint: string;
  reset: string;
};

// Double pendule : lien 1 = bras (barre -> épaules), lien 2 = corps (épaules -> pieds).
// Angles absolus depuis la verticale descendante, en radians.
const G = 9.81;
const M1 = 1.0;
const M2 = 1.6;
const L1 = 0.55;
const L2 = 0.9;
const DAMP = 0.02;
const TAU1_MAX = 9; // couple max à la barre (N.m)
const TAU2_MAX = 25; // couple max à la hanche (N.m)

type State = [number, number, number, number]; // th1, th2, w1, w2

function energy([t1, t2, w1, w2]: State) {
  const v1sq = L1 * L1 * w1 * w1;
  const v2sq = v1sq + L2 * L2 * w2 * w2 + 2 * L1 * L2 * w1 * w2 * Math.cos(t1 - t2);
  const T = 0.5 * M1 * v1sq + 0.5 * M2 * v2sq;
  const y1 = -L1 * Math.cos(t1);
  const y2 = y1 - L2 * Math.cos(t2);
  return T + M1 * G * y1 + M2 * G * y2;
}

// Énergie au sommet, corps tendu à la verticale, avec une marge pour passer le point haut.
const E_TOP = M1 * G * L1 + M2 * G * (L1 + L2);
const E_TARGET = E_TOP + 2.5;

function wrap(a: number) {
  return Math.atan2(Math.sin(a), Math.cos(a));
}

function torques(s: State, control: boolean): [number, number] {
  if (!control) return [0, 0];
  const [t1, t2, w1, w2] = s;
  // Hanche : PD qui garde le corps dans l'axe des bras (gainage).
  const phi = wrap(t2 - t1);
  const dphi = w2 - w1;
  let tau2 = -60 * phi - 8 * dphi;
  // Barre : pompage d'énergie vers l'énergie du soleil.
  const E = energy(s);
  let tau1 = 4 * (E_TARGET - E) * Math.sign(w1 || 1);
  tau1 = Math.max(-TAU1_MAX, Math.min(TAU1_MAX, tau1));
  tau2 = Math.max(-TAU2_MAX, Math.min(TAU2_MAX, tau2));
  return [tau1, tau2];
}

function deriv(s: State, tau: [number, number]): State {
  const [t1, t2, w1, w2] = s;
  const d = t1 - t2;
  const c = Math.cos(d);
  const sn = Math.sin(d);
  const a11 = (M1 + M2) * L1 * L1;
  const a12 = M2 * L1 * L2 * c;
  const a22 = M2 * L2 * L2;
  const b1 =
    tau[0] - tau[1] - DAMP * w1 - M2 * L1 * L2 * sn * w2 * w2 - (M1 + M2) * G * L1 * Math.sin(t1);
  const b2 = tau[1] - DAMP * (w2 - w1) + M2 * L1 * L2 * sn * w1 * w1 - M2 * G * L2 * Math.sin(t2);
  const det = a11 * a22 - a12 * a12;
  const al1 = (b1 * a22 - a12 * b2) / det;
  const al2 = (a11 * b2 - a12 * b1) / det;
  return [w1, w2, al1, al2];
}

function rk4(s: State, dt: number, control: boolean): State {
  const tau = torques(s, control);
  const add = (a: State, b: State, k: number): State => [
    a[0] + b[0] * k,
    a[1] + b[1] * k,
    a[2] + b[2] * k,
    a[3] + b[3] * k,
  ];
  const k1 = deriv(s, tau);
  const k2 = deriv(add(s, k1, dt / 2), tau);
  const k3 = deriv(add(s, k2, dt / 2), tau);
  const k4 = deriv(add(s, k3, dt), tau);
  return [
    s[0] + (dt / 6) * (k1[0] + 2 * k2[0] + 2 * k3[0] + k4[0]),
    s[1] + (dt / 6) * (k1[1] + 2 * k2[1] + 2 * k3[1] + k4[1]),
    s[2] + (dt / 6) * (k1[2] + 2 * k2[2] + 2 * k3[2] + k4[2]),
    s[3] + (dt / 6) * (k1[3] + 2 * k2[3] + 2 * k3[3] + k4[3]),
  ];
}

const INITIAL: State = [0.4, 0.4, 0, 0];

export default function Pendulum({ labels }: { labels: Labels }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<State>([...INITIAL]);
  const controlRef = useRef(true);
  const trailRef = useRef<{ x: number; y: number }[]>([]);
  const [control, setControl] = useState(true);

  useEffect(() => {
    controlRef.current = control;
  }, [control]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let last = performance.now();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const r = canvas.getBoundingClientRect();
      canvas.width = Math.round(r.width * dpr);
      canvas.height = Math.round(r.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const css = getComputedStyle(document.documentElement);
    const col = (name: string, fb: string) => css.getPropertyValue(name).trim() || fb;

    const draw = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const scale = Math.min(w, h) / (2 * (L1 + L2) + 0.4);
      const ox = w / 2;
      const oy = h / 2;
      const [t1, t2] = stateRef.current;
      const x1 = ox + scale * L1 * Math.sin(t1);
      const y1 = oy + scale * L1 * Math.cos(t1);
      const x2 = x1 + scale * L2 * Math.sin(t2);
      const y2 = y1 + scale * L2 * Math.cos(t2);

      const fg = col("--fg", "#e8ecf4");
      const accent = col("--accent", "#f2b544");
      const muted = col("--muted", "#7d8aa5");

      ctx.clearRect(0, 0, w, h);

      // Trajectoire des pieds
      const trail = trailRef.current;
      trail.push({ x: x2, y: y2 });
      if (trail.length > 120) trail.shift();
      for (let i = 1; i < trail.length; i++) {
        ctx.strokeStyle = accent;
        ctx.globalAlpha = (i / trail.length) * 0.55;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(trail[i - 1].x, trail[i - 1].y);
        ctx.lineTo(trail[i].x, trail[i].y);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      // Barre fixe et montants
      ctx.strokeStyle = muted;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(ox - scale * 1.55, oy);
      ctx.lineTo(ox + scale * 1.55, oy);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(ox - scale * 1.55, oy);
      ctx.lineTo(ox - scale * 1.55, h);
      ctx.moveTo(ox + scale * 1.55, oy);
      ctx.lineTo(ox + scale * 1.55, h);
      ctx.globalAlpha = 0.35;
      ctx.stroke();
      ctx.globalAlpha = 1;

      // Bras et corps
      ctx.lineCap = "round";
      ctx.strokeStyle = fg;
      ctx.lineWidth = 7;
      ctx.beginPath();
      ctx.moveTo(ox, oy);
      ctx.lineTo(x1, y1);
      ctx.stroke();
      ctx.strokeStyle = accent;
      ctx.lineWidth = 11;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      // Articulations
      for (const [x, y, r, c] of [
        [ox, oy, 6, muted],
        [x1, y1, 9, fg],
        [x2, y2, 6, accent],
      ] as [number, number, number, string][]) {
        ctx.fillStyle = c;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = (now: number) => {
      const frame = Math.min(0.05, (now - last) / 1000);
      last = now;
      const steps = 8;
      for (let i = 0; i < steps; i++) {
        stateRef.current = rk4(stateRef.current, frame / steps, controlRef.current);
      }
      draw();
      raf = requestAnimationFrame(loop);
    };

    if (reduce) {
      draw();
    } else {
      raf = requestAnimationFrame(loop);
    }
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const perturb = useCallback((e: React.PointerEvent<HTMLCanvasElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const dir = e.clientX - r.left < r.width / 2 ? -1 : 1;
    const s = stateRef.current;
    stateRef.current = [s[0], s[1], s[2] + dir * 1.5, s[3] + dir * 6];
  }, []);

  const reset = () => {
    stateRef.current = [...INITIAL];
    trailRef.current = [];
  };

  return (
    <div className="sim">
      <canvas
        ref={canvasRef}
        className="sim-canvas"
        onPointerDown={perturb}
        role="img"
        aria-label="Simulation d'un double pendule réalisant un soleil à la barre fixe"
      />
      <div className="sim-controls">
        <button
          type="button"
          className={`chip ${control ? "chip-on" : ""}`}
          aria-pressed={control}
          onClick={() => setControl((c) => !c)}
        >
          <span className="dot" aria-hidden /> {control ? labels.controlOn : labels.controlOff}
        </button>
        <button type="button" className="chip" onClick={reset}>
          {labels.reset}
        </button>
      </div>
      <p className="sim-hint">{labels.hint}</p>
    </div>
  );
}
