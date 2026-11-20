"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { apps, getApp, screenshotSrcs, APPLE_EULA_URL } from "@/lib/apps";
import { site, mailLink } from "@/lib/site";
import { useLanguage } from "@/context/LanguageContext";
import AppIcon from "@/components/apps/AppIcon";
import AppStoreButton from "@/components/apps/AppStoreButton";
import DeviceFrame from "@/components/apps/DeviceFrame";
import FeatureIcon from "@/components/apps/FeatureIcon";
import AppSpotlightCard from "@/components/apps/AppSpotlightCard";
import { Manifesto, Showcases, Milestones, ExtrasAndPlans } from "./AppStory";

const ease = [0.22, 1, 0.36, 1] as const;

export default function AppDetail({ slug }: { slug: string }) {
  const app = getApp(slug)!;
  const { language } = useLanguage();
  const reduce = useReducedMotion();
  const en = language === "EN";
  const shots = screenshotSrcs(app);
  const others = apps.filter((a) => a.slug !== app.slug);

  return (
    <div className="relative overflow-hidden" style={{ ["--glow" as string]: app.accent.glow }}>
      {/* ---------- HERO ---------- */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 noise">
        <div
          className="absolute inset-0"
          style={{ background: `radial-gradient(80% 60% at 70% 10%, ${app.accent.from} 0%, transparent 70%)` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-grid opacity-60" aria-hidden="true" />

        <div className="relative container-x grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              aria-label="breadcrumb"
              className="mb-8 flex items-center gap-2 text-sm text-[var(--foreground-muted)]"
            >
              <Link href="/apps" className="hover:text-[var(--foreground)] transition-colors">
                {en ? "Apps" : "Uygulamalar"}
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-[var(--foreground)]">{app.name}</span>
            </motion.nav>

            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
            >
              <AppIcon app={app} size={104} className="shadow-[0_20px_60px_-15px_var(--glow)]" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="heading-xl mt-8 text-6xl sm:text-7xl lg:text-8xl text-white"
            >
              {app.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease }}
              className="mt-4 text-2xl sm:text-3xl font-medium tracking-[-0.03em] text-white/85"
            >
              {app.tagline[language]}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.26, ease }}
              className="mt-6 max-w-xl text-[17px] leading-[1.6] text-[var(--foreground-muted)]"
            >
              {app.description[language]}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.34, ease }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <AppStoreButton app={app} size="lg" />
              {app.links?.website ? (
                <a href={app.links.website} target="_blank" rel="noopener noreferrer" className="btn-ghost !h-14">
                  {en ? "Website" : "Web sitesi"}
                  <svg className="h-4 w-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </a>
              ) : (
                <a href="#support" className="btn-ghost !h-14">
                  {en ? "Support" : "Destek"}
                </a>
              )}
            </motion.div>

            <div className="mt-8 flex flex-wrap gap-2 font-mono text-xs text-[var(--foreground-muted)]">
              {[...app.platforms, app.category[language], app.status === "live" ? (en ? "Live" : "Yayında") : en ? "Coming soon" : "Yakında"].map(
                (c) => (
                  <span key={c} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
                    {c}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Phones */}
          <div className="relative mx-auto h-[450px] w-full max-w-[460px] sm:h-[600px]">
            <div
              className="absolute left-1/2 top-1/2 h-[70%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]"
              style={{ background: app.accent.glow }}
              aria-hidden="true"
            />
            {shots[1] && (
              <motion.div
                initial={reduce ? false : { opacity: 0, x: 40, rotate: 8 }}
                animate={{ opacity: 1, x: 0, rotate: 6 }}
                transition={{ duration: 1, delay: 0.35, ease }}
                className="absolute right-0 top-10 w-[46%] opacity-90"
              >
                <DeviceFrame app={app} src={shots[1]} />
              </motion.div>
            )}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease }}
              className={`absolute top-0 w-[56%] ${shots[1] ? "left-[6%]" : "left-1/2 -translate-x-1/2"}`}
            >
              <motion.div animate={reduce ? undefined : { y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
                <DeviceFrame app={app} src={shots[0]} priority />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Manifesto app={app} />
      <Showcases app={app} />
      <Milestones app={app} />

      {/* ---------- SCREENSHOTS ---------- */}
      {shots.length > 2 && (
        <section className="border-t border-[var(--border-color)] py-24 lg:py-32">
          <div className="container-x">
            <span className="eyebrow">{en ? "Screens" : "Ekranlar"}</span>
            <h2 className="heading-lg mt-4 text-3xl sm:text-4xl lg:text-5xl text-[var(--foreground)]">
              {en ? "A closer look" : "Yakından bakın"}
            </h2>
          </div>
          <div className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-6 sm:px-[max(1.5rem,calc((100vw-80rem)/2+2rem))] [scrollbar-width:none]">
            {shots.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
                className="w-[62vw] max-w-[280px] shrink-0 snap-center"
              >
                <DeviceFrame app={app} src={s} alt={`${app.name} — ${i + 1}`} />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ---------- FEATURES ---------- */}
      {app.features.length > 0 && (
        <section className="border-t border-[var(--border-color)] py-24 lg:py-32">
          <div className="container-x">
            <span className="eyebrow">{en ? "Features" : "Özellikler"}</span>
            <h2 className="heading-lg mt-4 max-w-2xl text-3xl sm:text-4xl lg:text-5xl text-[var(--foreground)]">
              {en ? "Small app. Thoughtful details." : "Küçük uygulama. Özenli ayrıntılar."}
            </h2>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {app.features.map((f, i) => (
                <motion.div
                  key={f.title.EN}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.07, ease }}
                  className="card-line p-7"
                >
                  <span
                    className="grid h-11 w-11 place-items-center rounded-xl text-white"
                    style={{ background: `linear-gradient(140deg, ${app.accent.from}, ${app.accent.to})` }}
                  >
                    <FeatureIcon name={f.icon} />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold tracking-[-0.01em] text-[var(--foreground)]">{f.title[language]}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[var(--foreground-muted)]">{f.body[language]}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <ExtrasAndPlans app={app} />

      {/* ---------- PRIVACY LABEL + SUPPORT ---------- */}
      <section id="support" className="scroll-mt-24 border-t border-[var(--border-color)] py-24 lg:py-32">
        <div className="container-x grid gap-5 lg:grid-cols-2">
          {app.privacy.length > 0 && (
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--mint)]/15 text-[var(--mint)]">
                  <FeatureIcon name="shield" />
                </span>
                <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[var(--foreground)]">
                  {en ? "Privacy at a glance" : "Gizlilik özeti"}
                </h2>
              </div>
              <ul className="mt-7 divide-y divide-white/[0.06] border-y border-white/[0.06]">
                {app.privacy.map((p) => (
                  <li key={p.EN} className="flex items-center gap-3 py-4 text-[var(--foreground-muted-bright)]">
                    <svg className="h-5 w-5 shrink-0 text-[var(--mint)]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clipRule="evenodd" />
                    </svg>
                    {p[language]}
                  </li>
                ))}
              </ul>
              {app.hasPolicy && (
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  <Link href={`/apps/${app.slug}/gizlilik`} lang="tr" className="text-[var(--azure-soft)] hover:underline underline-offset-4">
                    Gizlilik Politikası
                  </Link>
                  <Link href={`/apps/${app.slug}/privacy`} lang="en" className="text-[var(--azure-soft)] hover:underline underline-offset-4">
                    Privacy Policy
                  </Link>
                </div>
              )}
              {!app.hasPolicy && app.links?.privacy && (
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  <a href={app.links.privacy} target="_blank" rel="noopener noreferrer" className="text-[var(--azure-soft)] hover:underline underline-offset-4">
                    {en ? "Privacy Policy" : "Gizlilik Politikası"}
                  </a>
                </div>
              )}
            </div>
          )}

          <div className={`rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-7 sm:p-9 ${app.privacy.length ? "" : "lg:col-span-2"}`}>
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[var(--foreground)]">
              {en ? "Support" : "Destek"}
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--foreground-muted)]">
              {en ? "Questions or a problem with the app? Write to " : "Uygulamayla ilgili bir sorunuz ya da sorununuz mu var? "}
              <a href={app.links?.supportEmail ? `mailto:${app.links.supportEmail}` : mailLink} className="text-[var(--azure-soft)] hover:underline underline-offset-4">
                {app.links?.supportEmail ?? site.email}
              </a>
              {en ? ". We usually reply within one business day." : " adresine yazın. Genellikle bir iş günü içinde yanıt veririz."}
            </p>
            <p className="mt-6 text-sm leading-relaxed text-[var(--foreground-muted)]">
              <span className="text-[var(--foreground)]">{site.legalName}</span>
              <br />
              {site.address.line1}, {site.address.line2} / {site.address.country[language]}
              <br />
              {site.phone.display}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {app.links?.terms ? (
                <a href={app.links.terms} target="_blank" rel="noopener noreferrer" className="text-[var(--azure-soft)] hover:underline underline-offset-4">
                  {en ? "Terms of Use" : "Kullanım Koşulları"}
                </a>
              ) : (
                <a href={APPLE_EULA_URL} rel="noopener" className="text-[var(--azure-soft)] hover:underline underline-offset-4">
                  {en ? "Terms of Use (Apple standard EULA)" : "Kullanım Koşulları (Apple standart sözleşmesi)"}
                </a>
              )}
            </div>
            {app.notice && (
              <p className="mt-6 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-sm leading-relaxed text-[var(--foreground-muted)]">
                {app.notice[language]}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ---------- OTHER APPS ---------- */}
      {others.length > 0 && (
        <section className="border-t border-[var(--border-color)] py-24 lg:py-32">
          <div className="container-x">
            <span className="eyebrow">{en ? "More from WOOWCODE" : "Diğer uygulamalarımız"}</span>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {others.map((o) => (
                <AppSpotlightCard key={o.slug} app={o} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
