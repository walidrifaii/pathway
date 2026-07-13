import { ServiceCards } from "@/features/services/components/ServiceCards";
import type { ServiceCard } from "@/features/services/data";

type ServicesGridProps = {
  items: ServiceCard[];
};

export function ServicesGrid({ items }: ServicesGridProps) {
  return (
    <section className="bg-[#f3f5f7] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1400px]">
        <ServiceCards items={items} />
      </div>
    </section>
  );
}
