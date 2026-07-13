import type { Metadata } from "next";
import { Suspense } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/layout/PageHero";
import { ConsultationSection } from "@/features/consultation/components/ConsultationSection";
import { getAllServices } from "@/features/services/data";
import { config } from "@/constants/config";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "consultation" });

  return {
    title: `${t("title")} | ${config.appName}`,
    description: t("description"),
  };
}

export default async function ConsultationPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("consultation");
  const tCommon = await getTranslations("common");
  const services = getAllServices(locale as Locale).map((service) => ({
    slug: service.slug,
    title: service.title,
  }));

  return (
    <main>
      <PageHero
        title={t("title")}
        description={t("description")}
        breadcrumbLabel={t("breadcrumb")}
      />
      <Suspense
        fallback={
          <div className="bg-[#f7f8fa] px-5 py-20 text-center text-muted">
            {tCommon("loadingForm")}
          </div>
        }
      >
        <ConsultationSection services={services} />
      </Suspense>
    </main>
  );
}
