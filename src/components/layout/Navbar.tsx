"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/layout/Logo";
import { navigation, type NavItem } from "@/data/navigation";
import { routes } from "@/constants/routes";
import { cn } from "@/lib/utils";

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

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function DesktopNavLink({ item, pathname }: { item: NavItem; pathname: string }) {
  const active = isActive(pathname, item.href);

  if (item.children?.length) {
    return (
      <div className="group relative">
        <Link
          href={item.href}
          className={cn(
            "inline-flex items-center gap-0.5 py-1 text-[0.95rem] font-bold transition-colors",
            active ? "text-gold" : "text-navy hover:text-gold",
          )}
        >
          {item.label}
          <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
        </Link>
        <div className="invisible absolute left-1/2 top-full z-50 w-52 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
          <ul className="overflow-hidden rounded-lg border border-navy/10 bg-white py-2 shadow-[0_12px_40px_rgba(15,39,68,0.12)]">
            {item.children.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  className="block px-4 py-2.5 text-sm font-medium text-navy/80 transition-colors hover:bg-navy/[0.04] hover:text-navy"
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {active ? <span className="absolute inset-x-0 -bottom-1 h-[2px] bg-gold" /> : null}
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className={cn(
        "relative py-1 text-[0.95rem] font-bold transition-colors",
        active ? "text-gold" : "text-navy hover:text-gold",
      )}
    >
      {item.label}
      <span
        className={cn(
          "absolute inset-x-0 -bottom-1 h-[2px] origin-left bg-gold transition-transform duration-300",
          active ? "scale-x-100" : "scale-x-0",
        )}
      />
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav className="mx-auto flex h-[var(--header-height)] max-w-[1400px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-10">
        <Logo className="shrink-0" />

        {/* Links + CTA grouped on the right */}
        <div className="flex items-center gap-6 xl:gap-8">
          <ul className="hidden items-center gap-6 xl:gap-7 lg:flex">
            {navigation.map((item) => (
              <li key={item.href}>
                <DesktopNavLink item={item} pathname={pathname} />
              </li>
            ))}
          </ul>

          <Link
            href={routes.consultation}
            className="hidden rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-gold-hover sm:inline-flex"
          >
            Book a Consultation
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-navy transition-colors hover:bg-navy/[0.04] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-4 w-5">
              <span
                className={cn(
                  "absolute left-0 block h-0.5 w-full bg-current transition-all duration-300",
                  open ? "top-1.5 rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1.5 block h-0.5 w-full bg-current transition-all duration-300",
                  open ? "opacity-0" : "opacity-100",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 block h-0.5 w-full bg-current transition-all duration-300",
                  open ? "top-1.5 -rotate-45" : "top-3",
                )}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden border-t border-navy/5 bg-white transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[calc(100dvh-var(--header-height))] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="flex max-h-[calc(100dvh-var(--header-height))] flex-col gap-1 overflow-y-auto px-4 py-4 sm:px-6">
          {navigation.map((item) => {
            const active = isActive(pathname, item.href);

            if (item.children?.length) {
              return (
                <li key={item.href}>
                  <button
                    type="button"
                    className={cn(
                      "flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-base font-bold",
                      active ? "text-gold" : "text-navy",
                    )}
                    onClick={() => setServicesOpen((value) => !value)}
                    aria-expanded={servicesOpen}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 transition-transform duration-200",
                        servicesOpen && "rotate-180",
                      )}
                    />
                  </button>
                  <ul
                    className={cn(
                      "overflow-hidden pl-3 transition-[max-height,opacity] duration-300",
                      servicesOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0",
                    )}
                  >
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-md px-3 py-2.5 text-sm font-medium text-muted"
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "block rounded-md px-3 py-3 text-base font-bold",
                    active ? "text-gold" : "text-navy",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                  {active ? <span className="mt-1 block h-0.5 w-8 bg-gold" /> : null}
                </Link>
              </li>
            );
          })}
          <li className="pt-2 sm:hidden">
            <Link
              href={routes.consultation}
              className="flex w-full items-center justify-center rounded-lg bg-gold px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-gold-hover"
              onClick={() => setOpen(false)}
            >
              Book a Consultation
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
