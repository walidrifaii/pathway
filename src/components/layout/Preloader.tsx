"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";

/** Must match `.animate-preloader-plane-line` duration */
const FLIGHT_MS = 4000;
const EXIT_MS = 700;

function PlaneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5Z" />
    </svg>
  );
}

export function Preloader() {
  const locale = useLocale();
  const isRtl = locale === "ar";
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const openedRef = useRef(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const flightTimer = window.setTimeout(() => {
      if (openedRef.current) return;
      openedRef.current = true;
      setLeaving(true);

      window.setTimeout(() => {
        setVisible(false);
        document.body.style.overflow = "";
      }, EXIT_MS);
    }, FLIGHT_MS);

    return () => {
      window.clearTimeout(flightTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#002147]",
        leaving && "animate-preloader-exit",
      )}
      aria-hidden="true"
      role="presentation"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,165,116,0.2)_0%,transparent_55%)]" />

      <div
        className={cn(
          "relative mb-10 h-28 w-full max-w-5xl px-6 sm:mb-12 sm:h-32",
          isRtl && "scale-x-[-1]",
        )}
      >
        <div className="absolute top-1/2 right-6 left-6 h-px -translate-y-1/2 overflow-hidden">
          <div className="animate-preloader-line h-full w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent_0,transparent_10px,rgba(196,165,116,0.35)_10px,rgba(196,165,116,0.35)_18px)] animate-preloader-dash" />
        </div>

        <div className="absolute top-1/2 right-[10%] left-[10%] h-16 -translate-y-1/2 rounded-full bg-gold/10 blur-2xl" />

        <div className="animate-preloader-plane-line absolute top-1/2 left-0 -translate-y-1/2 text-gold">
          <PlaneIcon className="h-16 w-16 rotate-90 drop-shadow-[0_12px_28px_rgba(196,165,116,0.55)] sm:h-20 sm:w-20 md:h-24 md:w-24" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <p className="animate-preloader-brand font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          RAE
        </p>
        <p className="animate-preloader-brand animate-delay-1 mt-1 font-serif text-base font-semibold tracking-[0.22em] text-white/90 uppercase sm:text-lg">
          Pathways
        </p>
        <p className="animate-preloader-brand animate-delay-2 mt-3 text-xs font-semibold tracking-[0.18em] text-gold uppercase sm:text-sm">
          Travel <span className="text-white/50">&</span> Migration
        </p>

        <div className="mt-8 flex items-center gap-2.5">
          <span className="h-2 w-2 animate-preloader-dot rounded-full bg-gold" />
          <span className="h-2 w-2 animate-preloader-dot rounded-full bg-gold [animation-delay:0.2s]" />
          <span className="h-2 w-2 animate-preloader-dot rounded-full bg-gold [animation-delay:0.4s]" />
        </div>
      </div>
    </div>
  );
}
