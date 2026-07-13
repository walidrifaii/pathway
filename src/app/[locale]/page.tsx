import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/features/home/components/Hero";
import { HeroServices } from "@/features/home/components/HeroServices";
import { TrustStats } from "@/features/home/components/TrustStats";
import { WhyAustralia } from "@/features/home/components/WhyAustralia";
import { OurServices } from "@/features/services/components/OurServices";

type Props = { params: Promise<{ locale: string }> };

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Hero />
      <HeroServices />
      <OurServices />
      <TrustStats />
      <WhyAustralia />
    </main>
  );
}
