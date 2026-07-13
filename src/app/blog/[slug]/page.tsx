import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { blogPageContent, blogPosts, getBlogPost } from "@/features/blog/data";
import { config } from "@/constants/config";
import { routes } from "@/constants/routes";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: `Blog | ${config.appName}` };
  }

  return {
    title: `${post.title} | ${config.appName}`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <PageHero title={post.title} breadcrumbLabel={blogPageContent.breadcrumbLabel} />

      <article className="bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[800px]">
          <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">
            {post.category}
          </p>
          <time dateTime={post.date} className="mt-2 block text-sm text-muted">
            {post.dateLabel}
          </time>

          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-xl">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              sizes="(max-width: 800px) 100vw, 800px"
              className="object-cover"
            />
          </div>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            <p>{post.excerpt}</p>
            <p>
              For personalised advice on your situation, get in touch with our registered migration
              team. We&apos;ll help you understand the latest requirements and the pathway that fits
              your goals.
            </p>
          </div>

          <Link
            href={routes.blog}
            className="mt-10 inline-flex text-sm font-semibold text-navy transition-colors hover:text-gold"
          >
            ← Back to Blog
          </Link>
        </div>
      </article>
    </main>
  );
}
