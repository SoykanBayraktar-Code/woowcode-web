"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Logo, { TAGLINE } from "@/components/brand/Logo";

function LangToggle({ compact = false, language, onToggle }: { compact?: boolean; language: "TR" | "EN"; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      aria-label={language === "TR" ? "Switch to English" : "Türkçe'ye geç"}
      className={`relative inline-flex items-center rounded-full border border-[var(--border-color)] bg-white/[0.03] p-0.5 font-mono ${compact ? "text-[11px]" : "text-xs"}`}
    >
      {(["TR", "EN"] as const).map((l) => (
        <span
          key={l}
          className={`relative z-10 px-2.5 py-1 rounded-full transition-colors ${
            language === l ? "text-[#05070a]" : "text-[var(--foreground-muted)]"
          }`}
        >
          {language === l && (
            <motion.span
              layoutId={compact ? "lang-pill-m" : "lang-pill"}
              className="absolute inset-0 -z-10 rounded-full bg-white"
              transition={{ type: "spring", stiffness: 500, damping: 35 }}
            />
          )}
          {l}
        </span>
      ))}
    </button>
  );
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLanguage = () => setLanguage(language === "TR" ? "EN" : "TR");

  const navigation = [
    { name: t.nav.apps, href: "/apps" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.services, href: "/services" },
    { name: t.nav.projects, href: "/projects" },
    { name: t.nav.blog, href: "/blog" },
    { name: t.nav.contact, href: "/contact" },
  ];

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 sm:px-4 pt-3">
      <nav
        className={`mx-auto max-w-6xl rounded-2xl border transition-all duration-500 ${
          isMobileMenuOpen
            ? "border-[var(--border-color)] bg-[#0a0d13]/[0.97] backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)]"
            : scrolled
            ? "border-[var(--border-color)] bg-[#0a0d13]/75 backdrop-blur-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)]"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="flex h-14 lg:h-16 items-center justify-between pl-4 pr-2 lg:pl-5 lg:pr-2.5">
          <Link href="/" aria-label="WOOWCODE — Ana sayfa" className="shrink-0">
            <Logo tagline={TAGLINE[language]} />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3.5 py-2 text-sm rounded-full transition-colors ${
                  isActive(item.href)
                    ? "text-[var(--foreground)]"
                    : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                }`}
              >
                {isActive(item.href) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-white/[0.06] border border-white/[0.06]"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <LangToggle language={language} onToggle={toggleLanguage} />
            <Link
              href={`/contact?subject=${encodeURIComponent(t.contact.form.subjects.consultation)}`}
              className="btn-primary !h-10 !px-4 !text-sm"
            >
              {t.hero.ctaConsultation}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <LangToggle compact language={language} onToggle={toggleLanguage} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="h-10 w-10 grid place-items-center rounded-xl border border-[var(--border-color)] bg-white/[0.03]"
              aria-label="Menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-4.5 h-3 relative flex flex-col justify-between" style={{ width: 18 }}>
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  className="w-full h-[1.5px] bg-[var(--foreground)] block origin-center"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-full h-[1.5px] bg-[var(--foreground)] block"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                  className="w-full h-[1.5px] bg-[var(--foreground)] block origin-center"
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="px-3 pb-3 pt-1 border-t border-[var(--border-color)]">
                {[{ name: t.nav.home, href: "/" }, ...navigation].map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-3 py-3 rounded-xl text-[15px] transition-colors ${
                        (item.href === "/" ? pathname === "/" : isActive(item.href))
                          ? "text-[var(--foreground)] bg-white/[0.05]"
                          : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                      }`}
                    >
                      {item.name}
                      <svg className="w-4 h-4 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </motion.div>
                ))}
                <Link
                  href={`/contact?subject=${encodeURIComponent(t.contact.form.subjects.consultation)}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary w-full mt-3"
                >
                  {t.hero.ctaConsultation}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
