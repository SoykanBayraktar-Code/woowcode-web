"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesPackages() {
  const { t } = useLanguage();
  const subject = encodeURIComponent(t.contact.form.subjects.project);

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-[var(--background-secondary)]">
      {/* Orbs */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[var(--cyber-cobalt)] rounded-full mix-blend-multiply filter blur-[140px] opacity-15" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[var(--deep-magenta)] rounded-full mix-blend-multiply filter blur-[140px] opacity-15" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-[var(--electric-violet)]/50 bg-[var(--background)] mb-6 badge-enhanced">
            <span className="w-2 h-2 bg-[var(--electric-violet)] rounded-full animate-pulse" />
            <span className="text-sm text-[var(--foreground-muted)]">{t.packages.badge}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-[var(--foreground)]">{t.packages.title} </span>
            <span className="neon-text">{t.packages.titleHighlight}</span>
          </h2>
          <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">{t.packages.description}</p>
        </motion.div>

        {/* Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {t.packages.tiers.map((tier, index) => {
            const isPopular = index === 1;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className={`relative rounded-3xl p-8 flex flex-col ${
                  isPopular
                    ? "bg-[var(--background)] border-2 border-[var(--electric-violet)] shadow-[0_0_40px_rgba(123,31,162,0.3)] lg:scale-105"
                    : "glass-card"
                }`}
              >
                {isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[var(--electric-violet)] to-[var(--deep-magenta)] shadow-lg whitespace-nowrap">
                    {t.packages.popular}
                  </span>
                )}

                {/* Name + tagline */}
                <h3 className="text-2xl font-bold text-[var(--foreground)] mb-1">{tier.name}</h3>
                <p className="text-[var(--foreground-muted)] text-sm mb-4">{tier.tagline}</p>

                {/* For who */}
                <span className="inline-flex self-start items-center px-3 py-1 mb-6 text-xs font-medium rounded-full bg-[var(--background-tertiary)] border border-[var(--electric-violet)]/40 text-[var(--foreground-muted-bright)]">
                  {tier.forWho}
                </span>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[var(--electric-violet)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5 text-[var(--electric-violet-light)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-[var(--foreground-muted)] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={`/contact?subject=${subject}`}
                  className={`w-full text-center py-3.5 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    isPopular
                      ? "text-white bg-gradient-to-r from-[var(--neon-blue)] to-[var(--electric-violet)] hover:shadow-[0_0_25px_rgba(13,71,161,0.45)]"
                      : "text-[var(--foreground)] border-2 border-[var(--neon-blue)]/50 hover:border-[var(--neon-blue)] hover:text-[var(--neon-blue)]"
                  }`}
                >
                  {t.packages.cta}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
