import type { Project } from "@/content/fr";
import { TLink } from "./Transition";

const nbsp = (s: string) => s.replace(/ ([:;?!])/g, " $1");

// Liste de projets en grandes lignes, sans vignette : le titre porte la ligne.
export default function ProjectList({ projects, lang }: { projects: Project[]; lang: string }) {
  return (
    <div className="plist">
      {projects.map((p, i) => {
        const year = p.status ?? p.meta.match(/\d{4}/)?.[0] ?? "";
        return (
          <TLink key={p.slug} href={`/${lang}/projects/${p.slug}`} label={p.title.split(":")[0]} className="prow">
            <span className="prow-num">{String(i + 1).padStart(2, "0")}</span>
            <span className="prow-title">{nbsp(p.title)}</span>
            <span className="prow-meta">{year}</span>
            <span className="prow-arrow" aria-hidden>
              →
            </span>
          </TLink>
        );
      })}
    </div>
  );
}
