import type { Metadata } from "next";
import { ServicesHero } from "@/features/services/components/ServicesHero";
import { ServicesGrid } from "@/features/services/components/ServicesGrid";
import { TrustStats } from "@/features/home/components/TrustStats";
import { servicesPageContent } from "@/features/services/data";
import { config } from "@/constants/config";

export const metadata: Metadata = {
  title: `${servicesPageContent.title} | ${config.appName}`,
  description: servicesPageContent.description,
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesGrid />
      <TrustStats />
    </main>
  );
}
