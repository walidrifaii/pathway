"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/layout/Logo";
import { config } from "@/constants/config";
import { contactInfo } from "@/constants/contact";
import { routes } from "@/constants/routes";
import contentJson from "@/data/content.json";
import { useLocale } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { tLocal } from "@/lib/localize";

export function Footer() {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const year = new Date().getFullYear();

  const companyLinks = [
    { label: t("nav.home"), href: routes.home },
    { label: t("nav.about"), href: routes.about },
    { label: t("nav.contact"), href: routes.contact },
    { label: t("nav.requirements"), href: routes.requirements },
    { label: t("nav.blog"), href: routes.blog },
  ];

  const serviceLinks = [
    { label: t("heroServices.skilledTitle"), href: `${routes.services}/skilled-migration` },
    { label: t("heroServices.familyTitle"), href: `${routes.services}/family-partner` },
    { label: t("heroServices.employerTitle"), href: `${routes.services}/employer-sponsored` },
    { label: t("heroServices.studentTitle"), href: `${routes.services}/student-visas` },
    { label: t("heroServices.visitorTitle"), href: `${routes.services}/visitor-visas` },
    { label: t("heroServices.appealsTitle"), href: `${routes.services}/aat-appeals` },
  ];

  return (
    <footer className="mt-auto bg-[#002147] text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-white/70">
              {t("meta.siteDescription")}
            </p>
            <Link
              href={routes.consultation}
              className="mt-7 inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gold-hover"
            >
              {t("nav.bookConsultation")}
            </Link>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold tracking-[0.14em] text-gold uppercase">
              {t("footer.company")}
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.95rem] text-white/75 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold tracking-[0.14em] text-gold uppercase">
              {t("footer.services")}
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {serviceLinks.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-[0.95rem] text-white/75 transition-colors hover:text-gold"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold tracking-[0.14em] text-gold uppercase">
              {t("footer.contact")}
            </h3>
            <ul className="mt-5 flex flex-col gap-4 text-[0.95rem] text-white/75">
              <li>
                <a href={contactInfo.emailHref} className="transition-colors hover:text-gold">
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a href={contactInfo.phoneHref} className="transition-colors hover:text-gold">
                  {contactInfo.phone}
                </a>
              </li>
              <li>{tLocal(contentJson.address, locale)}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-5 py-5 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>
            © {year} {config.appName}. {t("footer.rights")}
          </p>
          <p>
            {t("footer.poweredBy")}{" "}
            <a
              href="https://www.amctag.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gold transition-colors hover:text-white"
            >
              Amctag
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
