"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BlogPost } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group relative glass-card rounded-2xl overflow-hidden hover:border-[var(--neon-blue)] transition-all duration-500"
      >
        <Link href={`/blog/${post.slug}`} className="block">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative h-64 md:h-full min-h-[300px] bg-[var(--background-tertiary)] overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)]/60 to-transparent" />
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--neon-blue)] text-[var(--background)]">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 flex flex-col justify-center">
              {/* Meta */}
              <div className="flex items-center space-x-4 text-sm text-[var(--foreground-muted)] mb-4">
                <span>{formattedDate}</span>
                <span>•</span>
                <span>{post.readTime} okuma</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-4 group-hover:text-[var(--neon-blue)] transition-colors">
                {post.title}
              </h2>

              {/* Excerpt */}
              <p className="text-[var(--foreground-muted)] mb-6 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded bg-[var(--background-tertiary)] text-[var(--foreground-muted)] border border-[var(--border-color)]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-green)] flex items-center justify-center text-[var(--background)] font-semibold text-sm">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--foreground)]">
                    {post.author.name}
                  </p>
                  <p className="text-xs text-[var(--foreground-muted)]">
                    {post.author.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group glass-card rounded-2xl overflow-hidden hover:border-[var(--neon-blue)] transition-all duration-500"
    >
      <Link href={`/blog/${post.slug}`} className="block">
        {/* Image */}
        <div className="relative h-48 bg-[var(--background-tertiary)] overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/40 to-transparent" />
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--neon-blue)]/90 text-[var(--background)]">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Meta */}
          <div className="flex items-center space-x-3 text-xs text-[var(--foreground-muted)] mb-3">
            <span>{formattedDate}</span>
            <span>•</span>
            <span>{post.readTime} okuma</span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-[var(--foreground)] mb-3 group-hover:text-[var(--neon-blue)] transition-colors line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-[var(--foreground-muted)] mb-4 leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>

          {/* Read More */}
          <div className="flex items-center text-[var(--neon-blue)] text-sm font-medium group-hover:translate-x-1 transition-transform">
            <span>Devamını Oku</span>
            <svg
              className="w-4 h-4 ml-1"
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
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
