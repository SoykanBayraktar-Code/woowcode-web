"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { BlogPost } from "@/lib/blog";
import { useLanguage } from "@/context/LanguageContext";
import { blogCopy } from "@/lib/pages";
import PageHero from "@/components/sections/PageHero";
import BlogCard from "@/components/ui/BlogCard";

export default function BlogIndex({ posts, categories }: { posts: BlogPost[]; categories: string[] }) {
  const { language, t } = useLanguage();
  const [active, setActive] = useState<string>("all");
  const featured = posts.filter((p) => p.featured);
  const list = posts.filter((p) => !p.featured && (active === "all" || p.category === active));
  const h = blogCopy.hero;

  const chip = (value: string, label: string) => (
    <button
      key={value}
      type="button"
      onClick={() => setActive(value)}
      aria-pressed={active === value}
      className={`rounded-full px-4 py-2 text-sm transition-colors ${
        active === value
          ? "bg-white text-[#05070a]"
          : "border border-[var(--border-color)] text-[var(--foreground-muted)] hover:border-[var(--border-color-bright)] hover:text-[var(--foreground)]"
      }`}
    >
      {label}
    </button>
  );

  return (
    <>
      <PageHero eyebrow={h.eyebrow[language]} title={h.title[language]} highlight={h.highlight[language]} description={h.description[language]} />

      {featured.length > 0 && (
        <section className="border-t border-[var(--border-color)] py-16 lg:py-24">
          <div className="container-x">
            <span className="eyebrow">{blogCopy.featured[language]}</span>
            <div className="mt-8 space-y-5">
              {featured.map((p) => (
                <BlogCard key={p.slug} post={p} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-[var(--border-color)] py-16 lg:py-24">
        <div className="container-x">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <span className="eyebrow">{blogCopy.all[language]}</span>
            <div className="flex flex-wrap gap-2">
              {chip("all", t.blogPage.filters.all)}
              {categories.map((c) => chip(c, c))}
            </div>
          </div>
          <motion.div layout className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {list.map((p) => (
                <motion.div
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3 }}
                >
                  <BlogCard post={p} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          {list.length === 0 && (
            <p className="mt-10 text-[var(--foreground-muted)]">
              {language === "EN" ? "No other posts in this category yet." : "Bu kategoride henüz başka yazı yok."}
            </p>
          )}
        </div>
      </section>
    </>
  );
}
