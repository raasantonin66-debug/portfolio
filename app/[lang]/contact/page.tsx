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
    </section>
  );
}
