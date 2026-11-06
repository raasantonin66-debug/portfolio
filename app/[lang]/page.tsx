import { notFound } from "next/navigation";
import Pendulum from "@/components/Pendulum";
import ProjectList from "@/components/ProjectList";
import Magnetic from "@/components/Magnetic";
import WordsReveal from "@/components/WordsReveal";
import { TLink } from "@/components/Transition";
import { getDict, projectColors } from "@/content";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const t = getDict((await params).lang);
  if (!t) notFound();
  const base = `/${t.lang}`;
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <p className="eyebrow fade-in">{t.eyebrow}</p>
          <h1 className="hero-name">
            <WordsReveal text={t.hero.name} delay={0.15} step={0.12} />
          </h1>
          <p className="tagline fade-in" style={{ animationDelay: "0.5s" }}>
            {t.hero.tagline}
          </p>
          <p className="banner fade-in" style={{ animationDelay: "0.7s" }}>
            <span className="pulse" aria-hidden /> {t.hero.banner}
          </p>
        </div>
        <div className="hero-sim fade-in" style={{ animationDelay: "0.3s" }}>
          <Pendulum labels={t.sim} />
        </div>
        <span className="scroll-cue" aria-hidden>
          {t.ui.scroll} ↓
        </span>
      </section>

      <section className="intro-block">
        <div className="intro-compact">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="intro-portrait"
            src={t.aboutPortrait.src}
            width={t.aboutPortrait.w}
            height={t.aboutPortrait.h}
            alt={t.aboutPortrait.alt}
          />
          <p className="statement">{t.hero.subtitle}</p>
          <Magnetic strength={0.4} className="round-wrap">
            <TLink href={`${base}/about`} label={t.nav.about} className="round-btn">
              {t.nav.about}
            </TLink>
          </Magnetic>
        </div>
      </section>

      <section className="section">
        <p className="section-kicker">{t.ui.projectsIntro}</p>
        <ProjectList
          projects={t.projects}
          lang={t.lang}
          colors={projectColors}
          viewLabel={t.ui.viewProject}
        />
        <div className="center">
          <Magnetic strength={0.3}>
            <TLink href={`${base}/projects`} label={t.nav.projects} className="pill pill-lg">
              {t.ui.allProjects} <sup>{t.projects.length}</sup>
            </TLink>
          </Magnetic>
        </div>
      </section>
    </>
  );
}
