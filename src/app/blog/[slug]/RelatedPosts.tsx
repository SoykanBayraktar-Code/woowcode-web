"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BlogPost } from "@/lib/blog";

interface RelatedPostsProps {
  posts: BlogPost[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <section className="py-16 border-t border-[var(--electric-violet)]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8">
          İlgili Yazılar
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => {
            const formattedDate = new Date(post.date).toLocaleDateString(
              "tr-TR",
              {
                year: "numeric",
                month: "short",
                day: "numeric",
              }
            );

            return (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group glass-card rounded-xl overflow-hidden hover:border-[var(--neon-blue)] transition-all duration-300"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  {/* Image Placeholder */}
                  <div className="h-40 bg-gradient-to-br from-[var(--neon-blue)]/10 to-[var(--neon-green)]/10 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-[var(--neon-blue)]/20"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center space-x-2 text-xs text-[var(--foreground-muted)] mb-2">
                      <span>{formattedDate}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="font-semibold text-[var(--foreground)] group-hover:text-[var(--neon-blue)] transition-colors line-clamp-2 mb-2">
                      {post.title}
                    </h3>

                    <p className="text-sm text-[var(--foreground-muted)] line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
