export const requirementsPageContent = {
  title: "Visa Requirements",
  breadcrumbLabel: "Requirements",
  description:
    "Each visa has specific eligibility criteria and documentation. Below are the general requirements for common visa types.",
  note: {
    title: "Important Note",
    body: "Requirements may vary depending on your individual circumstances and the visa subclass. Please contact us for a detailed assessment of your case.",
  },
} as const;

export type RequirementItem = {
  id: string;
  title: string;
  icon: "skilled" | "employer" | "family" | "student" | "visitor";
  requirements: string[];
};

export const requirementItems: RequirementItem[] = [
  {
    id: "skilled",
    title: "Skilled Migration Visas",
    icon: "skilled",
    requirements: [
      "Occupation listed on a relevant skilled occupation list",
      "Positive skills assessment from the assessing authority",
      "Meet the points test threshold (where applicable)",
      "Competent English language proficiency",
      "Health and character requirements",
    ],
  },
  {
    id: "employer",
    title: "Employer Sponsored Visas",
    icon: "employer",
    requirements: [
      "Approved Australian employer sponsorship",
      "Genuine full-time position offer",
      "Relevant skills and qualifications for the role",
      "Labour market testing completed (where required)",
      "Health and character requirements",
    ],
  },
  {
    id: "family",
    title: "Family & Partner Visas",
    icon: "family",
    requirements: [
      "Eligible Australian sponsor (citizen, PR, or eligible NZ citizen)",
      "Evidence of a genuine and continuing relationship",
      "Meet relationship / family category criteria",
      "Health and character requirements",
      "Supporting identity and relationship documents",
    ],
  },
  {
    id: "student",
    title: "Student Visas",
    icon: "student",
    requirements: [
      "Confirmation of Enrolment (CoE) from a registered provider",
      "Genuine Temporary Entrant (GTE) requirement",
      "Sufficient funds for tuition and living costs",
      "Overseas Student Health Cover (OSHC)",
      "English language and academic entry requirements",
    ],
  },
  {
    id: "visitor",
    title: "Visitor Visas",
    icon: "visitor",
    requirements: [
      "Genuine temporary stay intention",
      "Sufficient funds for the visit",
      "Ties to home country (employment, family, or assets)",
      "Valid travel document / passport",
      "Health and character requirements (where applicable)",
    ],
  },
];
