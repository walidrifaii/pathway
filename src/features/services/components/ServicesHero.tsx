import { PageHero } from "@/components/layout/PageHero";
import { servicesPageContent } from "@/features/services/data";

export function ServicesHero() {
  return (
    <PageHero
      title={servicesPageContent.title}
      description={servicesPageContent.description}
      breadcrumbLabel="Services"
    />
  );
}
