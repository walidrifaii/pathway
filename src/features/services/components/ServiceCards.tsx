import Link from "next/link";
import type { ServiceCard } from "@/features/services/data";
import { serviceCards } from "@/features/services/data";
import { ServiceDetailIcon } from "@/features/services/components/ServiceIcons";

type ServiceCardsProps = {
  items?: ServiceCard[];
};

export function ServiceCards({ items = serviceCards }: ServiceCardsProps) {
  return (
    <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {items.map((service) => (
        <li key={service.id} id={service.id}>
          <article className="flex h-full flex-col rounded-2xl border border-navy/5 bg-white p-6 shadow-[0_8px_28px_rgba(15,39,68,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(15,39,68,0.12)] sm:p-7">
            <div className="flex items-start gap-3">
              <ServiceDetailIcon
                name={service.icon}
                className="h-11 w-11 shrink-0 text-navy sm:h-12 sm:w-12"
              />
              <h3 className="pt-1.5 font-display text-lg font-bold leading-snug text-navy sm:text-xl">
                {service.title}
              </h3>
            </div>

            <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-muted sm:text-base">
              {service.description}
            </p>

            <Link
              href={service.href}
              className="mt-6 inline-flex items-center gap-1.5 text-[0.95rem] font-semibold text-gold transition-colors hover:text-gold-hover"
            >
              Learn More
              <span aria-hidden="true">→</span>
            </Link>
          </article>
        </li>
      ))}
    </ul>
  );
}
