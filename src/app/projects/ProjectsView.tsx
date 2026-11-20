"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { projectsCopy } from "@/lib/pages";
import { liveApps } from "@/lib/apps";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/sections/SectionHeader";
import AppSpotlightCard from "@/components/apps/AppSpotlightCard";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ProjectsView() {
  const { language, t } = useLanguage();
  const c = projectsCopy;
  const apps = liveApps();
  const projects = Object.entries(t.projectsPage.projects);
  const labels = t.projectsPage.labels;

  return (
    <>
      <PageHero eyebrow={c.hero.eyebrow[language]} title={c.hero.title[language]} highlight={c.hero.highlight[language]} description={c.hero.description[language]} />

      {apps.length > 0 && (
        <section className="border-t border-[var(--border-color)] py-24 lg:py-32">
          <div className="container-x">
            <SectionHeader eyebrow={c.apps.eyebrow[language]} title={c.apps.title[language]} />
            <div className="grid gap-5">
              {apps.map((a, i) => (
                <motion.div
                  key={a.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.05, ease }}
                >
                  <AppSpotlightCard app={a} large />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-[var(--border-color)] py-24 lg:py-36">
        <div className="container-x">
          <SectionHeader eyebrow={c.rnd.eyebrow[language]} title={c.rnd.title[language]} highlight={c.rnd.highlight[language]} />
          <div className="space-y-4">
            {projects.map(([key, p], i) => (
              <motion.article
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease }}
                className="card-line grid gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16"
              >
                <div>
                  <div className="flex items-center gap-3 font-mono text-xs text-[var(--foreground-muted)]">
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <span className="h-px w-8 bg-white/15" />
                    <span>{p.category}</span>
                  </div>
                  <h3 className="heading-lg mt-6 text-3xl sm:text-4xl text-[var(--foreground)]">{p.title}</h3>
                  <p className="mt-5 text-[17px] leading-[1.65] text-[var(--foreground-muted-bright)]">{p.description}</p>
                  <div className="mt-8">
                    <span className="font-mono text-[11px] text-[var(--foreground-muted)]">{labels.technologies}</span>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {p.technologies.map((tech) => (
                        <span key={tech} className="rounded-md border border-white/[0.07] bg-white/[0.02] px-2 py-1 font-mono text-[11px] text-[var(--foreground-muted-bright)]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
                    <span className="font-mono text-[11px] text-[var(--mint)]">{labels.challenge}</span>
                    <p className="mt-3 text-[15px] leading-relaxed text-[var(--foreground-muted)]">{p.challenge}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-[var(--foreground-muted)]">{labels.features}</span>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-[15px] text-[var(--foreground-muted-bright)]">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--azure)]" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
