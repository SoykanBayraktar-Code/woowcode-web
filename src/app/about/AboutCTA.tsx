"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutCTA() {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--neon-blue)] rounded-full filter blur-[150px] opacity-10" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--neon-green)] rounded-full filter blur-[150px] opacity-10" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-[var(--foreground)]">{t.about.cta.title}</span>
          </h2>

          <p className="text-lg text-[var(--foreground-muted)] mb-10 max-w-2xl mx-auto">
            {t.about.cta.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] text-[var(--background)] font-semibold rounded-xl neon-glow text-lg"
              >
                {t.about.cta.button}
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/#services"
                className="inline-flex items-center px-8 py-4 border-2 border-[var(--neon-blue)]/50 text-[var(--foreground)] font-semibold rounded-xl hover:border-[var(--neon-blue)] hover:text-[var(--neon-blue)] transition-all text-lg shadow-[0_0_15px_rgba(13,71,161,0.2)] hover:shadow-[0_0_25px_rgba(13,71,161,0.35)]"
              >
                {t.nav.services}
              </Link>
            </motion.div>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-10 border-t border-[var(--border-color)]">
            <p className="text-sm text-[var(--foreground-muted)] mb-6">
              Güvenilir teknoloji ortağınız
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-[var(--foreground-muted)]">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-[var(--neon-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">NDA Garantisi</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-[var(--neon-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">7/24 Destek</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-[var(--neon-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Esnek Ödeme</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-[var(--neon-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Sonuç Garantisi</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
