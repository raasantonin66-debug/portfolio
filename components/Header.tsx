"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Dict } from "@/content/fr";
import { locales } from "@/content/locales";
import { TLink } from "./Transition";

// Barre noire fixe : nom en capitales condensées, liens courts, langues et un
// bouton contour « Me contacter ». Sur téléphone : nom + bouton menu.
export default function Header({ t }: { t: Dict }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const base = `/${t.lang}`;
  const rest = pathname.replace(/^\/(fr|en|es)/, "");

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
  }, [open]);

  const links = [
    { href: `${base}/projects`, label: t.nav.projects },
    { href: `${base}/about`, label: t.nav.about },
    { href: `${base}/contact`, label: t.nav.contact },
  ];
  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <>
      <header className="nav">
        <div className="nav-left">
          <TLink href={base} label={t.ui.home} className="brand">
            Antonin Raas
          </TLink>
          <nav aria-label={t.a11y.nav} className="nav-links">
            {links.map((l) => (
              <TLink key={l.href} href={l.href} label={l.label} className={isActive(l.href) ? "active" : ""}>
                {l.label}
              </TLink>
            ))}
          </nav>
        </div>
        <div className="nav-right">
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
          <TLink href={`${base}/contact`} label={t.nav.contact} className="btn nav-cta">
            {t.hero.ctaContact}
          </TLink>
          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="menu-panel"
            aria-label={open ? t.ui.close : t.ui.menu}
            onClick={() => setOpen((o) => !o)}
          >
            <span className={`burger ${open ? "burger-open" : ""}`} />
          </button>
        </div>
      </header>

      <div id="menu-panel" className={`menu-panel ${open ? "menu-panel-open" : ""}`} aria-hidden={!open}>
        <nav aria-label={t.a11y.nav}>
          {[{ href: base, label: t.ui.home }, ...links].map((l) => (
            <TLink key={l.href} href={l.href} label={l.label} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
              {l.label}
            </TLink>
          ))}
        </nav>
        <div className="menu-langs" aria-label={t.a11y.lang}>
          {locales.map((l) => (
            <a
              key={l}
              href={`/${l}${rest}`}
              hrefLang={l}
              tabIndex={open ? 0 : -1}
              className={l === t.lang ? "lang-active" : ""}
            >
              {l.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
