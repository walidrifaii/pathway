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

function StudentCapIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M8 20l16-8 16 8-16 8-16-8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M14 23v8c0 2 4.5 5 10 5s10-3 10-5v-8" stroke="currentColor" strokeWidth="2" />
      <path d="M40 20v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="40" cy="34" r="2" fill="#c4a574" />
    </svg>
  );
}

function VisitorPlaneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M42 22L28 24l-8-12h-3l5 12H12l-4-3H6l2 6-2 6h2l4-3h10l-5 12h3l8-12 14 2v-4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="14" cy="14" r="2" fill="#c4a574" />
    </svg>
  );
}

function AppealsGavelIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M18 28l10-10 4 4-10 10-4-4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M26 16l4-4 6 6-4 4" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M16 30l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 38h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="18" y="36" width="10" height="4" rx="1" fill="#c4a574" />
    </svg>
  );
}

const icons = {
  skilled: SkilledPersonIcon,
  employer: EmployerBriefcaseIcon,
  family: FamilyPeopleIcon,
  student: StudentCapIcon,
  visitor: VisitorPlaneIcon,
  appeals: AppealsGavelIcon,
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
