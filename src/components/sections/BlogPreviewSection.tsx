"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import BlogCard from "@/components/ui/BlogCard";
import { blogPosts } from "@/lib/blog";
import { useLanguage } from "@/context/LanguageContext";

export default function BlogPreviewSection() {
  const { t } = useLanguage();
  // Get the latest 3 posts
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[var(--background-secondary)] to-[var(--background)]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--neon-blue)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--electric-violet)]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-[var(--electric-violet)]/10 text-[var(--electric-violet)] border border-[var(--electric-violet)]/30 mb-4">
            {t.blog.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
            {t.blog.title}{" "}
            <span className="text-[var(--neon-blue)]">{t.blog.titleHighlight}</span>
          </h2>
          <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
            {t.blog.description}
          </p>
        </motion.div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {latestPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[var(--neon-blue)] text-[var(--neon-blue)] font-semibold hover:bg-[var(--neon-blue)]/10 transition-all duration-300 group"
          >
            <span>{t.blog.viewAll}</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
