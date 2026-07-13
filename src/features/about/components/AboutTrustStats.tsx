"use client";

import { useTranslations } from "next-intl";
import { aboutTrustStats } from "@/features/about/data";

type IconProps = {
  className?: string;
};

function ExperienceIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M24 8l13 5.5v11c0 9-5.6 15.6-13 18-7.4-2.4-13-9-13-18v-11L24 8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M18 24.5l4 4 8-9"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CasesIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="24" cy="18" r="6" stroke="currentColor" strokeWidth="2" />
      <path
        d="M14 36c1.8-6 5.5-9 10-9s8.2 3 10 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M32 14l2 2 4-5"
        stroke="#c4a574"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SatisfactionIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M24 10l3.6 7.8 8.4.8-6.4 5.6 2 8.2L24 28.6 16.4 32.4l2-8.2-6.4-5.6 8.4-.8L24 10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MarnIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M24 8l12 5v10c0 8.5-5.2 14.8-12 17-6.8-2.2-12-8.5-12-17V13l12-5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="22" r="5.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M24 28v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

const icons = {
  experience: ExperienceIcon,
  cases: CasesIcon,
  satisfaction: SatisfactionIcon,
  marn: MarnIcon,
} as const;

export function AboutTrustStats() {
  const t = useTranslations("trust");

  return (
    <section className="border-t border-[#e6e8ec] bg-white px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
      <div className="mx-auto max-w-[1400px]">
        <ul className="grid grid-cols-1 divide-y divide-[#e6e8ec] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-[#e6e8ec]">
          {aboutTrustStats.map((stat) => {
            const Icon = icons[stat.icon];

            return (
              <li
                key={stat.id}
                className="flex items-center gap-4 py-6 first:pt-0 last:pb-0 sm:justify-center sm:px-6 sm:py-4 lg:justify-start lg:px-8 lg:py-0"
              >
                <Icon className="h-11 w-11 shrink-0 text-navy sm:h-12 sm:w-12" />
                <div>
                  <p className="font-display text-2xl font-bold tracking-tight text-navy sm:text-[1.75rem]">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-sm text-navy/80 sm:text-[0.95rem]">{t(stat.labelKey)}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
