import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import WordsReveal from "@/components/WordsReveal";
import { getDict } from "@/content";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const t = getDict((await params).lang);
  return { title: t?.nav.about };
}

export default async function About({ params }: { params: Promise<{ lang: string }> }) {
  const t = getDict((await params).lang);
  if (!t) notFound();
  return (
    <>
      <section className="page-head section">
        <h1 className="page-title">
          <WordsReveal text={t.ui.intro} step={0.06} />
        </h1>
      </section>

      <section className="section about-photo">
        <Reveal>
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={t.aboutPhoto.src} width={t.aboutPhoto.w} height={t.aboutPhoto.h} alt={t.aboutPhoto.caption} />
            <figcaption>{t.aboutPhoto.caption}</figcaption>
          </figure>
        </Reveal>
      </section>

      <section className="section about">
        <Reveal className="about-side">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="about-portrait"
            src={t.aboutPortrait.src}
            width={t.aboutPortrait.w}
            height={t.aboutPortrait.h}
            alt={t.aboutPortrait.alt}
          />
        </Reveal>
        <div className="about-main">
          <Reveal className="about-text">
            {t.about.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </Reveal>
          <Reveal className="stats">
            {t.stats.map((s) => (
              <div className="stat" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section" id="competences">
        <Reveal>
          <p className="section-kicker">{t.skillsTitle}</p>
        </Reveal>
        <div className="skills-rail">
          {t.skills.map((s, i) => (
            <Reveal className="skill-card" key={s.domain}>
              <span className="skill-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.domain}</h3>
              <p>{s.skills}</p>
              {s.proof && (
                <p className="proof">
                  {t.skillsHead.proof} : {s.proof}
                </p>
              )}
            </Reveal>
          ))}
        </div>
        <Reveal className="soft">
          <h3>{t.softSkillsLabel}</h3>
          <p>{t.softSkills}</p>
        </Reveal>
      </section>
    </>
  );
}
