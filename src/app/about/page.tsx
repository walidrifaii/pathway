import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { AboutIntro } from "@/features/about/components/AboutIntro";
import { AboutMissionValues } from "@/features/about/components/AboutMissionValues";
import { AboutTrustStats } from "@/features/about/components/AboutTrustStats";
import { aboutContent } from "@/features/about/data";
import { config } from "@/constants/config";

export const metadata: Metadata = {
  title: `${aboutContent.title} | ${config.appName}`,
  description: aboutContent.paragraphs[0],
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title={aboutContent.title}
        description={aboutContent.paragraphs[0]}
        breadcrumbLabel="About Us"
      />
      <AboutIntro />
      <AboutMissionValues />
      <AboutTrustStats />
    </main>
  );
}
