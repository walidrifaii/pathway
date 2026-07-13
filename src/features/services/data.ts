import { routes } from "@/constants/routes";

export type ServiceCard = {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: "skilled" | "employer" | "family" | "student" | "visitor" | "appeals";
};

export const serviceCards: ServiceCard[] = [
  {
    id: "skilled",
    title: "Skilled Migration Visas",
    description:
      "We help skilled professionals obtain permanent residency through various skilled visa programs.",
    href: `${routes.services}#skilled`,
    icon: "skilled",
  },
  {
    id: "employer",
    title: "Employer Sponsored Visas",
    description:
      "We assist employers and employees with temporary and permanent work visa solutions.",
    href: `${routes.services}#employer`,
    icon: "employer",
  },
  {
    id: "family",
    title: "Family & Partner Visas",
    description:
      "Reunite with your loved ones in Australia through partner, parent, and family visas.",
    href: `${routes.services}#family`,
    icon: "family",
  },
  {
    id: "student",
    title: "Student Visas",
    description:
      "We guide students to study in Australia with the right visa and ongoing support.",
    href: `${routes.services}#student`,
    icon: "student",
  },
  {
    id: "visitor",
    title: "Visitor Visas",
    description: "Visit Australia for tourism, business, or to meet family and friends.",
    href: `${routes.services}#visitor`,
    icon: "visitor",
  },
  {
    id: "appeals",
    title: "AAT Appeals & Reviews",
    description:
      "We provide expert assistance with visa refusals, appeals, and AAT matters.",
    href: `${routes.services}#appeals`,
    icon: "appeals",
  },
];

/** Home page shows the first three services */
export const homeServiceCards = serviceCards.slice(0, 3);

export const servicesPageContent = {
  title: "Our Migration & Visa Services",
  description:
    "We offer a wide range of visa and migration services tailored to your individual needs.",
};

export const homeServicesContent = {
  eyebrow: "What We Offer",
  title: "Our Services",
  description:
    "Expert guidance across migration pathways — choose the service that fits your goals.",
};
