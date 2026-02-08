"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

// Service IDs and icons mapping
const serviceIds = [
  "autonomous-drones",
  "industrial-ai", 
  "data-engineering",
  "digital-twin",
  "saas-development",
  "iot-sensors",
] as const;

const iconMap: Record<string, string> = {
  "autonomous-drones": "drone",
  "industrial-ai": "brain",
  "data-engineering": "database",
  "digital-twin": "twin",
  "saas-development": "cloud",
  "iot-sensors": "sensor",
};

// Icon Components
const icons: Record<string, React.ReactNode> = {
  drone: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3l4 4m0 0l-4 4m4-4H3m18 0h-6m6 0l-4-4m4 4l-4 4M12 12a2 2 0 100-4 2 2 0 000 4zm0 0v8m-4-4h8" />
    </svg>
  ),
  brain: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  database: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
  twin: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  cloud: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  ),
  sensor: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  ),
};

export default function ServicesList() {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-[var(--background-secondary)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {serviceIds.map((serviceId, index) => {
          const service = t.servicesPage.detailedServices[serviceId];
          const iconKey = iconMap[serviceId];
          
          return (
          <motion.div
            key={serviceId}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`mb-20 last:mb-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className="glass-card rounded-3xl p-8 lg:p-12 hover:border-[var(--electric-violet)] transition-all duration-500">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Left Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  {/* Icon & Title */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--cyber-cobalt)] via-[var(--electric-violet)] to-[var(--deep-magenta)] flex items-center justify-center text-white">
                      {icons[iconKey]}
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-[var(--foreground)]">
                      {service.title}
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="text-[var(--foreground-muted)] text-lg leading-relaxed mb-6">
                    {service.longDescription}
                  </p>

                  {/* Features Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-4 py-2 text-sm rounded-full bg-[var(--background-tertiary)] border border-[var(--electric-violet)]/40 text-[var(--foreground-muted)] shadow-[0_0_6px_rgba(123,31,162,0.15)] hover:border-[var(--electric-violet)]/60 transition-all duration-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Use Cases */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[var(--foreground)] mb-3 uppercase tracking-wider">
                      {t.servicesPage.useCases}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase) => (
                        <span
                          key={useCase}
                          className="flex items-center space-x-2 text-[var(--foreground-muted)] text-sm"
                        >
                          <svg className="w-4 h-4 text-[var(--neon-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{useCase}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Content - Capabilities */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h4 className="text-sm font-semibold text-[var(--foreground)] mb-6 uppercase tracking-wider">
                    {t.servicesPage.capabilities}
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.capabilities.map((capability, capIndex) => (
                      <motion.div
                        key={capability.title}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: capIndex * 0.1 }}
                        className="p-4 rounded-xl bg-[var(--background-tertiary)] border border-[var(--electric-violet)]/35 hover:border-[var(--electric-violet)] transition-colors duration-300 shadow-[0_0_6px_rgba(123,31,162,0.1)]"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 rounded-lg bg-[var(--electric-violet)]/20 flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-[var(--electric-violet)] font-bold text-sm">
                              {capIndex + 1}
                            </span>
                          </div>
                          <div>
                            <h5 className="text-[var(--foreground)] font-semibold mb-1">
                              {capability.title}
                            </h5>
                            <p className="text-[var(--foreground-muted)] text-sm">
                              {capability.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          );
        })}
      </div>
    </section>
  );
}
