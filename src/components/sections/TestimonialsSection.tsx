"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { testimonials } from "@/lib/testimonials";
import SectionHeader from "@/components/sections/SectionHeader";

export default function TestimonialsSection() {
  const { t, language } = useLanguage();

  // Gerçek yorum yoksa bölüm hiç render edilmez (boş-güvenli).
  if (testimonials.length === 0) return null;

  const initials = (name: string) =>
    name
      .split(" ")
      .map((w) => w[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();

  return (
    <section className="relative py-24 lg:py-36 border-t border-[var(--border-color)]">
      <div className="container-x">
        <SectionHeader
          eyebrow={t.testimonials.badge}
          title={t.testimonials.title}
          highlight={t.testimonials.titleHighlight}
          description={t.testimonials.description}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((item, index) => (
            <motion.figure
              key={item.name + index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="card-line p-7 lg:p-8 flex flex-col"
            >
              <blockquote className="flex-1 text-[var(--foreground-muted-bright)] leading-relaxed">
                <span className="text-gradient text-3xl leading-none font-serif">&ldquo;</span>
                {language === "EN" && item.quoteEN ? item.quoteEN : item.quoteTR}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3 border-t border-[var(--border-color)] pt-5">
                {item.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full object-cover" />
                ) : (
                  <div className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] font-mono text-xs text-[var(--foreground)]">
                    {initials(item.name)}
                  </div>
                )}
                <div>
                  <div className="text-sm font-medium text-[var(--foreground)]">{item.name}</div>
                  <div className="text-xs text-[var(--foreground-muted)]">{item.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
