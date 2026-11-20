"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { apps } from "@/lib/apps";
import { useLanguage } from "@/context/LanguageContext";
import AppSpotlightCard from "@/components/apps/AppSpotlightCard";

export default function AppsIndex() {
  const { language, t } = useLanguage();
  const en = language === "EN";

  return (
    <div className="relative overflow-hidden pt-36 pb-24 lg:pt-44">
      <div className="absolute inset-0 bg-grid" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-0 h-[30rem] w-[60rem] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-50 blur-[120px]"
        style={{ background: "radial-gradient(closest-side, rgba(10, 132, 255,0.5), transparent)" }}
        aria-hidden="true"
      />

      <div className="relative container-x">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="eyebrow">{en ? "Our apps" : "Uygulamalarımız"}</span>
          <h1 className="heading-xl mt-5 text-5xl sm:text-6xl lg:text-7xl text-[var(--foreground)]">
            {en ? "Apps we build, ship " : "Kendi yaptığımız, yayınladığımız "}
            <span className="text-gradient">{en ? "and care for." : "ve yaşattığımız uygulamalar."}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--foreground-muted)]">
            {en
              ? "Our team designs, codes and ships every app here — from the first sketch to the App Store. The same process we run for our clients."
              : "Buradaki her uygulamayı ilk eskizden App Store'a kadar kendi ekibimiz tasarlıyor, kodluyor ve yayınlıyor. Müşterilerimiz için işlettiğimiz sürecin aynısı."}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5">
          {apps.map((app, i) => (
            <motion.div
              key={app.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <AppSpotlightCard app={app} large />
            </motion.div>
          ))}

          {/* Your app here */}
          <Link
            href={`/contact?subject=${encodeURIComponent(t.contact.form.subjects.consultation)}`}
            className="group flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-dashed border-white/15 p-7 sm:flex-row sm:items-center sm:p-9 transition-colors hover:border-white/30 hover:bg-white/[0.02]"
          >
            <div className="flex items-center gap-4">
              <span className="grid h-16 w-16 place-items-center rounded-[22%] border border-dashed border-white/25 text-2xl text-[var(--foreground-muted)]">+</span>
              <div>
                <p className="text-xl font-semibold tracking-[-0.02em] text-[var(--foreground)]">
                  {en ? "Your app could be next." : "Sıradaki uygulama sizinki olabilir."}
                </p>
                <p className="mt-1 text-[var(--foreground-muted)]">
                  {en ? "Tell us the idea; we'll take it to the App Store." : "Fikrinizi anlatın; App Store'a biz taşıyalım."}
                </p>
              </div>
            </div>
            <span className="btn-primary">
              {t.hero.ctaConsultation}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
