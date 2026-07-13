"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const localeLabels: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
};

const localeShort: Record<Locale, string> = {
  en: "EN",
  ar: "AR",
};

type LanguageSwitcherProps = {
  className?: string;
  variant?: "default" | "mobile";
};

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function LanguageSwitcher({ className, variant = "default" }: LanguageSwitcherProps) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  function switchLocale(nextLocale: Locale) {
    setOpen(false);
    if (nextLocale === locale) return;
    router.replace(pathname, { locale: nextLocale });
  }

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname, locale]);

  return (
    <div ref={rootRef} className={cn("relative", variant === "mobile" && "w-full", className)}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className={cn(
          "inline-flex items-center justify-between gap-2 rounded-lg border border-navy/15 bg-white px-3 py-2 text-sm font-bold text-navy shadow-sm transition-colors hover:border-gold/50 hover:text-gold",
          variant === "mobile" ? "w-full py-3" : "min-w-[5.5rem]",
        )}
      >
        <span className="tracking-[0.08em] uppercase">{localeShort[locale]}</span>
        <ChevronDown
          className={cn("h-4 w-4 text-navy/50 transition-transform duration-200", open && "rotate-180")}
        />
      </button>

      <div
        className={cn(
          "absolute end-0 z-50 mt-2 min-w-full overflow-hidden rounded-lg border border-navy/10 bg-white py-1 shadow-[0_12px_40px_rgba(15,39,68,0.12)] transition-all duration-200",
          variant === "mobile" && "start-0 end-0",
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0 pointer-events-none",
        )}
      >
        <ul role="listbox" aria-label="Language">
          {routing.locales.map((item) => {
            const selected = locale === item;

            return (
              <li key={item} role="option" aria-selected={selected}>
                <button
                  type="button"
                  onClick={() => switchLocale(item)}
                  className={cn(
                    "flex w-full items-center justify-between gap-4 px-4 py-2.5 text-start text-sm font-semibold transition-colors",
                    selected
                      ? "bg-navy/[0.04] text-gold"
                      : "text-navy/80 hover:bg-navy/[0.04] hover:text-navy",
                  )}
                >
                  <span>{localeLabels[item]}</span>
                  <span className="text-xs font-bold tracking-[0.1em] uppercase text-navy/40">
                    {localeShort[item]}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
