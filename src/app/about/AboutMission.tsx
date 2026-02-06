"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutMission() {
  const { t, language } = useLanguage();

  const missionItems = t.about.mission.items;
  const visionItems = t.about.vision.items;
  
  return (
    <section className="py-20 lg:py-32 bg-[var(--background-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Misyon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-8 lg:p-12 relative overflow-hidden"
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--neon-blue)] rounded-full filter blur-[80px] opacity-20" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-blue)]/50 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[var(--background)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold text-[var(--foreground)] mb-4">
                {t.about.mission.title}
              </h2>

              <p className="text-[var(--foreground-muted)] leading-relaxed mb-6">
                {t.about.mission.description}
              </p>

              <ul className="space-y-3">
                {missionItems.map((item: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-[var(--neon-blue)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--foreground-muted)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Vizyon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-8 lg:p-12 relative overflow-hidden"
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--neon-green)] rounded-full filter blur-[80px] opacity-20" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--neon-green)] to-[var(--neon-green)]/50 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[var(--background)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold text-[var(--foreground)] mb-4">
                {t.about.vision.title}
              </h2>

              <p className="text-[var(--foreground-muted)] leading-relaxed mb-6">
                {t.about.vision.description}
              </p>

              <ul className="space-y-3">
                {visionItems.map((item: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-[var(--neon-green)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--foreground-muted)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Hikaye */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            <span className="text-[var(--foreground)]">{t.about.story.title}</span>
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] leading-relaxed mb-4">
            {t.about.story.description}
          </p>
          <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
            {t.about.story.description2}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
