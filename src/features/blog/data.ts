import type { StaticImageData } from "next/image";
import { images } from "@/constants/images";
import { routes } from "@/constants/routes";

export const blogPageContent = {
  title: "Latest News & Insights",
  breadcrumbLabel: "Blog",
  description:
    "Stay updated with the latest migration news, visa updates, and helpful tips for your Australian journey.",
} as const;

export type BlogPost = {
  id: string;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  dateLabel: string;
  image: StaticImageData;
  imageAlt: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "skilled-visa-2024",
    slug: "big-changes-to-australian-skilled-visa-in-2024",
    category: "Visa Updates",
    title: "Big Changes to Australian Skilled Visa in 2024",
    excerpt:
      "Stay informed about the latest updates to skill assessment and visa criteria.",
    date: "2024-05-10",
    dateLabel: "May 10, 2024",
    image: images.blogPassport,
    imageAlt: "Australian flag and passport",
  },
  {
    id: "visa-approval-tips",
    slug: "5-tips-to-improve-your-chances-of-visa-approval",
    category: "Migration Tips",
    title: "5 Tips to Improve Your Chances of Visa Approval",
    excerpt:
      "Simple but effective tips to help you prepare a strong visa application.",
    date: "2024-04-28",
    dateLabel: "April 28, 2024",
    image: images.whyAustralia.beach,
    imageAlt: "Australian beach and city skyline",
  },
  {
    id: "family-to-australia",
    slug: "bringing-your-family-to-australia",
    category: "Family Visas",
    title: "Bringing Your Family to Australia",
    excerpt: "Learn about the different family visa options available.",
    date: "2024-04-15",
    dateLabel: "April 15, 2024",
    image: images.blogFamily,
    imageAlt: "Family at home in Australia",
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function blogPostHref(slug: string) {
  return `${routes.blog}/${slug}`;
}
