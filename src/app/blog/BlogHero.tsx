"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function BlogHero() {
  const { t } = useLanguage();
  
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--neon-blue)] rounded-full mix-blend-multiply filter blur-[128px] opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-[var(--neon-blue)]/50 bg-[var(--background-secondary)] mb-6 shadow-[0_0_10px_rgba(13,71,161,0.2)]">
            <svg
              className="w-4 h-4 text-[var(--neon-blue)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
            <span className="text-sm text-[var(--foreground-muted)]">
              {t.blogPage.hero.badge}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-[var(--foreground)]">{t.blogPage.hero.title} </span>
            <span className="neon-text">{t.blogPage.hero.titleHighlight}</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto mb-8">
            {t.blogPage.hero.description}
          </p>

          {/* Search - Optional */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder={t.blogPage.filters.search}
                className="w-full px-5 py-3 pl-12 rounded-xl bg-[var(--background-secondary)] border border-[var(--neon-blue)]/40 text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:outline-none focus:border-[var(--neon-blue)] transition-colors shadow-[0_0_8px_rgba(13,71,161,0.1)]"
              />
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--foreground-muted)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
