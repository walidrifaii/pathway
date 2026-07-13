import { routes } from "@/constants/routes";
import { getAllServices, serviceHref } from "@/features/services/data";

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

const serviceNavChildren = getAllServices().map((service) => ({
  label: service.navLabel,
  href: serviceHref(service.slug),
}));

export const navigation: NavItem[] = [
  { label: "Home", href: routes.home },
  {
    label: "Services",
    href: routes.services,
    children: serviceNavChildren,
  },
  { label: "About Us", href: routes.about },
  { label: "Contact Us", href: routes.contact },
  { label: "Requirements", href: routes.requirements },
  { label: "Blog", href: routes.blog },
];
