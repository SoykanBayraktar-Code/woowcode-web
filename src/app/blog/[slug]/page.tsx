import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import BlogContent from "./BlogContent";
import RelatedPosts from "./RelatedPosts";

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static paths
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Yazı Bulunamadı",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter(
      (p) =>
        p.slug !== post.slug &&
        (p.category === post.category || p.tags.some((t) => post.tags.includes(t)))
    )
    .slice(0, 3);

  const formattedDate = new Date(post.date).toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // JSON-LD for Article
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "WOOWCODE",
      logo: {
        "@type": "ImageObject",
        url: "/WOOWCODELOGO.png",
      },
    },
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="min-h-screen pt-20">
        {/* Header */}
        <header className="py-12 lg:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--neon-blue)] rounded-full mix-blend-multiply filter blur-[128px] opacity-10" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-[var(--foreground-muted)] mb-8">
              <Link
                href="/"
                className="hover:text-[var(--neon-blue)] transition-colors"
              >
                Ana Sayfa
              </Link>
              <span>/</span>
              <Link
                href="/blog"
                className="hover:text-[var(--neon-blue)] transition-colors"
              >
                Blog
              </Link>
              <span>/</span>
              <span className="text-[var(--foreground)]">{post.category}</span>
            </nav>

            {/* Category */}
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--neon-blue)] text-[var(--background)] mb-4">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-[var(--foreground-muted)] mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-[var(--border-color)]">
              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-green)] flex items-center justify-center text-[var(--background)] font-semibold">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-[var(--foreground)]">
                    {post.author.name}
                  </p>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    {post.author.role}
                  </p>
                </div>
              </div>

              {/* Date & Read Time */}
              <div className="flex items-center space-x-4 text-sm text-[var(--foreground-muted)]">
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>{formattedDate}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{post.readTime} okuma</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <BlogContent content={post.content} />

        {/* Tags */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-[var(--border-color)]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-[var(--foreground-muted)] mr-2">
              Etiketler:
            </span>
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${tag}`}
                className="px-3 py-1 text-sm rounded-full bg-[var(--background-secondary)] border border-[var(--border-color)] text-[var(--foreground-muted)] hover:border-[var(--neon-blue)] hover:text-[var(--neon-blue)] transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Share */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-[var(--border-color)]">
          <div className="flex items-center justify-between">
            <span className="text-[var(--foreground)]">Bu yazıyı paylaş:</span>
            <div className="flex items-center space-x-3">
              <button className="w-10 h-10 rounded-lg bg-[var(--background-secondary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--foreground-muted)] hover:border-[var(--neon-blue)] hover:text-[var(--neon-blue)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </button>
              <button className="w-10 h-10 rounded-lg bg-[var(--background-secondary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--foreground-muted)] hover:border-[var(--neon-blue)] hover:text-[var(--neon-blue)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </button>
              <button className="w-10 h-10 rounded-lg bg-[var(--background-secondary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--foreground-muted)] hover:border-[var(--neon-blue)] hover:text-[var(--neon-blue)] transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-[var(--background-secondary)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              <span className="text-[var(--foreground)]">Projeniz için </span>
              <span className="neon-text">destek mi arıyorsunuz?</span>
            </h2>
            <p className="text-[var(--foreground-muted)] mb-8">
              Teknoloji çözümlerimiz hakkında konuşalım.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] text-[var(--background)] font-semibold rounded-xl hover:opacity-90 transition-opacity"
            >
              İletişime Geçin
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
