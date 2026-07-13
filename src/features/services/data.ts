import { routes } from "@/constants/routes";

export type ServiceCard = {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: "skilled" | "employer" | "family";
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
];

export const servicesPageContent = {
  eyebrow: "What We Offer",
  title: "Our Services",
  description:
    "Expert guidance across migration pathways — choose the service that fits your goals.",
};
