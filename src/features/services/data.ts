import servicesJson from "@/data/services.json";
import { routes } from "@/constants/routes";
import type { Locale } from "@/i18n/routing";
import { tLocal, tLocalList, type LocalizedString, type LocalizedStringArray } from "@/lib/localize";

export type ServiceIconName =
  | "skilled"
  | "employer"
  | "family"
  | "student"
  | "visitor"
  | "appeals";

type RawService = {
  id: string;
  slug: string;
  icon: ServiceIconName;
  title: LocalizedString;
  navLabel: LocalizedString;
  description: LocalizedString;
  heroDescription: LocalizedString;
  overview: LocalizedStringArray;
  includes: LocalizedStringArray;
  whoFor: LocalizedStringArray;
  process: LocalizedStringArray;
};

export type ServiceDetail = {
  id: string;
  slug: string;
  title: string;
  navLabel: string;
  description: string;
  icon: ServiceIconName;
  heroDescription: string;
  overview: string[];
  includes: string[];
  whoFor: string[];
  process: string[];
};

export type ServiceCard = {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: ServiceIconName;
};

const services = servicesJson.services as RawService[];

export function getAllServices(locale: Locale = "en"): ServiceDetail[] {
  return services.map((service) => ({
    id: service.id,
    slug: service.slug,
    icon: service.icon,
    title: tLocal(service.title, locale),
    navLabel: tLocal(service.navLabel, locale),
    description: tLocal(service.description, locale),
    heroDescription: tLocal(service.heroDescription, locale),
    overview: tLocalList(service.overview, locale),
    includes: tLocalList(service.includes, locale),
    whoFor: tLocalList(service.whoFor, locale),
    process: tLocalList(service.process, locale),
  }));
}

export function getServiceBySlug(slug: string, locale: Locale = "en"): ServiceDetail | undefined {
  return getAllServices(locale).find((service) => service.slug === slug);
}

export function serviceHref(slug: string) {
  return `${routes.services}/${slug}`;
}

export function getServiceCards(locale: Locale = "en"): ServiceCard[] {
  return getAllServices(locale).map((service) => ({
    id: service.id,
    title: service.title,
    description: service.description,
    href: serviceHref(service.slug),
    icon: service.icon,
  }));
}

export function getHomeServiceCards(locale: Locale = "en") {
  return getServiceCards(locale).slice(0, 3);
}

/** @deprecated use getServiceCards(locale) */
export const serviceCards = getServiceCards("en");
export const homeServiceCards = getHomeServiceCards("en");
