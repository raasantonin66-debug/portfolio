import Pendulum from "./Pendulum";
import Reveal from "./Reveal";
import type { Dict } from "@/content/fr";
import { locales } from "@/content";

export default function Portfolio({ t }: { t: Dict }) {
  const { links } = t;
  return (
    <>
      <header className="nav">
        <a href="#top" className="brand">
          A<span>R</span>
        </a>
        <nav aria-label={t.a11y.nav}>
          <a href="#projets">{t.nav.projects}</a>
          <a href="#competences">{t.nav.skills}</a>
          <a href="#apropos">{t.nav.about}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
        <div className="langs" aria-label={t.a11y.lang}>
          {locales.map((l) =>
            l === t.lang ? (
              <span key={l} className="lang-active" aria-current="page">
                {l.toUpperCase()}
              </span>
            ) : (
              <a key={l} href={`/${l}`} hrefLang={l}>
                {l.toUpperCase()}
              </a>
            )
          )}
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-text">
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>
              {t.hero.name}
              <span className="tagline">{t.hero.tagline}</span>
            </h1>
            <p className="lead">{t.hero.subtitle}</p>
            <div className="ctas">
              <a className="btn btn-primary" href="#projets">
                {t.hero.ctaProjects}
              </a>
              <a className="btn" href="#contact">
                {t.hero.ctaContact}
              </a>
            </div>
            <blockquote className="story">{t.hero.story}</blockquote>
          </div>
          <div className="hero-sim">
            <Pendulum labels={t.sim} />
            <p className="sim-caption">{t.sim.caption}</p>
          </div>
        </section>

        <div className="banner" role="note">
          <span className="pulse" aria-hidden /> {t.hero.banner}
        </div>

        <section id="projets" className="section">
          <Reveal>
            <h2>
              <span className="num">01</span> {t.projectsTitle}
            </h2>
          </Reveal>
          <div className="projects">
            {t.projects.map((p) => (
              <Reveal key={p.slug} className={`card ${p.featured ? "card-featured" : ""}`}>
                <article>
                  <p className="card-meta">
                    {p.meta}
                    {p.status && <span className="badge">{p.status}</span>}
                  </p>
                  <h3>{p.title}</h3>
                  <dl>
                    {p.blocks.map((b) => (
                      <div key={b.label}>
                        <dt>{b.label}</dt>
                        <dd>{b.text}</dd>
                      </div>
                    ))}
                  </dl>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="competences" className="section">
          <Reveal>
            <h2>
              <span className="num">02</span> {t.skillsTitle}
            </h2>
          </Reveal>
          <Reveal className="skills">
            {t.skills.map((s) => (
              <div className="skill-row" key={s.domain}>
                <h3>{s.domain}</h3>
                <p>{s.skills}</p>
                {s.proof && (
                  <p className="proof">
                    {t.skillsHead.proof} : {s.proof}
                  </p>
                )}
              </div>
            ))}
          </Reveal>
          <Reveal className="soft">
            <h3>{t.softSkillsLabel}</h3>
            <p>{t.softSkills}</p>
          </Reveal>
        </section>

        <section id="apropos" className="section">
          <Reveal>
            <h2>
              <span className="num">03</span> {t.aboutTitle}
            </h2>
          </Reveal>
          <div className="about">
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

        <section id="contact" className="section contact">
          <Reveal>
            <h2>
              <span className="num">04</span> {t.contactTitle}
            </h2>
            <p className="lead">{t.contactText}</p>
            <div className="ctas">
              {links.email && (
                <a className="btn btn-primary" href={`mailto:${links.email}`}>
                  {links.email}
                </a>
              )}
              {links.linkedin && (
                <a className="btn" href={links.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              )}
              {links.github && (
                <a className="btn" href={links.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} · {t.footer}
        </p>
      </footer>
    </>
  );
}
