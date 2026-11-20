"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { liveApps } from "@/lib/apps";
import { appsShelf } from "@/lib/home";
import SectionHeader from "@/components/sections/SectionHeader";
import AppSpotlightCard from "@/components/apps/AppSpotlightCard";

export default function LiveAppsSection() {
  const { language } = useLanguage();
  const apps = liveApps();
  if (!apps.length) return null;

  return (
    <section id="apps" className="relative py-24 lg:py-36">
      <div className="container-x">
        <SectionHeader
          eyebrow={appsShelf.eyebrow[language]}
          title={appsShelf.title[language]}
          highlight={appsShelf.highlight[language]}
          description={appsShelf.description[language]}
          action={
            <Link href="/apps" className="btn-ghost self-start lg:self-auto">
              {appsShelf.all[language]}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          }
        />
        <div className="grid gap-5">
          {apps.map((app, i) => (
            <motion.div
              key={app.slug}
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <AppSpotlightCard app={app} large />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
