"use client";

import { useEffect, useRef } from "react";

// Fond animé : plusieurs ondes colorées qui traversent l'écran lentement.
const LAYERS = [
  { color: "76, 201, 240", amp: 38, len: 0.0024, speed: 0.22, y: 0.3, alpha: 0.2 },
  { color: "155, 109, 255", amp: 52, len: 0.0017, speed: -0.15, y: 0.45, alpha: 0.18 },
  { color: "242, 181, 68", amp: 30, len: 0.003, speed: 0.3, y: 0.62, alpha: 0.15 },
  { color: "80, 209, 141", amp: 44, len: 0.002, speed: -0.2, y: 0.8, alpha: 0.13 },
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
    let scrollY = window.scrollY;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const onScroll = () => {
      scrollY = window.scrollY;
    };
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });

    const draw = (time: number) => {
      const t = time / 1000;
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);
      LAYERS.forEach((L, i) => {
        // Léger effet de parallaxe au défilement.
        const base = h * L.y - scrollY * (0.04 + i * 0.02);
        const y0 = ((base % h) + h) % h;
        const grad = ctx.createLinearGradient(0, y0 - L.amp, 0, y0 + 220);
        grad.addColorStop(0, `rgba(${L.color}, ${L.alpha})`);
        grad.addColorStop(1, `rgba(${L.color}, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.moveTo(0, h);
        for (let x = 0; x <= w + 10; x += 10) {
          const y =
            y0 +
            Math.sin(x * L.len + t * L.speed * 2 * Math.PI * 0.3) * L.amp +
            Math.sin(x * L.len * 2.3 - t * L.speed * 1.7) * L.amp * 0.35;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(w, h);
        ctx.closePath();
        ctx.fill();
        // Crête lumineuse
        ctx.strokeStyle = `rgba(${L.color}, ${L.alpha * 2.2})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        for (let x = 0; x <= w + 10; x += 10) {
          const y =
            y0 +
            Math.sin(x * L.len + t * L.speed * 2 * Math.PI * 0.3) * L.amp +
            Math.sin(x * L.len * 2.3 - t * L.speed * 1.7) * L.amp * 0.35;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      });
      if (!reduce) raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <canvas ref={ref} className="waves" aria-hidden />;
}
