"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesCTA() {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--background-secondary)]" />
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-[var(--foreground)]">{t.servicesPage.cta.title} </span>
            <span className="neon-text">{t.servicesPage.cta.titleHighlight}</span>
          </h2>
          
          <p className="text-lg text-[var(--foreground-muted)] mb-8 max-w-2xl mx-auto leading-relaxed">
            {t.servicesPage.cta.description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[var(--cyber-cobalt)] via-[var(--electric-violet)] to-[var(--deep-magenta)] text-white font-semibold rounded-xl shadow-lg shadow-[var(--electric-violet-glow)] text-lg"
              >
                {t.servicesPage.cta.button}
              </motion.button>
            </Link>
            
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-[var(--border-color)] text-[var(--foreground)] font-semibold rounded-xl hover:border-[var(--electric-violet)] hover:text-[var(--electric-violet)] transition-colors text-lg"
              >
                {t.nav.about}
              </motion.button>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="mt-12 pt-8 border-t border-[var(--border-color)]">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: "50+", label: t.servicesPage.cta.stats.projects },
                { value: "6", label: t.servicesPage.cta.stats.expertise },
                { value: "99.9%", label: t.servicesPage.cta.stats.satisfaction },
                { value: "7/24", label: t.servicesPage.cta.stats.support },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold neon-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[var(--foreground-muted)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
