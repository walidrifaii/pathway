import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ContactSection } from "@/features/contact/components/ContactSection";
import { ContactMap } from "@/features/contact/components/ContactMap";
import { contactPageContent } from "@/features/contact/data";
import { config } from "@/constants/config";

export const metadata: Metadata = {
  title: `Contact Us | ${config.appName}`,
  description: contactPageContent.description,
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Contact Us"
        description={contactPageContent.description}
        breadcrumbLabel="Contact Us"
      />
      <ContactSection />
      <ContactMap />
    </main>
  );
}
