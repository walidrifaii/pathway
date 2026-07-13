import type { StaticImageData } from "next/image";
import blogJson from "@/data/blog.json";
import { images } from "@/constants/images";
import { routes } from "@/constants/routes";
import type { Locale } from "@/i18n/routing";
import { tLocal, type LocalizedString } from "@/lib/localize";

type BlogImageKey = "blogPassport" | "whyBeach" | "blogFamily";

type RawBlogPost = {
  id: string;
  slug: string;
  imageKey: BlogImageKey;
  category: LocalizedString;
  title: LocalizedString;
  excerpt: LocalizedString;
  date: string;
  dateLabel: LocalizedString;
  imageAlt: LocalizedString;
};

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

const imageByKey: Record<BlogImageKey, StaticImageData> = {
  blogPassport: images.blogPassport,
  whyBeach: images.whyAustralia.beach,
  blogFamily: images.blogFamily,
};

const posts = blogJson.posts as RawBlogPost[];

export function getBlogPosts(locale: Locale): BlogPost[] {
  return posts.map((post) => ({
    id: post.id,
    slug: post.slug,
    category: tLocal(post.category, locale),
    title: tLocal(post.title, locale),
    excerpt: tLocal(post.excerpt, locale),
    date: post.date,
    dateLabel: tLocal(post.dateLabel, locale),
    image: imageByKey[post.imageKey],
    imageAlt: tLocal(post.imageAlt, locale),
  }));
}

export function getBlogPost(slug: string, locale: Locale): BlogPost | undefined {
  return getBlogPosts(locale).find((post) => post.slug === slug);
}

export function getBlogSlugs() {
  return posts.map((post) => post.slug);
}

export function blogPostHref(slug: string) {
  return `${routes.blog}/${slug}`;
}
