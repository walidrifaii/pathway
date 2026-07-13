import { routes } from "@/constants/routes";

export const homeContent = {
  eyebrow: "Your journey to Australia starts here",
  title: "Migration & Visa Experts You Can Trust",
  description:
    "RAE Pathways is your trusted partner in achieving your Australian dream. We guide you every step of the way.",
  primaryCta: {
    label: "Book a Consultation",
    href: "/contact",
  },
  secondaryCta: {
    label: "Explore Services",
    href: "/services",
  },
};

export type HeroService = {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  icon: "skilled" | "family" | "employer" | "student" | "visitor" | "appeals";
};

export const heroServices: HeroService[] = [
  {
    id: "skilled",
    title: "Skilled Migration",
    subtitle: "Visas",
    href: `${routes.services}#skilled`,
    icon: "skilled",
  },
  {
    id: "family",
    title: "Family & Partner",
    subtitle: "Visas",
    href: `${routes.services}#family`,
    icon: "family",
  },
  {
    id: "employer",
    title: "Employer Sponsored",
    subtitle: "Visas",
    href: `${routes.services}#employer`,
    icon: "employer",
  },
  {
    id: "student",
    title: "Student",
    subtitle: "Visas",
    href: `${routes.services}#student`,
    icon: "student",
  },
  {
    id: "visitor",
    title: "Visitor",
    subtitle: "Visas",
    href: `${routes.services}#visitor`,
    icon: "visitor",
  },
  {
    id: "appeals",
    title: "AAT Appeals &",
    subtitle: "Reviews",
    href: `${routes.services}#appeals`,
    icon: "appeals",
  },
];

export const whyAustraliaContent = {
  eyebrow: "Why Australia?",
  title: "A Better Future Awaits",
  description:
    "Australia offers a high quality of life, world-class education, excellent healthcare, and endless opportunities.",
  features: [
    "Safe & Multicultural Society",
    "World-Class Education",
    "Strong Economy",
    "Pathway to Permanent Residency",
  ],
};

export type TrustStat = {
  id: string;
  value: string;
  label: string;
  icon: "experience" | "visas" | "satisfaction" | "marn";
};

export const trustStats: TrustStat[] = [
  {
    id: "experience",
    value: "10+",
    label: "Years of Experience",
    icon: "experience",
  },
  {
    id: "visas",
    value: "1,000+",
    label: "Successful Visas",
    icon: "visas",
  },
  {
    id: "satisfaction",
    value: "99%",
    label: "Client Satisfaction",
    icon: "satisfaction",
  },
  {
    id: "marn",
    value: "MARN",
    label: "Registered Agent",
    icon: "marn",
  },
];
