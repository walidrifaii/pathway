import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { images } from "@/constants/images";
import { routes } from "@/constants/routes";

export async function Hero() {
  const t = await getTranslations("home");
  const locale = await getLocale();
  const isRtl = locale === "ar";

  // Fade from the text side toward the open image side
  const sideGradient = isRtl
    ? "linear-gradient(270deg, rgba(0, 33, 71, 0.78) 0%, rgba(0, 33, 71, 0.65) 45%, rgba(0, 33, 71, 0.28) 75%, rgba(0, 33, 71, 0) 100%)"
    : "linear-gradient(90deg, rgba(0, 33, 71, 0.78) 0%, rgba(0, 33, 71, 0.65) 45%, rgba(0, 33, 71, 0.28) 75%, rgba(0, 33, 71, 0) 100%)";

  const sideMask = isRtl
    ? "linear-gradient(270deg, #000 0%, #000 55%, transparent 100%)"
    : "linear-gradient(90deg, #000 0%, #000 55%, transparent 100%)";

  const softGradient = isRtl
    ? "linear-gradient(270deg, rgba(0, 33, 71, 0.55) 0%, rgba(0, 33, 71, 0.4) 40%, rgba(0, 33, 71, 0.15) 60%, rgba(0, 33, 71, 0) 75%)"
    : "linear-gradient(90deg, rgba(0, 33, 71, 0.55) 0%, rgba(0, 33, 71, 0.4) 40%, rgba(0, 33, 71, 0.15) 60%, rgba(0, 33, 71, 0) 75%)";

  return (
    <section className="relative isolate min-h-[calc(100dvh-var(--header-height))] overflow-hidden bg-[#002147]">
      <Image
        src={images.hero}
        alt="Sydney Opera House and harbour skyline"
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className={`animate-hero-zoom object-cover max-md:object-[72%_30%] sm:object-[70%_center] lg:object-center ${
          isRtl ? "object-[32%_center] max-md:object-[28%_30%]" : "object-[68%_center]"
        }`}
      />

      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 33, 71, 0.72) 0%, rgba(0, 33, 71, 0.55) 42%, rgba(0, 33, 71, 0.35) 70%, rgba(0, 33, 71, 0.45) 100%)",
        }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-y-0 start-0 hidden w-[65%] backdrop-blur-[10px] md:block"
        style={{
          background: sideGradient,
          WebkitMaskImage: sideMask,
          maskImage: sideMask,
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 hidden md:block"
        style={{ background: softGradient }}
        aria-hidden="true"
      />

      <div className="relative flex min-h-[calc(100dvh-var(--header-height))] w-full items-start px-5 pt-10 pb-16 sm:px-8 sm:pt-12 md:px-0 md:pt-[9%] md:pb-20 md:ps-24 lg:ps-44 lg:pt-[10%] xl:ps-52">
        <div className="w-full max-w-[42rem] text-white sm:max-w-[48rem] md:w-[58%]">
          <p className="animate-fade-up text-[0.6875rem] font-semibold tracking-[0.18em] text-white uppercase sm:text-[0.8125rem] md:text-base lg:text-[1.0625rem] md:tracking-[0.22em]">
            {t("eyebrow")}
          </p>

          <h1 className="animate-fade-up animate-delay-1 mt-4 font-display text-[2.35rem] leading-[1.12] font-bold tracking-tight sm:mt-5 sm:text-[3rem] md:mt-6 md:text-[4rem] lg:text-[4.75rem] md:leading-[1.08]">
            {t("title")}
          </h1>

          <p className="animate-fade-up animate-delay-2 mt-5 max-w-[34rem] text-[1rem] leading-[1.65] font-normal text-white/95 sm:mt-6 sm:text-[1.15rem] md:mt-7 md:text-[1.35rem] lg:text-[1.45rem] md:leading-[1.7]">
            {t("description")}
          </p>

          <div className="animate-fade-up animate-delay-3 mt-8 flex w-full flex-col gap-3 sm:mt-9 sm:gap-4 md:mt-10 md:w-auto md:flex-row md:items-center md:gap-5">
            <Link
              href={routes.consultation}
              className="inline-flex w-full items-center justify-center rounded-md bg-gold px-7 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-gold-hover sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
            >
              {t("primaryCta")}
            </Link>
            <Link
              href={routes.services}
              className="inline-flex w-full items-center justify-center rounded-md border border-white/70 bg-white/10 px-7 py-3.5 text-center text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
            >
              {t("secondaryCta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
