import type { Locale } from "@/i18n/routing";

export type LocalizedString = string | { en: string; ar: string };

export type LocalizedStringArray = string[] | { en: string[]; ar: string[] };

export function tLocal(value: LocalizedString | undefined, locale: Locale): string {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value[locale] || value.en || "";
}

export function tLocalList(
  value: LocalizedStringArray | undefined,
  locale: Locale,
): string[] {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  return value[locale] || value.en || [];
}
