"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { aboutCopy } from "@/lib/pages";
import { liveApps } from "@/lib/apps";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/sections/SectionHeader";
import AppSpotlightCard from "@/components/apps/AppSpotlightCard";

const ease = [0.22, 1, 0.36, 1] as const;
const reveal = (i = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay: i * 0.07, ease },
});

export default function AboutView() {
  const { language, t } = useLanguage();
  const c = aboutCopy;
  const apps = liveApps();

  return (
    <>
      <PageHero eyebrow={c.hero.eyebrow[language]} title={c.hero.title[language]} highlight={c.hero.highlight[language]} description={c.hero.description[language]} />

      {/* Story + mission / vision */}
      <section className="border-t border-[var(--border-color)] py-24 lg:py-36">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <motion.div {...reveal()}>
            <span className="eyebrow">{c.story.eyebrow[language]}</span>
            <h2 className="heading-lg mt-4 text-3xl sm:text-4xl lg:text-5xl text-[var(--foreground)]">{c.story.title[language]}</h2>
          </motion.div>
          <div className="space-y-6">
            {c.story.paragraphs.map((p, i) => (
              <motion.p key={i} {...reveal(i)} className="text-lg leading-[1.7] text-[var(--foreground-muted-bright)]">
                {p[language]}
              </motion.p>
            ))}
            <div className="grid gap-4 pt-6 sm:grid-cols-2">
              {[c.mission, c.vision].map((m, i) => (
                <motion.div key={m.title.EN} {...reveal(i)} className="card-line p-7">
                  <span className="font-mono text-xs text-[var(--mint)]">{m.title[language]}</span>
                  <p className="mt-4 text-[17px] leading-relaxed text-[var(--foreground)]">{m.body[language]}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proof: our apps */}
      {apps.length > 0 && (
        <section className="border-t border-[var(--border-color)] py-24 lg:py-36">
          <div className="container-x">
            <SectionHeader
              eyebrow={language === "EN" ? "Proof" : "Kanıt"}
              title={language === "EN" ? "Our apps are" : "Uygulamalarımız"}
              highlight={language === "EN" ? "on the App Store." : "App Store'da."}
            />
            <div className="grid gap-5 md:grid-cols-2">
              {apps.map((a) => (
                <AppSpotlightCard key={a.slug} app={a} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Expertise */}
      <section className="border-t border-[var(--border-color)] py-24 lg:py-36">
        <div className="container-x">
          <SectionHeader eyebrow={c.expertise.eyebrow[language]} title={c.expertise.title[language]} highlight={c.expertise.highlight[language]} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.expertise.items.map((e, i) => (
              <motion.div key={e.title.EN} {...reveal(i)} className="card-line p-7">
                <span className="font-mono text-xs text-[var(--foreground-muted)]/60">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 text-xl font-semibold tracking-[-0.02em] text-[var(--foreground)]">{e.title[language]}</h3>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {e.skills.map((s) => (
                    <span key={s} className="rounded-md border border-white/[0.07] bg-white/[0.02] px-2 py-1 font-mono text-[11px] text-[var(--foreground-muted-bright)]">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-[var(--border-color)] py-24 lg:py-36">
        <div className="container-x">
          <SectionHeader eyebrow={c.values.eyebrow[language]} title={t.about.values.title} description={t.about.values.subtitle} />
          <div className="grid border-l border-t border-[var(--border-color)] md:grid-cols-2 lg:grid-cols-3">
            {t.about.values.items.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group relative border-b border-r border-[var(--border-color)] p-7 lg:p-10 transition-colors hover:bg-white/[0.02]"
              >
                <span className="absolute left-0 top-0 h-px w-0 bg-gradient-to-r from-[var(--azure)] to-[var(--mint)] transition-all duration-500 group-hover:w-full" />
                <span className="font-mono text-xs text-[var(--foreground-muted)]/60">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 text-lg font-semibold text-[var(--foreground)]">{v.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[var(--foreground-muted)]">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-t border-[var(--border-color)] py-24 lg:py-32">
        <motion.figure {...reveal()} className="container-x max-w-4xl text-center">
          <blockquote className="heading-lg text-2xl sm:text-3xl lg:text-4xl text-[var(--foreground)]">
            <span className="text-gradient">&ldquo;</span>
            {t.about.team.philosophy.quote}
            <span className="text-gradient">&rdquo;</span>
          </blockquote>
          <figcaption className="mt-6 font-mono text-xs tracking-[0.12em] text-[var(--foreground-muted)]">{t.about.team.philosophy.author}</figcaption>
        </motion.figure>
      </section>
    </>
  );
}
