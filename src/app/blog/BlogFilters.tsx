"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface BlogFiltersProps {
  categories: string[];
}

export default function BlogFilters({ categories }: BlogFiltersProps) {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <h2 className="text-2xl font-bold text-[var(--foreground)]">
        {t.blogPage.filters.allPosts}
      </h2>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-2 text-sm rounded-lg transition-all ${
            activeCategory === "all"
              ? "bg-[var(--neon-blue)] text-[var(--background)]"
              : "bg-[var(--background-tertiary)] text-[var(--foreground-muted)] border border-[var(--neon-blue)]/40 hover:border-[var(--neon-blue)] hover:text-[var(--neon-blue)] shadow-[0_0_6px_rgba(13,71,161,0.1)]"
          }`}
        >
          {t.blogPage.filters.all}
        </motion.button>
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 text-sm rounded-lg transition-all ${
              activeCategory === category
                ? "bg-[var(--neon-blue)] text-[var(--background)]"
                : "bg-[var(--background-tertiary)] text-[var(--foreground-muted)] border border-[var(--neon-blue)]/40 hover:border-[var(--neon-blue)] hover:text-[var(--neon-blue)] shadow-[0_0_6px_rgba(13,71,161,0.1)]"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
