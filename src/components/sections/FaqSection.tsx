"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function FaqSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 lg:py-36 border-t border-[var(--border-color)]">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:sticky lg:top-32 self-start"
        >
          <span className="eyebrow">{t.faq.badge}</span>
          <h2 className="heading-lg mt-4 text-3xl sm:text-4xl lg:text-[3.25rem] text-[var(--foreground)]">
            {t.faq.title} <span className="text-gradient">{t.faq.titleHighlight}</span>
          </h2>
          <p className="mt-5 text-[var(--foreground-muted)] leading-relaxed">{t.faq.description}</p>
        </motion.div>

        <div className="border-t border-[var(--border-color)]">
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.q} className="border-b border-[var(--border-color)]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="group w-full flex items-start justify-between gap-6 py-6 text-left"
                >
                  <span className="flex gap-4">
                    <span className="mt-0.5 font-mono text-xs text-[var(--foreground-muted)]/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={`text-base lg:text-lg font-medium transition-colors ${isOpen ? "text-[var(--foreground)]" : "text-[var(--foreground-muted-bright)] group-hover:text-[var(--foreground)]"}`}>
                      {item.q}
                    </span>
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`grid h-7 w-7 flex-shrink-0 place-items-center rounded-full border transition-colors ${isOpen ? "border-[var(--mint)]/50 text-[var(--mint)]" : "border-white/10 text-[var(--foreground-muted)]"}`}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pl-9 pr-12 text-[var(--foreground-muted)] leading-relaxed">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
