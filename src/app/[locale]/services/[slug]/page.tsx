import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/layout/PageHero";
import { ServiceDetailContent } from "@/features/services/components/ServiceDetailContent";
import { getAllServices, getServiceBySlug } from "@/features/services/data";
import { config } from "@/constants/config";
import type { Locale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";

type ServicePageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getAllServices("en").map((service) => ({ locale, slug: service.slug })),
  );
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = getServiceBySlug(slug, locale as Locale);

  if (!service) {
    return { title: `Services | ${config.appName}` };
  }

  return {
    title: `${service.title} | ${config.appName}`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const service = getServiceBySlug(slug, locale as Locale);

  if (!service) {
    notFound();
  }

  return (
    <main>
      <PageHero
        title={service.title}
        description={service.heroDescription}
        breadcrumbLabel={service.navLabel}
      />
      <ServiceDetailContent service={service} />
    </main>
  );
}
