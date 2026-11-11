import type { Metadata } from "next";
import { notFound } from "next/navigation";
import WordsReveal from "@/components/WordsReveal";
import { getDict } from "@/content";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const t = getDict((await params).lang);
  return { title: t?.nav.contact };
}

export default async function Contact({ params }: { params: Promise<{ lang: string }> }) {
  const t = getDict((await params).lang);
  if (!t) notFound();
  return (
    <section className="page-head section contact-page">
      <h1 className="page-title">
        <WordsReveal text={t.contactText} step={0.06} />
      </h1>
      <p className="lead fade-in" style={{ animationDelay: "0.5s" }}>
        {t.hero.banner}
      </p>
      <ul className="contact-links fade-in" style={{ animationDelay: "0.65s" }}>
        {t.links.email && (
          <li>
            <a href={`mailto:${t.links.email}`}>
              <span className="contact-label">Email</span>
              <span className="contact-value">{t.links.email}</span>
              <span className="contact-arrow" aria-hidden>↗</span>
            </a>
          </li>
        )}
        {t.links.linkedin && (
          <li>
            <a href={t.links.linkedin} target="_blank" rel="noreferrer">
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">Antonin RAAS</span>
              <span className="contact-arrow" aria-hidden>↗</span>
            </a>
          </li>
        )}
      </ul>
    </section>
  );
}
