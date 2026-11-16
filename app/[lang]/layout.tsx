import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "@fontsource/anton/latin-400.css";
import "@fontsource/anton/latin-ext-400.css";
import "@fontsource-variable/inter";
import "../globals.css";
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
    alternates: { languages: { en: "/en", fr: "/fr", es: "/es", "x-default": "/en" } },
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
        <TransitionProvider greetings={["Hello", "Bonjour", "Hola", "Antonin RAAS"]}>
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
