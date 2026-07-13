import { consultationPageContent } from "@/features/consultation/data";
import { ConsultationForm } from "@/features/consultation/components/ConsultationForm";
import { contactInfo } from "@/constants/contact";

type ConsultationSectionProps = {
  services: { slug: string; title: string }[];
};

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function ConsultationSection({ services }: ConsultationSectionProps) {
  return (
    <section className="bg-[#f7f8fa] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-2 lg:gap-14 lg:items-start">
        <div>
          <p className="text-sm font-semibold tracking-[0.14em] text-gold uppercase">
            Start your pathway
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Speak with our migration team
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            {consultationPageContent.description}
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            {consultationPageContent.highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base text-navy sm:text-lg">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center text-gold">
                  <CheckIcon className="h-4 w-4" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-xl border border-[#e6e8ec] bg-white p-5 sm:p-6">
            <p className="text-sm font-semibold tracking-wide text-navy/55 uppercase">Prefer to call?</p>
            <a
              href={contactInfo.phoneHref}
              className="mt-2 block font-display text-xl font-bold text-navy transition-colors hover:text-gold"
            >
              {contactInfo.phone}
            </a>
            <a
              href={contactInfo.emailHref}
              className="mt-1 block text-base text-muted transition-colors hover:text-gold"
            >
              {contactInfo.email}
            </a>
            <p className="mt-3 text-sm text-muted">{contactInfo.officeHours}</p>
          </div>
        </div>

        <ConsultationForm services={services} />
      </div>
    </section>
  );
}
