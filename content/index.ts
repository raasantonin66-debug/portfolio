import { fr } from "./fr";
import { en } from "./en";
import { es } from "./es";
import type { Dict } from "./fr";
import { locales, type Locale } from "./locales";

export { locales };
export type { Locale };
export const dictionaries: Record<Locale, Dict> = { fr, en, es };

export function getDict(lang: string): Dict | null {
  return (locales as readonly string[]).includes(lang) ? dictionaries[lang as Locale] : null;
}
