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
                className="px-8 py-4 border-2 border-[var(--electric-violet)]/50 text-[var(--foreground)] font-semibold rounded-xl hover:border-[var(--electric-violet)] hover:text-[var(--electric-violet)] transition-all text-lg shadow-[0_0_15px_rgba(123,31,162,0.2)] hover:shadow-[0_0_25px_rgba(123,31,162,0.35)]"
              >
                {t.nav.about}
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
