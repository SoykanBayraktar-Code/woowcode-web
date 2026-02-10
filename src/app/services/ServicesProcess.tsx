"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const stepIcons = [
  <svg key="1" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>,
  <svg key="2" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
  </svg>,
  <svg key="3" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>,
  <svg key="4" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>,
  <svg key="5" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
];

export default function ServicesProcess() {
  const { t } = useLanguage();
  const processSteps = t.servicesPage.process.steps;
  
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(123,47,247,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(123,47,247,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-[var(--foreground)]">{t.servicesPage.process.title} </span>
            <span className="neon-text">{t.servicesPage.process.titleHighlight}</span>
          </h2>
          <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto text-lg">
            {t.servicesPage.process.description}
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--cyber-cobalt)] via-[var(--electric-violet)] to-[var(--deep-magenta)] transform -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step: { step: string; title: string; description: string }, index: number) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="glass-card rounded-2xl p-6 text-center h-full hover:border-[var(--electric-violet)] transition-all duration-300">
                  {/* Step Number */}
                  <div className="relative z-10 w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--cyber-cobalt)] via-[var(--electric-violet)] to-[var(--deep-magenta)] flex items-center justify-center text-white shadow-lg shadow-[var(--electric-violet-glow)]">
                    <span className="font-bold">{step.step}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="w-10 h-10 mx-auto mb-4 rounded-lg bg-[var(--background-tertiary)] border border-[var(--electric-violet)]/40 flex items-center justify-center text-[var(--electric-violet)] shadow-[0_0_8px_rgba(123,31,162,0.15)]">
                    {stepIcons[index]}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
