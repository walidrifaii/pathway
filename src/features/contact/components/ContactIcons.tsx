type IconProps = {
  className?: string;
};

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M7.5 3.5h3.2l1.2 4.2-2 1.2a12.5 12.5 0 005.4 5.4l1.2-2 4.2 1.2v3.2c0 .8-.5 1.5-1.3 1.7A15.5 15.5 0 015.8 6.8c.2-.8.9-1.3 1.7-1.3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function EmailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M4.5 7.5L12 13l7.5-5.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AddressIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21s6.5-5.2 6.5-10.2A6.5 6.5 0 0012 4.3a6.5 6.5 0 00-6.5 6.5C5.5 15.8 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10.8" r="2.2" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export function HoursIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M12 8.5V12l2.8 2.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.5c-3.6 0-6.5 2.9-6.5 6.5 0 4.8 6.5 12 6.5 12s6.5-7.2 6.5-12c0-3.6-2.9-6.5-6.5-6.5Zm0 8.8a2.3 2.3 0 110-4.6 2.3 2.3 0 010 4.6Z" />
    </svg>
  );
}
