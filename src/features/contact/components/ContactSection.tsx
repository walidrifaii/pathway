import { ContactForm } from "@/features/contact/components/ContactForm";
import {
  AddressIcon,
  EmailIcon,
  HoursIcon,
  PhoneIcon,
} from "@/features/contact/components/ContactIcons";
import { contactDetails, contactPageContent } from "@/features/contact/data";

const icons = {
  phone: PhoneIcon,
  email: EmailIcon,
  address: AddressIcon,
  hours: HoursIcon,
} as const;

export function ContactSection() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
        <div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-[2.75rem]">
            {contactPageContent.title}
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            {contactPageContent.description}
          </p>

          <ul className="mt-10 flex flex-col gap-7">
            {contactDetails.map((detail) => {
              const Icon = icons[detail.icon];
              const value = detail.href ? (
                <a
                  href={detail.href}
                  className="text-base text-navy transition-colors hover:text-gold sm:text-lg"
                >
                  {detail.value}
                </a>
              ) : (
                <span className="text-base text-navy sm:text-lg">{detail.value}</span>
              );

              return (
                <li key={detail.id} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center text-gold">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold tracking-wide text-navy/55 uppercase">
                      {detail.label}
                    </p>
                    <div className="mt-1 max-w-sm leading-relaxed">{value}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
