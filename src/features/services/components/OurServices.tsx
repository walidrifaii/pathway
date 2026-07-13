import { getLocale, getTranslations } from "next-intl/server";
import { ServiceCards } from "@/features/services/components/ServiceCards";
import { getHomeServiceCards } from "@/features/services/data";
import type { Locale } from "@/i18n/routing";

export async function OurServices() {
  const t = await getTranslations("home");
  const locale = (await getLocale()) as Locale;
  const cards = getHomeServiceCards(locale);

  return (
    <section className="bg-[#f7f8fa] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <p className="text-sm font-semibold tracking-[0.14em] text-gold uppercase">
            — {t("servicesEyebrow")}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl lg:text-[2.75rem]">
            {t("servicesTitle")}
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">{t("servicesDescription")}</p>
        </div>

        <ServiceCards items={cards} />
      </div>
    </section>
  );
}
