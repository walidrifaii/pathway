import Link from "next/link";
import { heroServices } from "@/features/home/data";
import { ServiceIcon } from "@/features/home/components/ServiceIcons";

export function HeroServices() {
  return (
    <section className="bg-[#eef1f4] px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1400px]">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6 lg:gap-5">
          {heroServices.map((service, index) => (
            <li
              key={service.id}
              className="animate-fade-up"
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
            >
              <Link
                href={service.href}
                className="group flex h-full min-h-[11rem] flex-col items-center justify-center rounded-2xl bg-white px-4 py-7 text-center shadow-[0_8px_30px_rgba(15,39,68,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(15,39,68,0.16)] sm:min-h-[12.5rem] sm:px-5 sm:py-8 lg:min-h-[13.5rem]"
              >
                <ServiceIcon
                  name={service.icon}
                  className="mb-4 h-14 w-14 text-navy transition-transform duration-300 group-hover:scale-105 sm:mb-5 sm:h-16 sm:w-16"
                />
                <span className="text-[1rem] leading-snug font-bold text-navy sm:text-[1.1rem]">
                  {service.title}
                </span>
                <span className="mt-1 text-[0.95rem] font-medium text-navy/80 sm:text-[1.05rem]">
                  {service.subtitle}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
