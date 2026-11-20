"use client";

import { useLanguage } from "@/context/LanguageContext";
import { waLink } from "@/lib/site";
import { contactCopy } from "@/lib/pages";
import PageHero from "@/components/sections/PageHero";

export default function ContactHero() {
  const { language, t } = useLanguage();
  const h = contactCopy.hero;
  return (
    <PageHero eyebrow={h.eyebrow[language]} title={h.title[language]} highlight={h.highlight[language]} description={h.description[language]}>
      <a href={waLink(language)} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-10">
        <span className="h-2 w-2 rounded-full bg-[#30D158] shadow-[0_0_10px_#30D158]" />
        {t.hero.ctaWhatsApp} · WhatsApp
      </a>
    </PageHero>
  );
}
