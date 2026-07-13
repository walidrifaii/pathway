import Image from "next/image";
import { images } from "@/constants/images";
import { servicesPageContent } from "@/features/services/data";

export function ServicesHero() {
  return (
    <section className="relative isolate overflow-hidden border-b-4 border-gold bg-[#002147]">
      <div className="relative min-h-[220px] sm:min-h-[280px] lg:min-h-[320px]">
        <Image
          src={images.hero}
          alt="Sydney Opera House and Harbour Bridge"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_40%]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 33, 71, 0.92) 0%, rgba(0, 33, 71, 0.78) 45%, rgba(0, 33, 71, 0.55) 100%)",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto flex min-h-[220px] max-w-[1400px] items-center px-5 py-12 sm:min-h-[280px] sm:px-8 sm:py-16 lg:min-h-[320px] lg:px-12">
          <div className="max-w-3xl text-white">
            <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {servicesPageContent.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
              {servicesPageContent.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
