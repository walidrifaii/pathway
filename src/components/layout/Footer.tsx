import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { config } from "@/constants/config";
import { contactInfo } from "@/constants/contact";
import { routes } from "@/constants/routes";
import { heroServices } from "@/features/home/data";
import { navigation } from "@/data/navigation";

const companyLinks = navigation.filter((item) => item.label !== "Services");

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-[#002147] text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-white/70">
              {config.description}
            </p>
            <Link
              href={routes.consultation}
              className="mt-7 inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gold-hover"
            >
              Book a Consultation
            </Link>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold tracking-[0.14em] text-gold uppercase">
              Company
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.95rem] text-white/75 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold tracking-[0.14em] text-gold uppercase">
              Services
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {heroServices.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.href}
                    className="text-[0.95rem] text-white/75 transition-colors hover:text-gold"
                  >
                    {service.title} {service.subtitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold tracking-[0.14em] text-gold uppercase">
              Contact
            </h3>
            <ul className="mt-5 flex flex-col gap-4 text-[0.95rem] text-white/75">
              <li>
                <a href={contactInfo.emailHref} className="transition-colors hover:text-gold">
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a href={contactInfo.phoneHref} className="transition-colors hover:text-gold">
                  {contactInfo.phone}
                </a>
              </li>
              <li>{contactInfo.address}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-5 py-5 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>
            © {year} {config.appName}. All rights reserved.
          </p>
          <p className="text-white/45">Travel & Migration experts you can trust.</p>
        </div>
      </div>
    </footer>
  );
}
