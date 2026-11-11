import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectList from "@/components/ProjectList";
import WordsReveal from "@/components/WordsReveal";
import { getDict } from "@/content";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const t = getDict((await params).lang);
  return { title: t?.nav.projects };
}

export default async function Projects({ params }: { params: Promise<{ lang: string }> }) {
  const t = getDict((await params).lang);
  if (!t) notFound();
  return (
    <section className="page-head section">
      <h1 className="page-title">
        <WordsReveal text={t.ui.projectsIntro} step={0.06} />
      </h1>
      <ProjectList projects={t.projects} lang={t.lang} />
    </section>
  );
}
