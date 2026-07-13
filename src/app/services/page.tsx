import type { Metadata } from "next";
import { OurServices } from "@/features/services/components/OurServices";
import { servicesPageContent } from "@/features/services/data";
import { config } from "@/constants/config";

export const metadata: Metadata = {
  title: `${servicesPageContent.title} | ${config.appName}`,
  description: servicesPageContent.description,
};

export default function ServicesPage() {
  return (
    <main>
      <OurServices />
    </main>
  );
}
