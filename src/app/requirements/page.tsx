import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { RequirementsContent } from "@/features/requirements/components/RequirementsContent";
import { requirementsPageContent } from "@/features/requirements/data";
import { images } from "@/constants/images";
import { config } from "@/constants/config";

export const metadata: Metadata = {
  title: `${requirementsPageContent.title} | ${config.appName}`,
  description: requirementsPageContent.description,
};

export default function RequirementsPage() {
  return (
    <main>
      <PageHero
        title={requirementsPageContent.title}
        description={requirementsPageContent.description}
        breadcrumbLabel={requirementsPageContent.breadcrumbLabel}
        image={images.requirementsHero}
        imageAlt="Melbourne city skyline"
      />
      <RequirementsContent />
    </main>
  );
}
