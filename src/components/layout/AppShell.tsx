import type { PropsWithChildren } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/layout/Preloader";

export function AppShell({ children }: PropsWithChildren) {
  return (
    <>
      <Preloader />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
