import Link from "next/link";
import type { ServiceDetail } from "@/features/services/data";
import { ServiceDetailIcon } from "@/features/services/components/ServiceIcons";
import { routes } from "@/constants/routes";

type ServiceDetailContentProps = {
  service: ServiceDetail;
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

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-base text-navy sm:text-lg">
          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center text-gold">
            <CheckIcon className="h-4 w-4" />
          </span>
          <span className="leading-relaxed text-muted">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  return (
    <section className="bg-[#f7f8fa] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[1fr_340px] lg:gap-14">
        <div className="space-y-10">
          <div className="rounded-2xl border border-[#e6e8ec] bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <ServiceDetailIcon name={service.icon} className="h-12 w-12 text-navy" />
              <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">Overview</h2>
            </div>
            <div className="mt-5 flex flex-col gap-4">
              {service.overview.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-muted sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#e6e8ec] bg-white p-6 sm:p-8">
            <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">
              What&apos;s Included
            </h2>
            <BulletList items={service.includes} />
          </div>

          <div className="rounded-2xl border border-[#e6e8ec] bg-white p-6 sm:p-8">
            <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">Who It&apos;s For</h2>
            <BulletList items={service.whoFor} />
          </div>

          <div className="rounded-2xl border border-[#e6e8ec] bg-white p-6 sm:p-8">
            <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">Our Process</h2>
            <ol className="mt-5 flex flex-col gap-4">
              {service.process.map((step, index) => (
                <li key={step} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-base leading-relaxed text-muted sm:text-lg">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <aside className="h-fit rounded-2xl border border-[#e6e8ec] bg-white p-6 shadow-[0_10px_30px_rgba(15,39,68,0.06)] sm:p-7 lg:sticky lg:top-28">
          <h2 className="font-display text-xl font-bold text-navy">Ready to get started?</h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Book a consultation and we&apos;ll assess your options for {service.title.toLowerCase()}.
          </p>
          <Link
            href={`${routes.consultation}?service=${service.slug}`}
            className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-gold px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-gold-hover"
          >
            Book a Consultation
          </Link>
          <Link
            href={routes.services}
            className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-navy/15 px-6 py-3.5 text-base font-semibold text-navy transition-colors hover:border-gold hover:text-gold"
          >
            All Services
          </Link>
        </aside>
      </div>
    </section>
  );
}
