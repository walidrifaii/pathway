import contentJson from "@/data/content.json";
import type { Locale } from "@/i18n/routing";
import { tLocal, tLocalList } from "@/lib/localize";

export type AboutTrustStat = {
  id: string;
  value: string;
  labelKey: "years" | "cases" | "satisfaction" | "marn";
  icon: "experience" | "cases" | "satisfaction" | "marn";
};

export function getAboutParagraphs(locale: Locale) {
  return tLocalList(contentJson.paragraphs, locale);
}

export function getAboutMissionDescription(locale: Locale) {
  return tLocal(contentJson.mission.description, locale);
}

export function getAboutValues(locale: Locale) {
  return tLocalList(contentJson.values.items, locale);
}

export function getAboutWhyChooseUs(locale: Locale) {
  return tLocalList(contentJson.whyChooseUs.items, locale);
}

export const aboutTrustStats: AboutTrustStat[] = [
  { id: "experience", value: "10+", labelKey: "years", icon: "experience" },
  { id: "cases", value: "1,000+", labelKey: "cases", icon: "cases" },
  { id: "satisfaction", value: "99%", labelKey: "satisfaction", icon: "satisfaction" },
  { id: "marn", value: "MARN", labelKey: "marn", icon: "marn" },
];
