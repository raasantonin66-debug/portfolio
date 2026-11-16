import { notFound } from "next/navigation";
import ProjectList from "@/components/ProjectList";
import Reveal from "@/components/Reveal";
import WordsReveal from "@/components/WordsReveal";
import { TLink } from "@/components/Transition";
import { getDict } from "@/content";

// Accueil : un « hôte d'accueil » qui présente Antonin et mène vers les projets.
// Mise en page : grand titre condensé, collage de deux photos, phrase-manifeste,
// liste des projets, bandeau de disponibilité, bande d'images des projets.
export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const t = getDict((await params).lang);
  if (!t) notFound();
  const base = `/${t.lang}`;

  // Bande d'images : une ou deux images par projet, au cadrage d'origine.
  const strip = t.projects.flatMap((p) => {
    const imgs = [
      ...(p.feature ? [{ src: p.feature.video.poster, w: p.feature.video.w, h: p.feature.video.h, caption: p.feature.video.caption }] : []),
      ...(p.gallery ?? []).filter((g) => !g.src.endsWith(".svg")),
    ].slice(0, 2);
    return imgs.map((g) => ({ ...g, slug: p.slug, label: p.title.split(":")[0] }));
  });

  return (
    <>
      <section className="hero">
        <div className="hero-head">
          <h1 className="display hero-name">
            <WordsReveal text={t.hero.name} delay={0.1} step={0.1} />
          </h1>
          <div className="hero-side fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="eyebrow">{t.eyebrow}</p>
            <p className="hero-sub">{t.hero.subtitle}</p>
            <div className="hero-ctas">
              <TLink href={`${base}/projects`} label={t.nav.projects} className="btn btn-solid">
                {t.hero.ctaProjects}
              </TLink>
              <TLink href={`${base}/contact`} label={t.nav.contact} className="btn">
                {t.hero.ctaContact}
              </TLink>
            </div>
          </div>
        </div>
        <div className="collage fade-in" style={{ animationDelay: "0.25s" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="collage-a"
            src={t.aboutPortrait.src}
            width={t.aboutPortrait.w}
            height={t.aboutPortrait.h}
            alt={t.aboutPortrait.alt}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="collage-b"
            src={t.aboutPhoto.src}
            width={t.aboutPhoto.w}
            height={t.aboutPhoto.h}
            alt={t.aboutPhoto.caption}
          />
        </div>
      </section>

      <section className="statement">
        <Reveal>
          <h2 className="display statement-title">{t.hero.tagline}</h2>
        </Reveal>
      </section>

      <section className="section">
        <Reveal className="section-head">
          <h2 className="display section-title">{t.projectsTitle}</h2>
          <p className="section-note">{t.ui.projectsIntro}</p>
        </Reveal>
        <ProjectList projects={t.projects} lang={t.lang} viewLabel={t.ui.viewProject} />
        <div className="center">
          <TLink href={`${base}/projects`} label={t.nav.projects} className="btn">
            {t.ui.allProjects}
          </TLink>
        </div>
      </section>

      <section className="band">
        <Reveal className="band-inner">
          <p className="band-label">{t.ui.available}</p>
          <p className="display band-quote">{t.hero.banner}</p>
          <TLink href={`${base}/contact`} label={t.nav.contact} className="btn btn-dark">
            {t.hero.ctaContact}
          </TLink>
        </Reveal>
      </section>

      <section className="strip" aria-label={t.ui.gallery}>
        <div className="strip-track">
          {[...strip, ...strip].map((g, i) => (
            <TLink
              key={i}
              href={`${base}/projects/${g.slug}`}
              label={g.label}
              className="strip-item"
              aria-hidden={i >= strip.length ? true : undefined}
              tabIndex={i >= strip.length ? -1 : undefined}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={g.src} width={g.w} height={g.h} alt={i >= strip.length ? "" : g.caption} loading="lazy" />
            </TLink>
          ))}
        </div>
      </section>
    </>
  );
}
