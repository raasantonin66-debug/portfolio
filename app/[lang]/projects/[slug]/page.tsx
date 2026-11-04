import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Magnetic from "@/components/Magnetic";
import Gallery from "@/components/Gallery";
import WordsReveal from "@/components/WordsReveal";
import { TLink } from "@/components/Transition";
import { fr } from "@/content/fr";
import { getDict, locales, projectColors } from "@/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) => fr.projects.map((p) => ({ lang, slug: p.slug })));
}

type P = { params: Promise<{ lang: string; slug: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang, slug } = await params;
  const p = getDict(lang)?.projects.find((x) => x.slug === slug);
  return { title: p?.title.split(":")[0] };
}

export default async function ProjectPage({ params }: P) {
  const { lang, slug } = await params;
  const t = getDict(lang);
  if (!t) notFound();
  const i = t.projects.findIndex((p) => p.slug === slug);
  if (i < 0) notFound();
  const p = t.projects[i];
  const next = t.projects[(i + 1) % t.projects.length];
  const [c1, c2] = projectColors[p.slug] ?? ["#4cc9f0", "#9b6dff"];
  const [nc1, nc2] = projectColors[next.slug] ?? ["#4cc9f0", "#9b6dff"];
  const meta = p.meta.split("·").map((s) => s.trim());

  return (
    <article style={{ "--c1": c1, "--c2": c2 } as React.CSSProperties}>
      <section className="page-head section">
        <TLink href={`/${lang}/projects`} label={t.nav.projects} className="back-link">
          ← {t.ui.backToProjects}
        </TLink>
        <h1 className="page-title project-title">
          <WordsReveal text={p.title} step={0.05} />
        </h1>
        <div className="project-meta fade-in" style={{ animationDelay: "0.4s" }}>
          {meta.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
      </section>

      <div className="project-visual fade-in" style={{ animationDelay: "0.5s" }} aria-hidden>
        <span className="project-visual-num">{String(i + 1).padStart(2, "0")}</span>
      </div>

      <section className="section project-body">
        {p.blocks.map((b, k) => (
          <div className="pblock" key={b.label}>
            <span className="pblock-num">{String(k + 1).padStart(2, "0")}</span>
            <h2>{b.label}</h2>
            <p>{b.text}</p>
          </div>
        ))}
      </section>

      {p.gallery && p.gallery.length > 0 && (
        <section className="section">
          <Gallery items={p.gallery} closeLabel={t.ui.close} />
        </section>
      )}

      <section className="section next-project">
        <p className="section-kicker">{t.ui.nextProject}</p>
        <Magnetic strength={0.12}>
          <TLink
            href={`/${lang}/projects/${next.slug}`}
            label={next.title.split(":")[0]}
            className="next-link"
            style={{ "--c1": nc1, "--c2": nc2 } as React.CSSProperties}
          >
            {next.title}
          </TLink>
        </Magnetic>
      </section>
    </article>
  );
}
