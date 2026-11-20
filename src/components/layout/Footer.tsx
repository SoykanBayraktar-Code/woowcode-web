"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { site, telLink, mailLink, waLink, activeSocials } from "@/lib/site";
import Logo, { TAGLINE } from "@/components/brand/Logo";
import { mobileServices } from "@/lib/home";

export default function Footer() {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();
  const socials = activeSocials();
  const cta = t.servicesPage.cta;

  const navigation = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.apps, href: "/apps" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.services, href: "/services" },
    { name: t.nav.projects, href: "/projects" },
    { name: t.nav.blog, href: "/blog" },
    { name: t.nav.contact, href: "/contact" },
  ];

  const footerServices = mobileServices.items.slice(0, 6);

  const linkCls = "text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors";

  return (
    <footer className="relative overflow-hidden border-t border-[var(--border-color)] bg-[var(--background)]">
      {/* CTA band */}
      <div className="container-x pt-20 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[#0b0e14] px-6 py-14 sm:px-12 lg:px-16 lg:py-20"
        >
          <div className="absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
          <div
            className="absolute -top-40 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full blur-[100px] opacity-50"
            style={{ background: "radial-gradient(closest-side, #0A84FF, transparent)" }}
            aria-hidden="true"
          />
          <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div className="max-w-2xl">
              <span className="eyebrow mb-5">{t.hero.ctaWhatsApp}</span>
              <h2 className="heading-lg text-3xl sm:text-4xl lg:text-5xl mt-5 text-[var(--foreground)]">
                {cta.title} <span className="text-gradient">{cta.titleHighlight}</span>
              </h2>
              <p className="mt-5 text-[var(--foreground-muted)] text-base lg:text-lg leading-relaxed">
                {cta.description}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link href="/contact" className="btn-primary">
                {cta.button}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a href={waLink(language)} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <span className="h-2 w-2 rounded-full bg-[#25D366] shadow-[0_0_10px_#25D366]" />
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Columns */}
      <div className="container-x pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10">
          <div className="col-span-2 md:col-span-5">
            <Link href="/" aria-label="WOOWCODE" className="inline-block">
              <Logo tagline={TAGLINE[language]} />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[var(--foreground-muted)]">
              {t.footer.description}
            </p>
            <p className="mt-5 text-xs leading-relaxed text-[var(--foreground-muted)]/80">
              {t.footer.companyInfo.title}
              <br />
              {site.address.line1}
              <br />
              {site.address.line2} / {site.address.country[language]}
            </p>
            {socials.length > 0 && (
              <div className="mt-6 flex items-center gap-2">
                {socials.map(({ key, url }) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={key}
                    className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border-color)] text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:border-[var(--border-color-bright)] transition-colors"
                  >
                    <SocialIcon name={key} />
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="md:col-span-2">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--foreground-muted)]/70 mb-4">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkCls}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--foreground-muted)]/70 mb-4">
              {t.footer.services}
            </h3>
            <ul className="space-y-2.5">
              {footerServices.map((item) => (
                <li key={item.title.EN}>
                  <Link href="/services" className={linkCls}>{item.title[language]}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--foreground-muted)]/70 mb-4">
              {t.footer.contact}
            </h3>
            <ul className="space-y-2.5">
              <li><a href={mailLink} className={linkCls}>{site.email}</a></li>
              <li><a href={telLink} className={linkCls}>{site.phone.display}</a></li>
              <li className="text-sm text-[var(--foreground-muted)]">Muratpaşa, Antalya</li>
              <li className="text-sm text-[var(--foreground-muted)]">
                {language === "EN" ? "Mon–Fri 09:00–18:00" : "Pzt–Cum 09:00–18:00"}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse gap-4 border-t border-[var(--border-color)] pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-[var(--foreground-muted)]">
            © {currentYear} {site.legalName}. {t.footer.allRightsReserved}
          </p>
          <div className="flex items-center gap-2 text-xs text-[var(--foreground-muted)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--mint)] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--mint)]" />
            </span>
            {language === "EN" ? "Accepting new projects" : "Yeni projelere açığız"}
          </div>
        </div>
      </div>

      {/* Oversized wordmark */}
      <div aria-hidden="true" className="pointer-events-none select-none -mb-[0.22em] text-center font-semibold leading-none tracking-[-0.06em] text-[22vw]">
        <span className="bg-gradient-to-b from-white/[0.07] to-transparent bg-clip-text text-transparent">woowcode</span>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  const cls = "w-4 h-4";
  switch (name) {
    case "linkedin":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      );
    case "instagram":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      );
    case "github":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      );
    case "x":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    default:
      return null;
  }
}
