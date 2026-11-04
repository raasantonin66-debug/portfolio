import { notFound } from "next/navigation";
import Portfolio from "@/components/Portfolio";
import { getDict } from "@/content";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const t = getDict((await params).lang);
  if (!t) notFound();
  return <Portfolio t={t} />;
}
