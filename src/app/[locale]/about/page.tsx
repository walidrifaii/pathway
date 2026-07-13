import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/layout/PageHero";
import { AboutIntro } from "@/features/about/components/AboutIntro";
import { AboutMissionValues } from "@/features/about/components/AboutMissionValues";
import { AboutTrustStats } from "@/features/about/components/AboutTrustStats";
import { getAboutParagraphs } from "@/features/about/data";
import { config } from "@/constants/config";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  const paragraphs = getAboutParagraphs(locale as Locale);

  return {
    title: `${t("title")} | ${config.appName}`,
    description: paragraphs[0],
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const paragraphs = getAboutParagraphs(locale as Locale);

  return (
    <main>
      <PageHero title={t("title")} description={paragraphs[0]} breadcrumbLabel={t("breadcrumb")} />
      <AboutIntro />
      <AboutMissionValues />
      <AboutTrustStats />
    </main>
  );
}
