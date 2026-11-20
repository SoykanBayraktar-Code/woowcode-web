"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { mobileServices } from "@/lib/home";
import SectionHeader from "@/components/sections/SectionHeader";

const icons: Record<string, string> = {
  phone: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  widget: "M4 5a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm9 0a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1h-5a1 1 0 01-1-1V5zM4 14a1 1 0 011-1h14a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1v-5z",
  layers: "M12 3l9 5-9 5-9-5 9-5zm-9 9l9 5 9-5M3 16l9 5 9-5",
  pen: "M15.232 5.232l3.536 3.536M9 13l6.5-6.5a2.5 2.5 0 013.536 3.536L12.5 16.5 8 18l1-5z M4 20h16",
  sparkles: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
  server: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01",
  rocket: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.84 2.58m0 0a6 6 0 01-5.84-7.38m5.84 7.38v.01M9.63 8.41a6 6 0 00-7.38 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.69 3.24a15.09 15.09 0 01-2.448-2.448",
};

export default function MobileServicesSection({ hideAction = false }: { hideAction?: boolean }) {
  const { language } = useLanguage();
  const s = mobileServices;

  return (
    <section id="services" className="relative border-t border-[var(--border-color)] py-24 lg:py-36">
      <div className="container-x">
        <SectionHeader
          eyebrow={s.eyebrow[language]}
          title={s.title[language]}
          highlight={s.highlight[language]}
          description={s.description[language]}
          action={
            hideAction ? undefined : <Link href="/services" className="btn-ghost self-start lg:self-auto">
              {language === "EN" ? "All services" : "Tüm hizmetler"}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          }
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {s.items.map((item, i) => (
            <motion.div
              key={item.title.EN}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className={`group card-line overflow-hidden p-7 lg:p-8 flex flex-col ${item.big ? "lg:col-span-2" : ""} ${i === s.items.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              {item.big && (
                <div
                  className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-60"
                  style={{ background: "radial-gradient(closest-side, rgba(10,132,255,0.55), transparent)" }}
                  aria-hidden="true"
                />
              )}
              <div className="relative flex items-start justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-[12px] bg-gradient-to-br from-[#0A84FF] to-[#5E5CE6] text-white shadow-[0_8px_24px_-8px_rgba(10,132,255,0.7)]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d={icons[item.icon]} />
                  </svg>
                </span>
                <span className="font-mono text-xs text-[var(--foreground-muted)]/50">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className={`relative mt-8 font-semibold tracking-[-0.02em] text-[var(--foreground)] ${item.big ? "text-2xl lg:text-[1.75rem]" : "text-xl"}`}>
                {item.title[language]}
              </h3>
              <p className={`relative mt-3 leading-relaxed text-[var(--foreground-muted)] ${item.big ? "max-w-xl text-[17px]" : "text-[15px]"}`}>
                {item.body[language]}
              </p>
              <div className="relative mt-auto flex flex-wrap gap-1.5 pt-6">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-md border border-white/[0.07] bg-white/[0.02] px-2 py-1 font-mono text-[11px] text-[var(--foreground-muted-bright)]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
