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

// Couleur propre à chaque projet (aperçus, accents).
export const projectColors: Record<string, [string, string]> = {
  "double-pendule": ["#f2b544", "#ff7a59"],
  "chauffage-inertie": ["#ff7a59", "#9b6dff"],
  littobs: ["#4cc9f0", "#50d18d"],
  "simulateur-vehicule": ["#9b6dff", "#4cc9f0"],
};
