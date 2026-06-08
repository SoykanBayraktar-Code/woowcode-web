"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { site, telLink, mailLink } from "@/lib/site";

export default function ContactInfo() {
  const { t } = useLanguage();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="space-y-8"
    >
      {/* Company Info Card */}
      <div className="glass-card rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">
          {t.contact.info.title}
        </h2>

        <div className="space-y-6">
          {/* Company Name */}
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-xl bg-[var(--neon-blue)]/10 flex items-center justify-center flex-shrink-0">
              <svg
                className="w-6 h-6 text-[var(--neon-blue)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-medium text-[var(--foreground-muted)] mb-1">
                {t.contact.info.companyTitle}
              </h3>
              <p className="text-[var(--foreground)] font-semibold">
                {t.contact.info.companyName}
              </p>
            </div>
          </div>

          {/* Phone */}
          <a href={telLink} className="flex items-start space-x-4 group">
            <div className="w-12 h-12 rounded-xl bg-[var(--neon-blue)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--neon-blue)]/20 transition-colors">
              <svg className="w-6 h-6 text-[var(--neon-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-medium text-[var(--foreground-muted)] mb-1">
                {t.contact.info.phone}
              </h3>
              <p className="text-[var(--foreground)] font-semibold group-hover:text-[var(--neon-blue)] transition-colors">
                {site.phone.display}
              </p>
            </div>
          </a>

          {/* Email */}
          <a href={mailLink} className="flex items-start space-x-4 group">
            <div className="w-12 h-12 rounded-xl bg-[var(--electric-violet)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--electric-violet)]/20 transition-colors">
              <svg className="w-6 h-6 text-[var(--electric-violet)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-medium text-[var(--foreground-muted)] mb-1">
                {t.contact.info.email}
              </h3>
              <p className="text-[var(--foreground)] font-semibold group-hover:text-[var(--electric-violet)] transition-colors break-all">
                {site.email}
              </p>
            </div>
          </a>

          {/* Tax Number */}
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-xl bg-[var(--electric-violet)]/10 flex items-center justify-center flex-shrink-0">
              <svg
                className="w-6 h-6 text-[var(--electric-violet)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-medium text-[var(--foreground-muted)] mb-1">
                {t.contact.info.taxNo}
              </h3>
              <p className="text-[var(--foreground)] font-semibold">
                8141094985
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-xl bg-[var(--neon-green)]/10 flex items-center justify-center flex-shrink-0">
              <svg
                className="w-6 h-6 text-[var(--neon-green)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-medium text-[var(--foreground-muted)] mb-1">
                {t.contact.info.address}
              </h3>
              <p className="text-[var(--foreground)] leading-relaxed whitespace-pre-line">
                {t.contact.info.addressLine}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Response Time */}
        <div className="glass-card rounded-xl p-6 text-center">
          <div className="w-14 h-14 rounded-full bg-[var(--neon-blue)]/10 flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-7 h-7 text-[var(--neon-blue)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
            {t.contact.info.quickResponse}
          </h3>
          <p className="text-sm text-[var(--foreground-muted)]">
            {t.contact.info.quickResponseDesc}
          </p>
        </div>

        {/* Working Hours */}
        <div className="glass-card rounded-xl p-6 text-center">
          <div className="w-14 h-14 rounded-full bg-[var(--electric-violet)]/10 flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-7 h-7 text-[var(--electric-violet)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
            {t.contact.info.workingHours}
          </h3>
          <p className="text-sm text-[var(--foreground-muted)]">
            {t.contact.info.workingHoursDesc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
