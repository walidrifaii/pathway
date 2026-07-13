import { Hero } from "@/features/home/components/Hero";
import { HeroServices } from "@/features/home/components/HeroServices";
import { TrustStats } from "@/features/home/components/TrustStats";
import { WhyAustralia } from "@/features/home/components/WhyAustralia";
import { OurServices } from "@/features/services/components/OurServices";

export default function Home() {
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
