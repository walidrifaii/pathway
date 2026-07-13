"use client";

import { useState } from "react";
import { ServiceDetailIcon } from "@/features/services/components/ServiceIcons";
import type { RequirementItem } from "@/features/requirements/data";

type RequirementsAccordionProps = {
  items: RequirementItem[];
};

export function RequirementsAccordion({ items }: RequirementsAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e6e8ec] bg-white shadow-[0_12px_40px_rgba(15,39,68,0.06)]">
      <ul>
        {items.map((item, index) => {
          const isOpen = openId === item.id;
          const panelId = `requirement-panel-${item.id}`;
          const buttonId = `requirement-button-${item.id}`;

          return (
            <li key={item.id} className={index > 0 ? "border-t border-[#e6e8ec]" : undefined}>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex w-full items-center gap-4 px-5 py-5 text-left transition-colors hover:bg-[#f7f8fa] sm:gap-5 sm:px-8 sm:py-6"
              >
                <ServiceDetailIcon
                  name={item.icon}
                  className="h-10 w-10 shrink-0 text-navy sm:h-11 sm:w-11"
                />
                <span className="flex-1 font-display text-base font-semibold text-navy sm:text-lg">
                  {item.title}
                </span>
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center text-2xl leading-none text-navy/55"
                  aria-hidden="true"
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
                className={isOpen ? "block" : "hidden"}
              >
                <ul className="space-y-3 px-5 pb-6 sm:px-8 sm:pb-7 sm:pl-[4.75rem]">
                  {item.requirements.map((requirement) => (
                    <li
                      key={requirement}
                      className="flex items-start gap-3 text-base leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
