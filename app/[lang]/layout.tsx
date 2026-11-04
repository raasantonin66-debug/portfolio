import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "@fontsource-variable/bricolage-grotesque/opsz.css";
import "@fontsource-variable/jetbrains-mono";
import "../globals.css";
import Waves from "@/components/Waves";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TransitionProvider } from "@/components/Transition";
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
    title: { default: t.meta.title, template: `%s · Antonin RAAS` },
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
  const t = getDict(lang);
  if (!t) notFound();
  return (
    <html lang={lang}>
      <body>
        <Waves />
        <div className="grain" aria-hidden />
        <TransitionProvider greetings={["Bonjour", "Hello", "Hola", "Antonin RAAS"]}>
          <Header t={t} />
          <div className="page">
            <main>{children}</main>
            <Footer t={t} />
          </div>
        </TransitionProvider>
      </body>
    </html>
  );
}
