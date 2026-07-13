import Image from "next/image";
import Link from "next/link";
import { images } from "@/constants/images";
import { homeContent } from "@/features/home/data";

export function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100dvh-var(--header-height))] overflow-hidden bg-[#002147]">
      <Image
        src={images.hero}
        alt="Sydney Opera House and harbour skyline"
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="animate-hero-zoom object-cover object-[68%_center] max-md:object-[72%_30%] sm:object-[70%_center] lg:object-center"
      />

      {/* Mobile: stronger full-frame fade for readability */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 33, 71, 0.72) 0%, rgba(0, 33, 71, 0.55) 42%, rgba(0, 33, 71, 0.35) 70%, rgba(0, 33, 71, 0.45) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Desktop: left blurred blue fade */}
      <div
        className="absolute inset-y-0 left-0 hidden w-[65%] backdrop-blur-[10px] md:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 33, 71, 0.78) 0%, rgba(0, 33, 71, 0.65) 45%, rgba(0, 33, 71, 0.28) 75%, rgba(0, 33, 71, 0) 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, #000 0%, #000 55%, transparent 100%)",
          maskImage: "linear-gradient(90deg, #000 0%, #000 55%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 33, 71, 0.55) 0%, rgba(0, 33, 71, 0.4) 40%, rgba(0, 33, 71, 0.15) 60%, rgba(0, 33, 71, 0) 75%)",
        }}
        aria-hidden="true"
      />

      <div className="relative flex min-h-[calc(100dvh-var(--header-height))] w-full items-start px-5 pt-10 pb-16 sm:px-8 sm:pt-12 md:px-0 md:pt-[9%] md:pb-20 md:pl-24 lg:pl-44 lg:pt-[10%] xl:pl-52">
        <div className="w-full max-w-[42rem] text-white sm:max-w-[48rem] md:w-[58%]">
          <p className="animate-fade-up text-[0.6875rem] font-semibold tracking-[0.18em] text-white uppercase sm:text-[0.8125rem] md:text-base lg:text-[1.0625rem] md:tracking-[0.22em]">
            {homeContent.eyebrow}
          </p>

          {/* Mobile: natural wrap / Desktop: two-line break */}
          <h1 className="animate-fade-up animate-delay-1 mt-4 font-display text-[2.35rem] leading-[1.12] font-bold tracking-tight sm:mt-5 sm:text-[3rem] md:mt-6 md:text-[4rem] lg:text-[4.75rem] md:leading-[1.08]">
            <span className="md:hidden">Migration &amp; Visa Experts You Can Trust</span>
            <span className="hidden md:inline">
              Migration &amp; Visa
              <br />
              Experts You Can Trust
            </span>
          </h1>

          <p className="animate-fade-up animate-delay-2 mt-5 max-w-[34rem] text-[1rem] leading-[1.65] font-normal text-white/95 sm:mt-6 sm:text-[1.15rem] md:mt-7 md:text-[1.35rem] lg:text-[1.45rem] md:leading-[1.7]">
            <span className="md:hidden">
              RAE Pathways is your trusted partner in achieving your Australian dream. We
              guide you every step of the way.
            </span>
            <span className="hidden md:inline">
              RAE Pathways is your trusted partner in
              <br />
              achieving your Australian dream.
              <br />
              We guide you every step of the way.
            </span>
          </p>

          <div className="animate-fade-up animate-delay-3 mt-8 flex w-full flex-col gap-3 sm:mt-9 sm:gap-4 md:mt-10 md:w-auto md:flex-row md:items-center md:gap-5">
            <Link
              href={homeContent.primaryCta.href}
              className="inline-flex w-full items-center justify-center rounded-md bg-gold px-6 py-3.5 text-[0.95rem] font-semibold text-white transition-all duration-300 hover:bg-gold-hover sm:py-4 sm:text-[1.05rem] md:w-auto md:px-10 md:py-[1.15rem] md:text-[1.125rem]"
            >
              {homeContent.primaryCta.label}
            </Link>
            <Link
              href={homeContent.secondaryCta.href}
              className="inline-flex w-full items-center justify-center rounded-md border-2 border-white px-6 py-3.5 text-[0.95rem] font-semibold text-white transition-all duration-300 hover:bg-white/10 sm:py-4 sm:text-[1.05rem] md:w-auto md:px-10 md:py-[1.15rem] md:text-[1.125rem]"
            >
              {homeContent.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
