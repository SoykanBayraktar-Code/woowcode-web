import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import BlogContent from "./BlogContent";
import BlogCard from "@/components/ui/BlogCard";
import { site } from "@/lib/site";

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
        url: `${site.url}/logo.png`,
      },
    },
  };

  const url = `${site.url}/blog/${post.slug}`;
  const share = [
    { label: "X", href: `https://x.com/intent/post?url=${encodeURIComponent(url)}&text=${encodeURIComponent(post.title)}` },
    { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}` },
    { label: "WhatsApp", href: `https://wa.me/?text=${encodeURIComponent(`${post.title} ${url}`)}` },
  ];

  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article>
        <header className="relative overflow-hidden noise pt-36 pb-12 lg:pt-44">
          <div className="absolute inset-0 bg-grid" aria-hidden="true" />
          <div
            className="absolute left-1/2 top-0 h-[30rem] w-[56rem] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-40 blur-[120px]"
            style={{ background: "radial-gradient(closest-side, rgba(10,132,255,0.5), transparent)" }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
            <nav aria-label="breadcrumb" className="flex items-center gap-2 text-sm text-[var(--foreground-muted)]">
              <Link href="/blog" className="hover:text-[var(--foreground)] transition-colors">Blog</Link>
              <span aria-hidden="true">/</span>
              <span className="text-[var(--foreground-muted-bright)]">{post.category}</span>
            </nav>
            <h1 className="heading-xl mt-8 text-4xl sm:text-5xl lg:text-6xl text-[var(--foreground)]">{post.title}</h1>
            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-[var(--foreground-muted)]">{post.excerpt}</p>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[var(--border-color)] pt-6 text-sm text-[var(--foreground-muted)]">
              <span className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] font-mono text-xs text-[var(--foreground)]">
                  {post.author.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-[var(--foreground)]">{post.author.name}</span>
                  <span className="text-xs">{post.author.role}</span>
                </span>
              </span>
              <span className="font-mono text-xs">{formattedDate}</span>
              <span className="font-mono text-xs">{post.readTime} okuma</span>
            </div>
          </div>
        </header>

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
          <div className="relative aspect-[16/8] overflow-hidden rounded-[1.5rem] border border-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.coverImage} alt={post.title} className="h-full w-full object-cover" />
          </div>
        </div>

        <BlogContent content={post.content} />

        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="flex flex-col gap-6 border-t border-[var(--border-color)] py-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-[var(--border-color)] px-3 py-1 font-mono text-xs text-[var(--foreground-muted)]">
                  #{tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="mr-1 text-sm text-[var(--foreground-muted)]">Paylaş:</span>
              {share.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[var(--border-color)] px-3 py-1.5 text-xs text-[var(--foreground-muted-bright)] hover:border-[var(--border-color-bright)] hover:text-[var(--foreground)] transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <section className="border-t border-[var(--border-color)] py-20">
            <div className="container-x">
              <span className="eyebrow">İlgili yazılar</span>
              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((p) => (
                  <BlogCard key={p.slug} post={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
}
