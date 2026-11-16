"use client";

import { useEffect, useState } from "react";
import type { Dict } from "@/content/fr";
import { TLink } from "./Transition";

function useToulonTime(lang: string) {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat(lang, {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/Paris",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 15000);
    return () => window.clearInterval(id);
  }, [lang]);
  return time;
}

export default function Footer({ t }: { t: Dict }) {
  const time = useToulonTime(t.lang);
  const { links } = t;
  const base = `/${t.lang}`;
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-cta">
          <div>
            <h2 className="display footer-title">{t.ui.letsWork}</h2>
            <p className="footer-text">{t.contactText}</p>
          </div>
          <div className="footer-actions">
            {links.email && (
              <a className="footer-mail" href={`mailto:${links.email}`}>
                {links.email}
              </a>
            )}
            <TLink href={`${base}/contact`} label={t.nav.contact} className="btn">
              {t.hero.ctaContact}
            </TLink>
          </div>
        </div>

        <div className="footer-cols">
          <div className="footer-col">
            <h3 className="display">{t.ui.pages}</h3>
            <TLink href={base} label={t.ui.home}>{t.ui.home}</TLink>
            <TLink href={`${base}/projects`} label={t.nav.projects}>{t.nav.projects}</TLink>
            <TLink href={`${base}/about`} label={t.nav.about}>{t.nav.about}</TLink>
          </div>
          <div className="footer-col">
            <h3 className="display">{t.nav.contact}</h3>
            {links.email && <a href={`mailto:${links.email}`}>{links.email}</a>}
            {links.linkedin && (
              <a href={links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            )}
            {links.github && (
              <a href={links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
          </div>
          <div className="footer-brand">
            <span className="display">Antonin Raas</span>
            <span>
              {t.ui.localTime} · Toulon {time && `${time}`}
            </span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
