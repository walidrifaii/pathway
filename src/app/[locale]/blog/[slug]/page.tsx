import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/layout/PageHero";
import { getBlogPost, getBlogSlugs } from "@/features/blog/data";
import { config } from "@/constants/config";
import { routes } from "@/constants/routes";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";

type BlogPostPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getBlogSlugs().map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  const post = getBlogPost(slug, locale as Locale);

  if (!post) {
    return { title: `${t("breadcrumb")} | ${config.appName}` };
  }

  return {
    title: `${post.title} | ${config.appName}`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("blog");
  const post = getBlogPost(slug, locale as Locale);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <PageHero title={post.title} breadcrumbLabel={t("breadcrumb")} />

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
            <p>{t("advice")}</p>
          </div>

          <Link
            href={routes.blog}
            className="mt-10 inline-flex text-sm font-semibold text-navy transition-colors hover:text-gold"
          >
            ← {t("back")}
          </Link>
        </div>
      </article>
    </main>
  );
}
