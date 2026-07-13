import requirementsJson from "@/data/requirements.json";
import type { Locale } from "@/i18n/routing";
import { tLocal, tLocalList, type LocalizedString, type LocalizedStringArray } from "@/lib/localize";

export type RequirementIcon = "skilled" | "employer" | "family" | "student" | "visitor";

type RawRequirementItem = {
  id: string;
  icon: RequirementIcon;
  title: LocalizedString;
  requirements: LocalizedStringArray;
};

export type RequirementItem = {
  id: string;
  title: string;
  icon: RequirementIcon;
  requirements: string[];
};

const items = requirementsJson.items as RawRequirementItem[];

export function getRequirementItems(locale: Locale): RequirementItem[] {
  return items.map((item) => ({
    id: item.id,
    icon: item.icon,
    title: tLocal(item.title, locale),
    requirements: tLocalList(item.requirements, locale),
  }));
}
