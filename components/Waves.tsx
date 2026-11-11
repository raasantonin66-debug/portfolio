"use client";

import { useEffect, useRef } from "react";

// Fond : deux traces fines qui ondulent lentement, comme sur un oscilloscope.
// Une seule couleur, pas de remplissage : le fond reste calme sous le contenu.
const TRACES = [
  { amp: 34, len: 0.0021, speed: 0.12, y: 0.34, alpha: 0.3 },
  { amp: 22, len: 0.0034, speed: -0.08, y: 0.72, alpha: 0.18 },
];

export default function Waves() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = (time: number) => {
      const t = time / 1000;
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1.25;
      for (const L of TRACES) {
        ctx.strokeStyle = `rgba(76, 201, 240, ${L.alpha})`;
        ctx.beginPath();
        for (let x = 0; x <= w + 8; x += 8) {
          // Réponse amortie qui se répète : un clin d'œil à l'asservissement.
          const y =
            h * L.y +
            Math.sin(x * L.len + t * L.speed * 2 * Math.PI) * L.amp +
            Math.sin(x * L.len * 2.7 - t * L.speed * 3) * L.amp * 0.25;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className="waves" aria-hidden />;
}
