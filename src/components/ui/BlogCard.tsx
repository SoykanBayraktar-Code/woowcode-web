"use client";

import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/blog";
import { useLanguage } from "@/context/LanguageContext";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const { language } = useLanguage();
  const date = new Date(post.date).toLocaleDateString(language === "EN" ? "en-GB" : "tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const meta = (
    <div className="flex items-center gap-3 font-mono text-[11px] text-[var(--foreground-muted)]">
      <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[var(--foreground-muted-bright)]">{post.category}</span>
      <span>{date}</span>
      <span aria-hidden="true">·</span>
      <span>{post.readTime}</span>
    </div>
  );

  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="group card-line grid overflow-hidden md:grid-cols-2">
        <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[360px] overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07090d]/60 to-transparent md:bg-gradient-to-r" />
        </div>
        <div className="flex flex-col justify-center p-7 sm:p-10">
          {meta}
          <h3 className="heading-lg mt-6 text-2xl sm:text-3xl lg:text-4xl text-[var(--foreground)]">{post.title}</h3>
          <p className="mt-4 line-clamp-3 text-[17px] leading-relaxed text-[var(--foreground-muted)]">{post.excerpt}</p>
          <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)]">
            {language === "EN" ? "Read" : "Oku"}
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group card-line flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        {meta}
        <h3 className="mt-5 line-clamp-2 text-lg font-semibold leading-snug tracking-[-0.01em] text-[var(--foreground)]">{post.title}</h3>
        <p className="mt-3 line-clamp-2 text-[15px] leading-relaxed text-[var(--foreground-muted)]">{post.excerpt}</p>
      </div>
    </Link>
  );
}
