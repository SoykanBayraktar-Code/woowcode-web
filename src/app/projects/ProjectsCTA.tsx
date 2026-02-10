"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsCTA() {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--background)]" />

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--cyber-cobalt)] rounded-full mix-blend-multiply filter blur-[150px] opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--deep-magenta)] rounded-full mix-blend-multiply filter blur-[150px] opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-8 lg:p-12 text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-[var(--cyber-cobalt)] via-[var(--electric-violet)] to-[var(--deep-magenta)] flex items-center justify-center shadow-lg"
          >
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </motion.div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-[var(--foreground)]">
              {t.projectsPage.cta.title}{" "}
            </span>
            <span className="neon-text">{t.projectsPage.cta.titleHighlight}</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-[var(--foreground-muted)] mb-8 max-w-2xl mx-auto leading-relaxed">
            {t.projectsPage.cta.description}
          </p>

          {/* Button */}
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[var(--cyber-cobalt)] via-[var(--electric-violet)] to-[var(--deep-magenta)] text-white font-semibold rounded-xl shadow-lg shadow-[var(--electric-violet)]/25 hover:shadow-[var(--electric-violet)]/40 transition-shadow duration-300"
            >
              {t.projectsPage.cta.button}
            </motion.button>
          </Link>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mt-10 pt-8 border-t border-[var(--border-color)]"
          >
            {[
              { icon: "✓", text: t.projectsPage.cta.features.consultation },
              { icon: "✓", text: t.projectsPage.cta.features.customSolution },
              { icon: "✓", text: t.projectsPage.cta.features.support },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 text-[var(--foreground-muted)]"
              >
                <span className="text-[var(--electric-violet-light)]">{item.icon}</span>
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
