import { getLocale, getTranslations } from "next-intl/server";
import { contactInfo } from "@/constants/contact";
import { MapPinIcon } from "@/features/contact/components/ContactIcons";
import { contactMapLabel, getContactAddress } from "@/features/contact/data";
import type { Locale } from "@/i18n/routing";

export async function ContactMap() {
  const t = await getTranslations("contact");
  const locale = (await getLocale()) as Locale;
  const address = getContactAddress(locale);

  return (
    <section className="relative h-[360px] w-full overflow-hidden sm:h-[420px] lg:h-[480px]">
      <iframe
        title={t("mapTitle", { name: contactMapLabel })}
        src={contactInfo.mapEmbedUrl}
        className="absolute inset-0 h-full w-full border-0 grayscale-[15%]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-5">
        <div className="pointer-events-auto relative max-w-md rounded-md bg-white px-5 py-4 shadow-[0_10px_30px_rgba(15,39,68,0.18)]">
          <div className="flex items-start gap-3">
            <MapPinIcon className="mt-0.5 h-6 w-6 shrink-0 text-[#d64545]" />
            <div>
              <p className="font-display text-base font-bold text-navy sm:text-lg">{contactMapLabel}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted sm:text-[0.95rem]">{address}</p>
            </div>
          </div>
          <span
            className="absolute top-full left-1/2 h-0 w-0 -translate-x-1/2 border-x-[10px] border-t-[12px] border-x-transparent border-t-white"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
