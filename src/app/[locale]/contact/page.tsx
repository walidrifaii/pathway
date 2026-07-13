import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/layout/PageHero";
import { ContactSection } from "@/features/contact/components/ContactSection";
import { ContactMap } from "@/features/contact/components/ContactMap";
import { config } from "@/constants/config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return {
    title: `${t("title")} | ${config.appName}`,
    description: t("description"),
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  return (
    <main>
      <PageHero title={t("title")} description={t("description")} breadcrumbLabel={t("breadcrumb")} />
      <ContactSection />
      <ContactMap />
    </main>
  );
}
