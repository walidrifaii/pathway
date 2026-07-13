import { trustStats } from "@/features/home/data";

type IconProps = {
  className?: string;
};

function ExperienceIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="24" r="11" stroke="currentColor" strokeWidth="1.5" />
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

function VisasIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" />
      <rect x="17" y="14" width="14" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M20 19h8M20 23h8M20 27h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function SatisfactionIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" />
      <path
        d="M24 14c-1.2 3.5-4 5.5-7 6.5 2.2 1.2 4 3.8 5 7.5 1-3.7 2.8-6.3 5-7.5-3-1-5.8-3-7-6.5 1.2 3.5 4 5.5 7 6.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M24 28v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
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
      <circle cx="24" cy="23" r="6" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M22 23.5l1.8 1.8 3.4-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const icons = {
  experience: ExperienceIcon,
  visas: VisasIcon,
  satisfaction: SatisfactionIcon,
  marn: MarnIcon,
} as const;

export function TrustStats() {
  return (
    <section className="bg-[#002147] px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
      <div className="mx-auto max-w-[1400px]">
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-6">
          {trustStats.map((stat) => {
            const Icon = icons[stat.icon];

            return (
              <li key={stat.id} className="flex items-center gap-4 sm:justify-center lg:justify-start">
                <Icon className="h-12 w-12 shrink-0 text-gold sm:h-14 sm:w-14" />
                <div>
                  <p className="font-display text-2xl font-bold tracking-tight text-white sm:text-[1.75rem]">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-sm text-white/85 sm:text-[0.95rem]">{stat.label}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
