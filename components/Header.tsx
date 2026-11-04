"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Dict } from "@/content/fr";
import { locales } from "@/content/locales";
import Magnetic from "./Magnetic";
import { TLink } from "./Transition";

export default function Header({ t }: { t: Dict }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const base = `/${t.lang}`;
  const rest = pathname.replace(/^\/(fr|en|es)/, "");

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 120);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const links = [
    { href: `${base}/projects`, label: t.nav.projects },
    { href: `${base}/about`, label: t.nav.about },
    { href: `${base}/contact`, label: t.nav.contact },
  ];
  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <>
      <header className={`nav ${scrolled ? "nav-hidden" : ""}`}>
        <TLink href={base} label={t.ui.home} className="brand">
          <span className="brand-c">©</span>
          <span className="brand-roll">
            <span>Antonin RAAS</span>
            <span>{t.eyebrow.split("·")[1]?.trim() ?? "Antonin RAAS"}</span>
          </span>
        </TLink>
        <nav aria-label={t.a11y.nav} className="nav-links">
          {links.map((l) => (
            <Magnetic key={l.href} strength={0.25}>
              <TLink href={l.href} label={l.label} className={isActive(l.href) ? "active" : ""}>
                {l.label}
              </TLink>
            </Magnetic>
          ))}
          <div className="langs" aria-label={t.a11y.lang}>
            {locales.map((l) =>
              l === t.lang ? (
                <span key={l} className="lang-active" aria-current="true">
                  {l.toUpperCase()}
                </span>
              ) : (
                <a key={l} href={`/${l}${rest}`} hrefLang={l}>
                  {l.toUpperCase()}
                </a>
              )
            )}
          </div>
        </nav>
      </header>

      {/* Bouton menu : sur mobile, et sur ordinateur quand on a défilé */}
      <div className={`menu-fab ${scrolled ? "menu-fab-show" : ""}`}>
        <Magnetic strength={0.4}>
          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-label={open ? t.ui.close : t.ui.menu}
            onClick={() => setOpen((o) => !o)}
          >
            <span className={`burger ${open ? "burger-open" : ""}`} />
          </button>
        </Magnetic>
      </div>

      <div className={`menu-panel ${open ? "menu-panel-open" : ""}`} aria-hidden={!open}>
        <p className="menu-title">{t.a11y.nav}</p>
        <nav>
          {[{ href: base, label: t.ui.home }, ...links].map((l) => (
            <TLink key={l.href} href={l.href} label={l.label} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
              {l.label}
            </TLink>
          ))}
        </nav>
        <div className="menu-langs">
          {locales.map((l) => (
            <a key={l} href={`/${l}${rest}`} hrefLang={l} tabIndex={open ? 0 : -1} className={l === t.lang ? "lang-active" : ""}>
              {l.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
