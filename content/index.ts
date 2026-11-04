import { fr } from "./fr";
import { en } from "./en";
import { es } from "./es";
import type { Dict } from "./fr";

export const locales = ["fr", "en", "es"] as const;
export type Locale = (typeof locales)[number];
export const dictionaries: Record<Locale, Dict> = { fr, en, es };

export function getDict(lang: string): Dict | null {
  return (locales as readonly string[]).includes(lang) ? dictionaries[lang as Locale] : null;
}
