import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/layout/PageHero";
import { RequirementsContent } from "@/features/requirements/components/RequirementsContent";
import { images } from "@/constants/images";
import { config } from "@/constants/config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "requirements" });

  return {
    title: `${t("title")} | ${config.appName}`,
    description: t("description"),
  };
}

export default async function RequirementsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("requirements");

  return (
    <main>
      <PageHero
        title={t("title")}
        description={t("description")}
        breadcrumbLabel={t("breadcrumb")}
        image={images.requirementsHero}
        imageAlt={t("imageAlt")}
      />
      <RequirementsContent />
    </main>
  );
}
