import Image from "next/image";
import { images } from "@/constants/images";
import { whyAustraliaContent } from "@/features/home/data";

function CheckIcon() {
  return (
    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-white sm:h-7 sm:w-7">
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
}

const gallery = [
  {
    src: images.whyAustralia.beach,
    alt: "Australian coastal city and beach",
    className: "object-cover object-center",
  },
  {
    src: images.whyAustralia.flag,
    alt: "People overlooking Sydney Harbour Bridge with Australian flag",
    className: "object-cover object-[center_40%]",
  },
  {
    src: images.whyAustralia.kangaroo,
    alt: "Kangaroo with Australian city skyline",
    className: "object-cover object-[70%_center]",
  },
] as const;

export function WhyAustralia() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        {/* Left copy */}
        <div className="max-w-xl lg:pl-4 xl:pl-8">
          <p className="text-sm font-semibold tracking-[0.14em] text-gold uppercase sm:text-[0.95rem]">
            — {whyAustraliaContent.eyebrow}
          </p>

          <h2 className="mt-4 font-display text-[2.25rem] leading-tight font-bold text-navy sm:text-4xl lg:text-[2.75rem]">
            {whyAustraliaContent.title}
          </h2>

          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            {whyAustraliaContent.description}
          </p>

          <ul className="mt-8 flex flex-col gap-4 sm:mt-10 sm:gap-5">
            {whyAustraliaContent.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3.5">
                <CheckIcon />
                <span className="pt-0.5 text-base font-medium text-navy sm:text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right image trio */}
        <div className="grid h-[286px] grid-cols-3 gap-2.5 sm:h-[468px] sm:gap-4 md:h-[546px] lg:h-[624px] xl:h-[676px]">
          {gallery.map((item) => (
            <div key={item.alt} className="relative overflow-hidden rounded-2xl">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 1024px) 33vw, 18vw"
                className={item.className}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
