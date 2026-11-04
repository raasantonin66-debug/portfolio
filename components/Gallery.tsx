"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";

type Item = { src: string; w: number; h: number; caption: string };

// Galerie d'images ; un clic ouvre l'image en grand (Échap ou clic pour fermer).
export default function Gallery({ items, closeLabel }: { items: Item[]; closeLabel: string }) {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i === null ? i : (i + 1) % items.length));
      if (e.key === "ArrowLeft") setOpen((i) => (i === null ? i : (i - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, items.length]);

  return (
    <>
      <div className="gallery">
        {items.map((it, i) => (
          <Reveal key={it.src} className={`gitem ${it.h > it.w ? "gitem-tall" : "gitem-wide"}`}>
            <figure>
              <button type="button" className="gbtn" onClick={() => setOpen(i)} aria-label={it.caption}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={it.src} width={it.w} height={it.h} alt={it.caption} loading="lazy" />
              </button>
              <figcaption>{it.caption}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      {open !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setOpen(null)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={items[open].src} alt={items[open].caption} />
          <p>{items[open].caption}</p>
          <button type="button" className="lb-close" aria-label={closeLabel}>
            ×
          </button>
        </div>
      )}
    </>
  );
}
