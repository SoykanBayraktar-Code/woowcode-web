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
              : "bg-[var(--background-tertiary)] text-[var(--foreground-muted)] border border-[var(--border-color)] hover:border-[var(--neon-blue)] hover:text-[var(--neon-blue)]"
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
                : "bg-[var(--background-tertiary)] text-[var(--foreground-muted)] border border-[var(--border-color)] hover:border-[var(--neon-blue)] hover:text-[var(--neon-blue)]"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
