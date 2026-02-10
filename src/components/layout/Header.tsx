"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "TR" ? "EN" : "TR");
  };

  const navigation = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.services, href: "/services" },
    { name: t.nav.projects, href: "/projects" },
    { name: t.nav.blog, href: "/blog" },
    { name: t.nav.contact, href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="glass-card border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center"
              >
                <Image
                  src="/logo.svg"
                  alt="WOOWCODE - Innovate. Create. Code."
                  width={280}
                  height={80}
                  className="h-14 lg:h-16 w-auto"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors duration-300 group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--neon-blue)] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
              
              {/* Language Selector */}
              <motion.button
                onClick={toggleLanguage}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-1 px-3 py-1.5 rounded-lg border border-[var(--neon-blue)]/40 bg-[var(--background-secondary)] hover:border-[var(--neon-blue)] transition-all duration-300 shadow-[0_0_8px_rgba(13,71,161,0.1)]"
              >
                <svg className="w-4 h-4 text-[var(--foreground-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span className="text-sm font-medium">
                  <span className={language === "TR" ? "text-[var(--neon-blue)]" : "text-[var(--foreground-muted)]"}>TR</span>
                  <span className="text-[var(--foreground-muted)] mx-1">/</span>
                  <span className={language === "EN" ? "text-[var(--neon-blue)]" : "text-[var(--foreground-muted)]"}>EN</span>
                </span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-3 lg:hidden">
              {/* Mobile Language Selector */}
              <motion.button
                onClick={toggleLanguage}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-2 py-1 rounded-md border border-[var(--neon-blue)]/40 bg-[var(--background-secondary)] shadow-[0_0_6px_rgba(13,71,161,0.1)]"
              >
                <span className="text-xs font-medium">
                  <span className={language === "TR" ? "text-[var(--neon-blue)]" : "text-[var(--foreground-muted)]"}>TR</span>
                  <span className="text-[var(--foreground-muted)] mx-0.5">/</span>
                  <span className={language === "EN" ? "text-[var(--neon-blue)]" : "text-[var(--foreground-muted)]"}>EN</span>
                </span>
              </motion.button>
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2"
                aria-label="Menu"
              >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className="w-full h-0.5 bg-[var(--foreground)] block origin-center transition-all"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-full h-0.5 bg-[var(--foreground)] block"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="w-full h-0.5 bg-[var(--foreground)] block origin-center transition-all"
                />
              </div>
            </button>
          </div>
        </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden glass-card border-t border-[var(--border-color)]"
            >
              <div className="px-4 py-4 space-y-3">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 text-[var(--foreground-muted)] hover:text-[var(--neon-blue)] transition-colors"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
