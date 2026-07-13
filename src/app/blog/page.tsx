import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { BlogGrid } from "@/features/blog/components/BlogGrid";
import { blogPageContent } from "@/features/blog/data";
import { config } from "@/constants/config";

export const metadata: Metadata = {
  title: `${blogPageContent.title} | ${config.appName}`,
  description: blogPageContent.description,
};

export default function BlogPage() {
  return (
    <main>
      <PageHero
        title={blogPageContent.title}
        description={blogPageContent.description}
        breadcrumbLabel={blogPageContent.breadcrumbLabel}
      />
      <BlogGrid />
    </main>
  );
}
