"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesHero() {
  const { t } = useLanguage();
  
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--cyber-cobalt)] rounded-full mix-blend-multiply filter blur-[128px] opacity-20" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[var(--deep-magenta)] rounded-full mix-blend-multiply filter blur-[128px] opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-[var(--border-color)] bg-[var(--background-secondary)] mb-6">
            <span className="w-2 h-2 bg-[var(--electric-violet)] rounded-full animate-pulse" />
            <span className="text-sm text-[var(--foreground-muted)]">
              {t.servicesPage.hero.badge}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-[var(--foreground)]">{t.servicesPage.hero.title} </span>
            <span className="neon-text">{t.servicesPage.hero.titleHighlight}</span>
            <br />
            <span className="text-[var(--foreground)]">{t.servicesPage.hero.titleEnd}</span>
          </h1>

          <p className="text-lg sm:text-xl text-[var(--foreground-muted)] leading-relaxed max-w-3xl mx-auto">
            {t.servicesPage.hero.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
