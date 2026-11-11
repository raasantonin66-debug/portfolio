"use client";

import { useEffect, useState } from "react";
import type { Dict } from "@/content/fr";
import Magnetic from "./Magnetic";
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
  return (
    <footer className="footer">
      <div className="footer-inner">
        <h2 className="footer-title">
          <span className="footer-avatar" aria-hidden>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={t.aboutPortrait.src} alt="" loading="lazy" />
          </span>
          {t.ui.letsWork}
        </h2>
        <div className="footer-line">
          <Magnetic strength={0.45} className="footer-cta-wrap">
            <TLink href={`/${t.lang}/contact`} label={t.nav.contact} className="footer-cta">
              {t.nav.contact}
            </TLink>
          </Magnetic>
        </div>
        <div className="footer-pills">
          {links.email && (
            <Magnetic strength={0.2}>
              <a className="pill" href={`mailto:${links.email}`}>
                {links.email}
              </a>
            </Magnetic>
          )}
        </div>
        <div className="footer-bottom">
          <div>
            <span className="footer-label">{t.ui.localTime}</span>
            <span>
              Toulon {time && `· ${time}`}
            </span>
          </div>
          <div className="footer-socials">
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
            <span>© {new Date().getFullYear()} Antonin RAAS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
