import type { ServiceCard } from "@/features/services/data";

type IconProps = {
  className?: string;
};

function SkilledPersonIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="24" cy="16" r="6" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 38c2-8 6.5-12 12-12s10 4 12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="33" cy="14" r="2.5" fill="#c4a574" />
    </svg>
  );
}

function EmployerBriefcaseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <rect x="8" y="18" width="32" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M18 18v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3" stroke="currentColor" strokeWidth="2" />
      <path d="M8 26h32" stroke="currentColor" strokeWidth="2" />
      <rect x="21" y="24" width="6" height="5" rx="1" fill="#c4a574" />
    </svg>
  );
}

function FamilyPeopleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="18" cy="16" r="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="30" cy="16" r="5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M8 36c1.5-6 5-9 10-9s8.5 3 10 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 36c1.5-6 5-9 10-9s8.5 3 10 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="24" cy="28" r="2" fill="#c4a574" />
    </svg>
  );
}

const icons = {
  skilled: SkilledPersonIcon,
  employer: EmployerBriefcaseIcon,
  family: FamilyPeopleIcon,
} as const;

export function ServiceDetailIcon({
  name,
  className,
}: {
  name: ServiceCard["icon"];
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon className={className} />;
}
