"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

// Icon Components
const icons: Record<string, React.ReactNode> = {
  drone: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3l4 4m0 0l-4 4m4-4H3m18 0h-6m6 0l-4-4m4 4l-4 4M12 12a2 2 0 100-4 2 2 0 000 4zm0 0v8m-4-4h8" />
    </svg>
  ),
  brain: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  database: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
  twin: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  cloud: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  ),
  mobile: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  sensor: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  ),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ServicesSection() {
  const { t } = useLanguage();

  const serviceIds = ["autonomous-drones", "industrial-ai", "data-engineering", "digital-twin", "saas-development", "mobile-web-apps", "iot-automation"] as const;

  return (
    <section id="services" className="py-20 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--background-secondary)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

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
            <span className="text-[var(--foreground)]">{t.services.title} </span>
            <span className="neon-text">{t.services.titleHighlight}</span>
          </h2>
          <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto text-lg">
            {t.services.description}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {serviceIds.map((serviceId, index) => {
            const service = t.services.items[serviceId];
            const iconKey = serviceId === "autonomous-drones" ? "drone" : 
                           serviceId === "industrial-ai" ? "brain" :
                           serviceId === "data-engineering" ? "database" :
                           serviceId === "digital-twin" ? "twin" :
                           serviceId === "saas-development" ? "cloud" :
                           serviceId === "mobile-web-apps" ? "mobile" : "sensor";
            return (
            <motion.div
              key={serviceId}
              variants={itemVariants}
              className={`group relative glass-card rounded-2xl p-6 lg:p-8 hover:border-[var(--electric-violet)] transition-all duration-500 ${
                index === 0 ? "lg:col-span-2 lg:row-span-1" : ""
              } ${index === 3 ? "lg:col-span-2" : ""}`}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--cyber-cobalt)]/10 via-[var(--electric-violet)]/10 to-[var(--deep-magenta)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[var(--background-tertiary)] border border-[var(--electric-violet)]/40 flex items-center justify-center text-[var(--electric-violet)] mb-6 group-hover:border-[var(--electric-violet)] group-hover:shadow-lg group-hover:shadow-[var(--electric-violet-glow)] transition-all duration-500 shadow-[0_0_8px_rgba(123,31,162,0.15)]">
                  {icons[iconKey]}
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-semibold text-[var(--foreground)] mb-3 group-hover:text-[var(--electric-violet)] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[var(--foreground-muted)] mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature: string) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs rounded-full bg-[var(--background-tertiary)] border border-[var(--electric-violet)]/35 text-[var(--foreground-muted)] shadow-[0_0_6px_rgba(123,31,162,0.15)] hover:border-[var(--electric-violet)]/60 transition-all duration-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
          })}
        </motion.div>
      </div>
    </section>
  );
}
