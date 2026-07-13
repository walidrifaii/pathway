import Link from "next/link";
import { config } from "@/constants/config";
import { routes } from "@/constants/routes";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "default" | "light";
};

export function Logo({ className, variant = "default" }: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href={routes.home}
      className={cn("group inline-flex items-start gap-2.5", className)}
      aria-label={`${config.appName} home`}
    >
      <span className="relative flex flex-col items-start leading-none">
        <span
          className={cn(
            "relative font-display text-[1.65rem] font-extrabold tracking-tight sm:text-[2rem] md:text-[2.25rem]",
            isLight ? "text-white" : "text-navy",
          )}
        >
          RA
          <span className="relative inline-block">
            E
            <svg
              viewBox="0 0 24 24"
              className={cn(
                "absolute -top-2 left-[55%] h-3.5 w-3.5 -translate-x-1/2 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
                isLight ? "text-white" : "text-navy",
              )}
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5Z" />
            </svg>
          </span>
        </span>
        <svg
          viewBox="0 0 72 8"
          className="mt-0.5 h-2 w-[4.5rem] text-gold sm:w-[5rem]"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M1 5.5C18 1.5 36 1 54 3.5C60 4.3 66 5.2 71 6"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </span>

      <span className="mt-1.5 flex flex-col leading-none">
        <span
          className={cn(
            "font-serif text-[0.95rem] font-semibold tracking-[0.14em] uppercase sm:text-[1.05rem]",
            isLight ? "text-white" : "text-navy",
          )}
        >
          Pathways
        </span>
        <span
          className={cn(
            "mt-1.5 text-[0.58rem] font-semibold tracking-[0.12em] uppercase sm:text-[0.62rem]",
            isLight ? "text-white/85" : "text-navy",
          )}
        >
          Travel <span className="text-gold">&</span> Migration
        </span>
      </span>
    </Link>
  );
}
