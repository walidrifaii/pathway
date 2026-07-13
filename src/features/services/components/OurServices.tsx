import { ServiceCards } from "@/features/services/components/ServiceCards";
import { homeServiceCards, homeServicesContent } from "@/features/services/data";

export function OurServices() {
  return (
    <section className="bg-[#f7f8fa] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <p className="text-sm font-semibold tracking-[0.14em] text-gold uppercase">
            — {homeServicesContent.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl lg:text-[2.75rem]">
            {homeServicesContent.title}
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">
            {homeServicesContent.description}
          </p>
        </div>

        <ServiceCards items={homeServiceCards} />
      </div>
    </section>
  );
}
