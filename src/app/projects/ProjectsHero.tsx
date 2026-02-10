"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsHero() {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--cyber-cobalt)] rounded-full mix-blend-multiply filter blur-[128px] opacity-20" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[var(--deep-magenta)] rounded-full mix-blend-multiply filter blur-[128px] opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--electric-violet)] rounded-full mix-blend-multiply filter blur-[200px] opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-[var(--electric-violet)]/50 bg-[var(--background-secondary)] mb-6 shadow-[0_0_15px_rgba(123,31,162,0.2)]"
          >
            <span className="w-2 h-2 bg-[var(--electric-violet)] rounded-full animate-pulse" />
            <span className="text-sm text-[var(--foreground-muted)]">
              {t.projectsPage.hero.badge}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="text-[var(--foreground)]">
              {t.projectsPage.hero.title}{" "}
            </span>
            <span className="neon-text">{t.projectsPage.hero.titleHighlight}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-[var(--foreground-muted)] leading-relaxed max-w-3xl mx-auto mb-8"
          >
            {t.projectsPage.hero.description}
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-12 mt-12"
          >
            {[
              { value: "4+", label: t.projectsPage.hero.stats.activeProjects },
              { value: "AI", label: t.projectsPage.hero.stats.technology },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold neon-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--foreground-muted)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
