"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { servicesCopy } from "@/lib/pages";
import { processScene } from "@/lib/home";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/sections/SectionHeader";
import MobileServicesSection from "@/components/sections/MobileServicesSection";

const ease = [0.22, 1, 0.36, 1] as const;

function Process() {
  const { language } = useLanguage();
  const c = servicesCopy.process;
  return (
    <section className="relative border-t border-[var(--border-color)] py-24 lg:py-36">
      <div className="container-x">
        <SectionHeader eyebrow={c.eyebrow[language]} title={c.title[language]} highlight={c.highlight[language]} />
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {processScene.steps.map((s, i) => (
            <motion.li
              key={s.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease }}
              className="card-line relative p-7"
            >
              <span className="font-mono text-xs text-[var(--foreground-muted)]">{String(i + 1).padStart(2, "0")}</span>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-[var(--azure)] via-[var(--mint)] to-transparent opacity-60" />
              <h3 className="mt-6 text-xl font-semibold tracking-[-0.02em] text-[var(--foreground)]">{s.title[language]}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--foreground-muted)]">{s.body[language]}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Packages() {
  const { t } = useLanguage();
  const subject = encodeURIComponent(t.contact.form.subjects.project);
  return (
    <section className="relative border-t border-[var(--border-color)] py-24 lg:py-36">
      <div className="container-x">
        <SectionHeader
          eyebrow={t.packages.badge}
          title={t.packages.title}
          highlight={t.packages.titleHighlight}
          description={t.packages.description}
        />
        <div className="grid items-stretch gap-4 lg:grid-cols-3">
          {t.packages.tiers.map((tier, i) => {
            const popular = i === 1;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease }}
                className={`relative flex flex-col rounded-[1.5rem] p-8 ${
                  popular
                    ? "bg-gradient-to-b from-[#0A84FF]/20 to-[#5E5CE6]/5 border border-[#0A84FF]/40 shadow-[0_30px_80px_-30px_rgba(10,132,255,0.6)]"
                    : "card-line"
                }`}
              >
                {popular && (
                  <span className="absolute right-6 top-6 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#05070a]">
                    {t.packages.popular}
                  </span>
                )}
                <span className="font-mono text-xs text-[var(--foreground-muted)]">{tier.forWho}</span>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">{tier.name}</h3>
                <p className="mt-2 text-[var(--foreground-muted)]">{tier.tagline}</p>
                <ul className="mt-8 space-y-3 border-t border-white/[0.07] pt-6">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[15px] text-[var(--foreground-muted-bright)]">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-[var(--mint)]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/contact?subject=${subject}`}
                  className={`${popular ? "btn-primary" : "btn-ghost"} mt-10 w-full`}
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

function OtherExpertise() {
  const { t, language } = useLanguage();
  const c = servicesCopy.other;
  const entries = Object.entries(t.servicesPage.detailedServices).filter(([k]) => k !== "mobile-web-apps");
  return (
    <section className="relative border-t border-[var(--border-color)] py-24 lg:py-36">
      <div className="container-x">
        <SectionHeader eyebrow={c.eyebrow[language]} title={c.title[language]} highlight={c.highlight[language]} description={c.description[language]} />
        <div className="grid border-l border-t border-[var(--border-color)] md:grid-cols-2 lg:grid-cols-3">
          {entries.map(([key, s], i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative border-b border-r border-[var(--border-color)] p-7 lg:p-9 transition-colors hover:bg-white/[0.02]"
            >
              <span className="absolute left-0 top-0 h-px w-0 bg-gradient-to-r from-[var(--azure)] to-[var(--mint)] transition-all duration-500 group-hover:w-full" />
              <h3 className="text-lg font-semibold tracking-[-0.01em] text-[var(--foreground)]">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--foreground-muted)]">{s.shortDescription}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {s.capabilities.slice(0, 4).map((cap) => (
                  <span key={cap.title} className="rounded-md border border-white/[0.07] bg-white/[0.02] px-2 py-1 font-mono text-[11px] text-[var(--foreground-muted-bright)]">
                    {cap.title}
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

export default function ServicesView() {
  const { language, t } = useLanguage();
  const h = servicesCopy.hero;
  return (
    <>
      <PageHero eyebrow={h.eyebrow[language]} title={h.title[language]} highlight={h.highlight[language]} description={h.description[language]}>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href={`/contact?subject=${encodeURIComponent(t.contact.form.subjects.consultation)}`} className="btn-primary">
            {t.hero.ctaConsultation}
          </Link>
          <Link href="/apps" className="btn-ghost">
            {language === "EN" ? "See our apps" : "Uygulamalarımızı görün"}
          </Link>
        </div>
      </PageHero>
      <MobileServicesSection hideAction />
      <Process />
      <Packages />
      <OtherExpertise />
    </>
  );
}
