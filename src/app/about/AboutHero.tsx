"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutHero() {
  const { t, language } = useLanguage();
  
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--neon-blue)] rounded-full mix-blend-multiply filter blur-[150px] opacity-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--neon-green)] rounded-full mix-blend-multiply filter blur-[150px] opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-[var(--border-color)] bg-[var(--background-secondary)] mb-6">
              <span className="w-2 h-2 bg-[var(--neon-blue)] rounded-full" />
              <span className="text-sm text-[var(--foreground-muted)]">
                {t.about.hero.badge}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-[var(--foreground)]">{t.about.hero.title} </span>
              <span className="neon-text">{t.about.hero.titleHighlight}</span>
            </h1>

            <p className="text-lg text-[var(--foreground-muted)] mb-8 leading-relaxed">
              {t.about.hero.description}
            </p>

            <div className="flex flex-wrap gap-4">
              {t.about.hero.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-center space-x-2 text-[var(--foreground-muted)]">
                  <svg className="w-5 h-5 text-[var(--neon-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-[var(--border-color)] opacity-20" />
              </div>
              <div className="absolute inset-8 flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-[var(--neon-blue)] opacity-30" />
              </div>
              <div className="absolute inset-16 flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-[var(--neon-green)] opacity-40" />
              </div>
              
              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Image
                    src="/logo.svg"
                    alt="WOOWCODE"
                    width={200}
                    height={80}
                    className="w-48 lg:w-56 h-auto"
                  />
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-10 right-10 w-16 h-16 glass-card rounded-xl flex items-center justify-center"
              >
                <svg className="w-8 h-8 text-[var(--neon-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-10 left-10 w-16 h-16 glass-card rounded-xl flex items-center justify-center"
              >
                <svg className="w-8 h-8 text-[var(--neon-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
