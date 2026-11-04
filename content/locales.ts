// Séparé de content/index.ts pour pouvoir l'importer côté client sans charger tous les textes.
export const locales = ["fr", "en", "es"] as const;
export type Locale = (typeof locales)[number];
