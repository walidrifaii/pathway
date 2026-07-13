export const aboutContent = {
  title: "About RAE Pathways",
  paragraphs: [
    "RAE Pathways is a leading migration consultancy based in Australia, committed to helping individuals, families, and businesses achieve their migration goals.",
    "With years of experience and in-depth knowledge of Australian migration laws, we provide professional and ethical advice tailored to your unique circumstances.",
  ],
};

export const aboutMission = {
  title: "Our Mission",
  description:
    "To provide reliable and personalized migration solutions that help our clients build a better future in Australia.",
};

export const aboutValues = {
  title: "Our Values",
  items: ["Integrity", "Excellence", "Transparency", "Commitment"],
};

export const aboutWhyChooseUs = {
  title: "Why Choose Us?",
  items: [
    "Registered Australian Migration Agent (MARN)",
    "Personalized & Honest Advice",
    "High Success Rate",
    "End-to-End Support",
    "Up-to-Date Migration Knowledge",
  ],
};

export type AboutTrustStat = {
  id: string;
  value: string;
  label: string;
  icon: "experience" | "cases" | "satisfaction" | "marn";
};

export const aboutTrustStats: AboutTrustStat[] = [
  {
    id: "experience",
    value: "10+",
    label: "Years Experience",
    icon: "experience",
  },
  {
    id: "cases",
    value: "1,000+",
    label: "Successful Cases",
    icon: "cases",
  },
  {
    id: "satisfaction",
    value: "99%",
    label: "Client Satisfaction",
    icon: "satisfaction",
  },
  {
    id: "marn",
    value: "MARN",
    label: "Registered Agent",
    icon: "marn",
  },
];
