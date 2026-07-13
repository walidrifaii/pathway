import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { images } from "@/constants/images";
import { routes } from "@/constants/routes";

type PageHeroProps = {
  title: string;
  description?: string;
  /** Current page label in the breadcrumb (e.g. "About Us") */
  breadcrumbLabel: string;
  image?: StaticImageData;
  imageAlt?: string;
};

export function PageHero({
  title,
  description,
  breadcrumbLabel,
  image = images.hero,
  imageAlt = "Sydney Opera House and Harbour Bridge",
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b-4 border-gold bg-[#002147]">
      <div className="relative min-h-[220px] sm:min-h-[280px] lg:min-h-[320px]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_40%]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 33, 71, 0.92) 0%, rgba(0, 33, 71, 0.78) 45%, rgba(0, 33, 71, 0.55) 100%)",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto flex min-h-[220px] max-w-[1400px] items-center px-5 py-12 sm:min-h-[280px] sm:px-8 sm:py-16 lg:min-h-[320px] lg:px-12">
          <div className="max-w-3xl text-white">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-white/75 sm:text-[0.95rem]">
                <li>
                  <Link href={routes.home} className="transition-colors hover:text-gold">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-white/45">
                  /
                </li>
                <li className="font-medium text-gold" aria-current="page">
                  {breadcrumbLabel}
                </li>
              </ol>
            </nav>

            <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {title}
            </h1>
            {description ? (
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
                {description}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
