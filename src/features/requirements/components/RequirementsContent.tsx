import { RequirementsAccordion } from "@/features/requirements/components/RequirementsAccordion";
import { requirementsPageContent } from "@/features/requirements/data";

function InfoIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" />
      <path d="M24 22v10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="24" cy="16.5" r="1.8" fill="currentColor" />
    </svg>
  );
}

export function RequirementsContent() {
  return (
    <section className="bg-[#f7f8fa] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[960px]">
        <RequirementsAccordion />

        <div className="mt-10 flex items-start gap-4 sm:mt-12 sm:gap-5">
          <InfoIcon className="mt-0.5 h-11 w-11 shrink-0 text-gold sm:h-12 sm:w-12" />
          <div>
            <h2 className="font-display text-xl font-bold text-navy sm:text-2xl">
              {requirementsPageContent.note.title}
            </h2>
            <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {requirementsPageContent.note.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
