import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { config } from "@/constants/config";
import { images } from "@/constants/images";
import { routes } from "@/constants/routes";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "default" | "light";
};

export function Logo({ className, variant = "default" }: LogoProps) {
  const isLight = variant === "light";
  const logoSrc = isLight ? images.logoLight : images.logo;

  return (
    <Link
      href={routes.home}
      className={cn("group inline-flex items-center", className)}
      aria-label={`${config.appName} home`}
    >
      <Image
        src={logoSrc}
        alt={config.appName}
        className="h-11 w-auto object-contain sm:h-12 md:h-14"
        sizes="(max-width: 640px) 160px, 200px"
        priority
      />
    </Link>
  );
}
