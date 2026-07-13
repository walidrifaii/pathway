import type { ServiceIconName } from "@/features/services/data";

type IconProps = {
  className?: string;
};

function SkilledIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <rect x="12" y="8" width="20" height="28" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M16 16h12M16 21h12M16 26h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="30" cy="32" r="7" fill="white" stroke="currentColor" strokeWidth="2" />
      <circle cx="30" cy="32" r="2.5" fill="#c4a574" />
    </svg>
  );
}

function FamilyIcon({ className }: IconProps) {
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

function EmployerIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <rect x="8" y="18" width="32" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M18 18v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3" stroke="currentColor" strokeWidth="2" />
      <path d="M8 26h32" stroke="currentColor" strokeWidth="2" />
      <rect x="21" y="24" width="6" height="5" rx="1" fill="#c4a574" />
    </svg>
  );
}

function StudentIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M8 20l16-8 16 8-16 8-16-8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M14 23v8c0 2 4.5 5 10 5s10-3 10-5v-8" stroke="currentColor" strokeWidth="2" />
      <path d="M40 20v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="40" cy="34" r="2" fill="#c4a574" />
    </svg>
  );
}

function VisitorIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="24" cy="14" r="5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 38c1.8-8 6.2-12 12-12s10.2 4 12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M31 11l3-3M34 15h4" stroke="#c4a574" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function AppealsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M14 34c2-8 5.5-18 10-22 3 2.5 6 8 8 14 3 1 6 3 8 6-4 3-9 5-14 5-5 0-9-1-12-3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M24 18v8l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="30" cy="14" r="3" fill="#c4a574" />
    </svg>
  );
}

const icons = {
  skilled: SkilledIcon,
  family: FamilyIcon,
  employer: EmployerIcon,
  student: StudentIcon,
  visitor: VisitorIcon,
  appeals: AppealsIcon,
} as const;

export function ServiceIcon({
  name,
  className,
}: {
  name: ServiceIconName;
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon className={className} />;
}
