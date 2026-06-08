"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { testimonials } from "@/lib/testimonials";

export default function TestimonialsSection() {
  const { t, language } = useLanguage();

  // Gerçek yorum yoksa bölüm hiç render edilmez (boş-güvenli).
  if (testimonials.length === 0) return null;

  const initials = (name: string) =>
    name
      .split(" ")
      .map((w) => w[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();

  return (
    <section className="py-20 lg:py-28 relative bg-[var(--background-secondary)]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-[var(--neon-blue)]/50 bg-[var(--background)] mb-6 badge-enhanced">
            <span className="w-2 h-2 bg-[var(--neon-blue)] rounded-full animate-pulse" />
            <span className="text-sm text-[var(--foreground-muted)]">{t.testimonials.badge}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-[var(--foreground)]">{t.testimonials.title} </span>
            <span className="neon-text">{t.testimonials.titleHighlight}</span>
          </h2>
          <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">{t.testimonials.description}</p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name + index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass-card rounded-2xl p-6 lg:p-8 flex flex-col"
            >
              {/* Quote mark */}
              <svg className="w-8 h-8 text-[var(--electric-violet)]/60 mb-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
              </svg>
              <p className="text-[var(--foreground-muted)] leading-relaxed mb-6 flex-1">
                {language === "EN" && item.quoteEN ? item.quoteEN : item.quoteTR}
              </p>
              <div className="flex items-center gap-3">
                {item.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={item.avatar} alt={item.name} className="w-11 h-11 rounded-full object-cover" />
                ) : (
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[var(--cyber-cobalt)] to-[var(--electric-violet)] flex items-center justify-center text-white font-semibold text-sm">
                    {initials(item.name)}
                  </div>
                )}
                <div>
                  <div className="text-[var(--foreground)] font-semibold text-sm">{item.name}</div>
                  <div className="text-[var(--foreground-muted)] text-xs">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
