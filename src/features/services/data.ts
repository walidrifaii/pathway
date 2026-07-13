import servicesJson from "@/data/services.json";
import { routes } from "@/constants/routes";

export type ServiceIconName =
  | "skilled"
  | "employer"
  | "family"
  | "student"
  | "visitor"
  | "appeals";

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

const services = servicesJson.services as ServiceDetail[];

export const servicesPageContent = servicesJson.page;
export const homeServicesContent = servicesJson.home;

export function getAllServices(): ServiceDetail[] {
  return services;
}

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return services.find((service) => service.slug === slug);
}

export function serviceHref(slug: string) {
  return `${routes.services}/${slug}`;
}

export const serviceCards: ServiceCard[] = services.map((service) => ({
  id: service.id,
  title: service.title,
  description: service.description,
  href: serviceHref(service.slug),
  icon: service.icon,
}));

/** Home page shows the first three services */
export const homeServiceCards = serviceCards.slice(0, 3);
