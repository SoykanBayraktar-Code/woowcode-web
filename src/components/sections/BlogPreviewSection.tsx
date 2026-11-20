"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import BlogCard from "@/components/ui/BlogCard";
import { blogPosts } from "@/lib/blog";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "@/components/sections/SectionHeader";

export default function BlogPreviewSection() {
  const { t } = useLanguage();
  // Get the latest 3 posts
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="relative py-24 lg:py-36 border-t border-[var(--border-color)]">
      <div className="container-x">
        <SectionHeader
          eyebrow={t.blog.badge}
          title={t.blog.title}
          highlight={t.blog.titleHighlight}
          description={t.blog.description}
          action={
            <Link href="/blog" className="btn-ghost self-start lg:self-auto">
              {t.blog.viewAll}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {latestPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
