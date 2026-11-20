"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "@/components/sections/SectionHeader";

// Her madde için ikon (translations'taki items sırasıyla eşleşir)
const icons: React.ReactNode[] = [
  // Uçtan uca
  <svg key="0" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  // Yerinde & Türkçe destek
  <svg key="1" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  // 24 saat yanıt
  <svg key="2" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  // Modern teknoloji
  <svg key="3" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>,
  // Şeffaf fiyat
  <svg key="4" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 7h6m-6 4h6m-6 4h4M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" /></svg>,
  // Kod sizin
  <svg key="5" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
];

export default function WhyUsSection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 lg:py-36 border-t border-[var(--border-color)]">
      <div className="container-x">
        <SectionHeader
          eyebrow={t.whyUs.badge}
          title={t.whyUs.title}
          highlight={t.whyUs.titleHighlight}
          description={t.whyUs.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[var(--border-color)]">
          {t.whyUs.items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              className="group relative border-b border-r border-[var(--border-color)] p-7 lg:p-10 transition-colors hover:bg-white/[0.02]"
            >
              <span className="absolute left-0 top-0 h-px w-0 bg-gradient-to-r from-[var(--azure)] to-[var(--mint)] transition-all duration-500 group-hover:w-full" />
              <div className="text-[var(--mint)]">{icons[index]}</div>
              <h3 className="mt-6 text-lg font-semibold tracking-[-0.01em] text-[var(--foreground)]">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--foreground-muted)]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
