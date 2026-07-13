import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { ServiceDetailContent } from "@/features/services/components/ServiceDetailContent";
import { getAllServices, getServiceBySlug } from "@/features/services/data";
import { config } from "@/constants/config";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllServices().map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: `Services | ${config.appName}` };
  }

  return {
    title: `${service.title} | ${config.appName}`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

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
