"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { routes } from "@/constants/routes";
import { ServiceIcon } from "@/features/home/components/ServiceIcons";
import type { ServiceIconName } from "@/features/services/data";

const heroServiceIds: {
  id: string;
  slug: string;
  icon: ServiceIconName;
  titleKey: string;
  subtitleKey: string;
}[] = [
  {
    id: "skilled",
    slug: "skilled-migration",
    icon: "skilled",
    titleKey: "skilledTitle",
    subtitleKey: "skilledSubtitle",
  },
  {
    id: "family",
    slug: "family-partner",
    icon: "family",
    titleKey: "familyTitle",
    subtitleKey: "familySubtitle",
  },
  {
    id: "employer",
    slug: "employer-sponsored",
    icon: "employer",
    titleKey: "employerTitle",
    subtitleKey: "employerSubtitle",
  },
  {
    id: "student",
    slug: "student-visas",
    icon: "student",
    titleKey: "studentTitle",
    subtitleKey: "studentSubtitle",
  },
  {
    id: "visitor",
    slug: "visitor-visas",
    icon: "visitor",
    titleKey: "visitorTitle",
    subtitleKey: "visitorSubtitle",
  },
  {
    id: "appeals",
    slug: "aat-appeals",
    icon: "appeals",
    titleKey: "appealsTitle",
    subtitleKey: "appealsSubtitle",
  },
];

export function HeroServices() {
  const t = useTranslations("heroServices");

  return (
    <section className="bg-[#eef1f4] px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1400px]">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6 lg:gap-5">
          {heroServiceIds.map((service, index) => (
            <li
              key={service.id}
              className="animate-fade-up"
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
            >
              <Link
                href={`${routes.services}/${service.slug}`}
                className="group flex h-full min-h-[11rem] flex-col items-center justify-center rounded-2xl bg-white px-4 py-7 text-center shadow-[0_8px_30px_rgba(15,39,68,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(15,39,68,0.16)] sm:min-h-[12.5rem] sm:px-5 sm:py-8 lg:min-h-[13.5rem]"
              >
                <ServiceIcon
                  name={service.icon}
                  className="mb-4 h-14 w-14 text-navy transition-transform duration-300 group-hover:scale-105 sm:mb-5 sm:h-16 sm:w-16"
                />
                <span className="text-[1rem] leading-snug font-bold text-navy sm:text-[1.1rem]">
                  {t(service.titleKey)}
                </span>
                <span className="mt-1 text-[0.95rem] font-medium text-navy/80 sm:text-[1.05rem]">
                  {t(service.subtitleKey)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
