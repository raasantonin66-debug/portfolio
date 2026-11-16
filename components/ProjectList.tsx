import type { Project } from "@/content/fr";
import { TLink } from "./Transition";

const nbsp = (s: string) => s.replace(/ ([:;?!])/g, " $1");

// Liste de projets : de grandes lignes séparées par un filet, le titre en
// capitales condensées porte la ligne, le contexte et l'année en petit.
export default function ProjectList({
  projects,
  lang,
  viewLabel,
}: {
  projects: Project[];
  lang: string;
  viewLabel: string;
}) {
  return (
    <div className="plist">
      {projects.map((p, i) => {
        const [main, sub] = p.title.split(/\s*:\s*/);
        const meta = p.meta.split("·").map((s) => s.trim());
        const second = p.status ?? p.meta.match(/\d{4}/)?.[0] ?? "";
        return (
          <TLink key={p.slug} href={`/${lang}/projects/${p.slug}`} label={main} className="prow">
            <span className="prow-num">{String(i + 1).padStart(2, "0")}</span>
            <span className="prow-main">
              <span className="prow-title">{nbsp(main)}</span>
              {sub && <span className="prow-sub">{sub}</span>}
            </span>
            <span className="prow-meta">
              {[meta[0], second && !meta[0].toLowerCase().includes(second.toLowerCase()) ? second : ""]
                .filter(Boolean)
                .join(" · ")}
            </span>
            <span className="prow-link">{viewLabel}</span>
          </TLink>
        );
      })}
    </div>
  );
}
