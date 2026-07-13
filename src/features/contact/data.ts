import { contactInfo } from "@/constants/contact";
import { config } from "@/constants/config";
import contentJson from "@/data/content.json";
import type { Locale } from "@/i18n/routing";
import { tLocal } from "@/lib/localize";

export function getContactAddress(locale: Locale) {
  return tLocal(contentJson.address, locale);
}

export function getContactOfficeHours(locale: Locale) {
  return tLocal(contentJson.officeHours, locale);
}

export type ContactDetailIcon = "phone" | "email" | "address" | "hours";

export type ContactDetail = {
  id: string;
  labelKey: "phone" | "email" | "address" | "hours";
  value: string;
  href?: string;
  icon: ContactDetailIcon;
};

export function getContactDetails(locale: Locale): ContactDetail[] {
  return [
    {
      id: "phone",
      labelKey: "phone",
      value: contactInfo.phone,
      href: contactInfo.phoneHref,
      icon: "phone",
    },
    {
      id: "email",
      labelKey: "email",
      value: contactInfo.email,
      href: contactInfo.emailHref,
      icon: "email",
    },
    {
      id: "address",
      labelKey: "address",
      value: getContactAddress(locale),
      icon: "address",
    },
    {
      id: "hours",
      labelKey: "hours",
      value: getContactOfficeHours(locale),
      icon: "hours",
    },
  ];
}

export const contactMapLabel = config.appName;
