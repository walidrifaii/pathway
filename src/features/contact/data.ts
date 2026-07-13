import { contactInfo } from "@/constants/contact";
import { config } from "@/constants/config";

export const contactPageContent = {
  title: "Get in Touch",
  description:
    "We're here to help you with your migration journey. Contact us today for expert advice.",
  formTitle: "Send Us a Message",
  submitLabel: "Send Message",
  mapLabel: config.appName,
  mapAddress: contactInfo.address,
} as const;

export type ContactDetail = {
  id: string;
  label: string;
  value: string;
  href?: string;
  icon: "phone" | "email" | "address" | "hours";
};

export const contactDetails: ContactDetail[] = [
  {
    id: "phone",
    label: "Phone",
    value: contactInfo.phone,
    href: contactInfo.phoneHref,
    icon: "phone",
  },
  {
    id: "email",
    label: "Email",
    value: contactInfo.email,
    href: contactInfo.emailHref,
    icon: "email",
  },
  {
    id: "address",
    label: "Address",
    value: contactInfo.address,
    icon: "address",
  },
  {
    id: "hours",
    label: "Office Hours",
    value: contactInfo.officeHours,
    icon: "hours",
  },
];
