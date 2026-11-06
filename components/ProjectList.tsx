"use client";

import { useEffect, useRef, useState } from "react";
import type { Project } from "@/content/fr";
import { TLink } from "./Transition";

// Liste de projets en grandes lignes ; au survol, un aperçu coloré suit le curseur.
// Sur écran tactile, chaque ligne affiche sa propre vignette (même aperçu, sans mise en avant).
export default function ProjectList({
  projects,
  lang,
  colors,
  viewLabel,
}: {
  projects: Project[];
  lang: string;
  colors: Record<string, [string, string]>;
  viewLabel: string;
}) {
  const [active, setActive] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let raf = 0;
    const loop = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.14;
      pos.current.y += (target.current.y - pos.current.y) * 0.14;
      if (previewRef.current) {
        previewRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onMove = (e: React.PointerEvent) => {
    target.current = { x: e.clientX, y: e.clientY };
  };

  return (
    <div className="plist" onPointerMove={onMove} onPointerLeave={() => setActive(null)}>
      {projects.map((p, i) => {
        const [c1, c2] = colors[p.slug] ?? ["#4cc9f0", "#9b6dff"];
        const year = p.status ?? p.meta.match(/\d{4}/)?.[0] ?? "";
        return (
          <TLink
            key={p.slug}
            href={`/${lang}/projects/${p.slug}`}
            label={p.title.split(":")[0]}
            className="prow"
            onPointerEnter={() => setActive(i)}
            style={{ "--c1": c1, "--c2": c2 } as React.CSSProperties}
          >
            <span
              className="prow-thumb"
              aria-hidden
              style={{ background: `radial-gradient(circle at 30% 20%, ${c1}, ${c2} 70%)` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {p.cover && <img src={p.cover} alt="" loading="lazy" />}
              <span className="ppreview-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="ppreview-name">{p.title.split(":")[0]}</span>
            </span>
            <span className="prow-num">{String(i + 1).padStart(2, "0")}</span>
            <span className="prow-title">{p.title}</span>
            <span className="prow-meta">{year}</span>
          </TLink>
        );
      })}
      <div ref={previewRef} className={`ppreview ${active !== null ? "ppreview-on" : ""}`} aria-hidden>
        <div
          className="ppreview-track"
          style={{ transform: `translateY(${-(active ?? 0) * 100}%)` }}
        >
          {projects.map((p, i) => {
            const [c1, c2] = colors[p.slug] ?? ["#4cc9f0", "#9b6dff"];
            return (
              <div
                key={p.slug}
                className="ppreview-slide"
                style={{ background: `radial-gradient(circle at 30% 20%, ${c1}, ${c2} 70%)` }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                {p.cover && <img src={p.cover} alt="" />}
                <span className="ppreview-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="ppreview-name">{p.title.split(":")[0]}</span>
              </div>
            );
          })}
        </div>
        <span className="ppreview-cursor">{viewLabel}</span>
      </div>
    </div>
  );
}
