"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactHero() {
  const { t } = useLanguage();
  
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-[var(--neon-blue)]/10 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[var(--electric-violet)]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[var(--neon-green)]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--neon-blue)]/10 border border-[var(--neon-blue)]/30 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--neon-green)] mr-2 animate-pulse" />
            <span className="text-[var(--neon-blue)] text-sm font-medium">
              {t.contact.hero.badge}
            </span>
          </motion.div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-[var(--foreground)]">{t.contact.hero.title} </span>
            <span className="text-gradient">{t.contact.hero.titleHighlight}</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-[var(--foreground-muted)] leading-relaxed">
            {t.contact.hero.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
