import sydneyMsc from "@/assets/images/sydney_msc.png";
import whyBeach from "@/assets/images/images.jpg";
import whyFlag from "@/assets/images/sydney-harbour-540.jpg";
import whyKangaroo from "@/assets/images/kangaroo-city-sunset-stockcake.jpg";
import aboutTeam from "@/assets/images/about-team.jpg";
import aboutAustralia from "@/assets/images/about-australia.png";
import requirementsHero from "@/assets/images/requirements-hero.jpg";

export const images = {
  hero: sydneyMsc,
  requirementsHero,
  aboutTeam,
  aboutAustralia,
  whyAustralia: {
    beach: whyBeach,
    flag: whyFlag,
    kangaroo: whyKangaroo,
  },
} as const;
