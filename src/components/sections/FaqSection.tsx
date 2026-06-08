"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function FaqSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-[var(--neon-blue)]/50 bg-[var(--background-secondary)] mb-6 badge-enhanced">
            <span className="w-2 h-2 bg-[var(--neon-blue)] rounded-full animate-pulse" />
            <span className="text-sm text-[var(--foreground-muted)]">{t.faq.badge}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-[var(--foreground)]">{t.faq.title} </span>
            <span className="neon-text">{t.faq.titleHighlight}</span>
          </h2>
          <p className="text-[var(--foreground-muted)]">{t.faq.description}</p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="glass-card rounded-xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-[var(--foreground)] font-medium">{item.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 text-[var(--neon-blue)]"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="px-6 pb-5 text-[var(--foreground-muted)] leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
