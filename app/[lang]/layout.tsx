import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "@fontsource-variable/bricolage-grotesque/opsz.css";
import "@fontsource-variable/jetbrains-mono";
import "../globals.css";
import Waves from "@/components/Waves";
import { getDict, locales } from "@/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const t = getDict((await params).lang);
  if (!t) return {};
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: { languages: { fr: "/fr", en: "/en", es: "/es" } },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!getDict(lang)) notFound();
  return (
    <html lang={lang}>
      <body>
        <Waves />
        <div className="page">{children}</div>
      </body>
    </html>
  );
}
