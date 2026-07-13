import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/layout/PageHero";
import { ServicesGrid } from "@/features/services/components/ServicesGrid";
import { TrustStats } from "@/features/home/components/TrustStats";
import { getServiceCards } from "@/features/services/data";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services");
  const cards = getServiceCards(locale as Locale);

  return (
    <main>
      <PageHero title={t("pageTitle")} description={t("pageDescription")} breadcrumbLabel={t("breadcrumb")} />
      <ServicesGrid items={cards} />
      <TrustStats />
    </main>
  );
}
