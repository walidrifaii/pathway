import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { images } from "@/constants/images";
import { getAboutParagraphs } from "@/features/about/data";
import type { Locale } from "@/i18n/routing";

export const aboutLeftPadClass =
  "px-5 sm:px-8 lg:pl-[max(3rem,calc((100vw-1400px)/2+3rem))] lg:pr-10";

export const aboutImageBoxClass =
  "relative min-h-[360px] w-full overflow-hidden sm:min-h-[480px] lg:min-h-[640px]";

/** Section 2 Australia panel — a bit shorter */
export const aboutAustraliaImageBoxClass =
  "relative min-h-[260px] w-full overflow-hidden sm:min-h-[340px] lg:min-h-[440px]";

/** Section 1: team image slightly narrower than Australia */
export const aboutIntroGridClass =
  "grid w-full lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]";

/** Section 2: Australia image wider */
export const aboutMissionGridClass =
  "grid w-full lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]";

export async function AboutIntro() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("about");
  const paragraphs = getAboutParagraphs(locale);

  return (
    <section className="bg-[#f7f8fa]">
      <div className={`${aboutIntroGridClass} items-stretch gap-0`}>
        <div
          className={`${aboutLeftPadClass} flex flex-col justify-center py-16 sm:py-20 lg:py-28`}
        >
          <div className="max-w-xl">
            <div className="flex flex-col gap-6 sm:gap-7">
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-muted sm:text-lg lg:text-xl"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className={aboutImageBoxClass}>
          <Image
            src={images.aboutTeam}
            alt={t("teamAlt")}
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
    </section>
  );
}
