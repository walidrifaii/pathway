import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { blogPostHref, getBlogPosts } from "@/features/blog/data";
import type { Locale } from "@/i18n/routing";

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export async function BlogGrid() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("common");
  const posts = getBlogPosts(locale);

  return (
    <section className="bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1400px]">
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {posts.map((post) => (
            <li key={post.id}>
              <article className="flex h-full flex-col overflow-hidden rounded-xl border border-[#e8ecf1] bg-white shadow-[0_10px_30px_rgba(15,39,68,0.06)] transition-shadow hover:shadow-[0_14px_36px_rgba(15,39,68,0.1)]">
                <Link href={blogPostHref(post.slug)} className="relative block aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                  />
                </Link>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">
                    {post.category}
                  </p>
                  <h2 className="mt-2 font-display text-xl font-bold tracking-tight text-navy sm:text-[1.35rem]">
                    <Link href={blogPostHref(post.slug)} className="transition-colors hover:text-gold">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-muted">{post.excerpt}</p>

                  <div className="mt-6 flex items-center justify-between gap-3 border-t border-[#eef1f5] pt-4">
                    <Link
                      href={blogPostHref(post.slug)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors hover:text-gold"
                    >
                      {t("readMore")}
                      <ArrowIcon className="h-3.5 w-3.5" />
                    </Link>
                    <time dateTime={post.date} className="text-sm text-muted">
                      {post.dateLabel}
                    </time>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
