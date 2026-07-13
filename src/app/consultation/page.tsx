import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { ConsultationSection } from "@/features/consultation/components/ConsultationSection";
import { consultationPageContent } from "@/features/consultation/data";
import { getAllServices } from "@/features/services/data";
import { config } from "@/constants/config";

export const metadata: Metadata = {
  title: `${consultationPageContent.title} | ${config.appName}`,
  description: consultationPageContent.description,
};

export default function ConsultationPage() {
  const services = getAllServices().map((service) => ({
    slug: service.slug,
    title: service.title,
  }));

  return (
    <main>
      <PageHero
        title={consultationPageContent.title}
        description={consultationPageContent.description}
        breadcrumbLabel={consultationPageContent.breadcrumbLabel}
      />
      <Suspense fallback={<div className="bg-[#f7f8fa] px-5 py-20 text-center text-muted">Loading form...</div>}>
        <ConsultationSection services={services} />
      </Suspense>
    </main>
  );
}
