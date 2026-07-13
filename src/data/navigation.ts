import { routes } from "@/constants/routes";

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const navigation: NavItem[] = [
  { label: "Home", href: routes.home },
  {
    label: "Services",
    href: routes.services,
    children: [
      { label: "Skilled Migration", href: `${routes.services}#skilled` },
      { label: "Employer Sponsored", href: `${routes.services}#employer` },
      { label: "Family Visas", href: `${routes.services}#family` },
      { label: "Student Visas", href: `${routes.services}#student` },
      { label: "Visitor Visas", href: `${routes.services}#visitor` },
      { label: "AAT Appeals", href: `${routes.services}#appeals` },
    ],
  },
  { label: "About Us", href: routes.about },
  { label: "Contact Us", href: routes.contact },
  { label: "Requirements", href: routes.requirements },
  { label: "Blog", href: routes.blog },
];
