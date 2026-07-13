import Image from "next/image";
import { images } from "@/constants/images";
import { aboutMission, aboutValues, aboutWhyChooseUs } from "@/features/about/data";
import {
  aboutMissionGridClass,
  aboutLeftPadClass,
  aboutAustraliaImageBoxClass,
} from "@/features/about/components/AboutIntro";

function GavelIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 18l7-7 3 3-7 7-3-3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M17 9l3-3 4 4-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M10 20l-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7 26h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function SealIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <circle cx="16" cy="14" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M11 22l2 6 3-2 3 2 2-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="14" r="3" fill="currentColor" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function AboutMissionValues() {
  return (
    <section className="overflow-hidden bg-white">
      <div className={`${aboutMissionGridClass} items-stretch gap-0`}>
        <div
          className={`${aboutLeftPadClass} flex flex-col justify-center gap-12 py-16 sm:py-20 lg:py-24`}
        >
          <div>
            <div className="flex items-center gap-3">
              <GavelIcon className="h-8 w-8 text-gold" />
              <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">
                {aboutMission.title}
              </h2>
            </div>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              {aboutMission.description}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <SealIcon className="h-8 w-8 text-gold" />
              <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">
                {aboutValues.title}
              </h2>
            </div>
            <ul className="mt-5 flex flex-col gap-3">
              {aboutValues.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-base text-navy sm:text-lg">
                  <span className="flex h-5 w-5 items-center justify-center text-gold">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Flush to right edge — Australia image with Why Choose Us overlay */}
        <div className={`${aboutAustraliaImageBoxClass} bg-[#002147]`}>
          <Image
            src={images.aboutAustralia}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover object-center"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[#002147]/35"
            aria-hidden="true"
          />

          <div className="relative z-10 flex h-full min-h-[260px] flex-col justify-center px-5 py-10 text-white sm:min-h-[340px] sm:px-8 sm:py-12 lg:min-h-[440px] lg:px-12 lg:py-14">
            <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-[2rem]">
              {aboutWhyChooseUs.title}
            </h2>
            <ul className="mt-5 flex max-w-lg flex-col gap-3.5 sm:mt-6 sm:gap-4">
              {aboutWhyChooseUs.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base sm:text-lg">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center text-gold">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
