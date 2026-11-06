import { notFound } from "next/navigation";
import ProjectList from "@/components/ProjectList";
import Magnetic from "@/components/Magnetic";
import WordsReveal from "@/components/WordsReveal";
import { TLink } from "@/components/Transition";
import { getDict, projectColors } from "@/content";

// Accueil : un « hôte d'accueil » simple qui présente Antonin et mène vers les projets.
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
          <p className="hero-sub fade-in" style={{ animationDelay: "0.6s" }}>
            {t.hero.subtitle}
          </p>
          <div className="hero-ctas fade-in" style={{ animationDelay: "0.7s" }}>
            <Magnetic strength={0.3}>
              <TLink href={`${base}/projects`} label={t.nav.projects} className="pill pill-lg pill-solid">
                {t.hero.ctaProjects}
              </TLink>
            </Magnetic>
            <Magnetic strength={0.3}>
              <TLink href={`${base}/contact`} label={t.nav.contact} className="pill pill-lg">
                {t.hero.ctaContact}
              </TLink>
            </Magnetic>
          </div>
          <p className="banner fade-in" style={{ animationDelay: "0.8s" }}>
            <span className="pulse" aria-hidden /> {t.hero.banner}
          </p>
        </div>
        <figure className="hero-portrait fade-in" style={{ animationDelay: "0.3s" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={t.aboutPortrait.src}
            width={t.aboutPortrait.w}
            height={t.aboutPortrait.h}
            alt={t.aboutPortrait.alt}
          />
        </figure>
        <span className="scroll-cue" aria-hidden>
          {t.ui.scroll} ↓
        </span>
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
