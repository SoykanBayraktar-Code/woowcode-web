"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { site, telLink, mailLink, activeSocials } from "@/lib/site";

export default function Footer() {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();
  const socials = activeSocials();

  const navigation = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.services, href: "/services" },
    { name: t.nav.blog, href: "/blog" },
    { name: t.nav.contact, href: "/contact" },
  ];

  return (
    <footer className="bg-[var(--background-secondary)] border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.svg"
                alt="WOOWCODE - Innovate. Create. Code."
                width={160}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-[var(--foreground-muted)] text-sm leading-relaxed mb-4">
              {t.footer.description}
            </p>
            <p className="text-[var(--foreground-muted)] text-xs leading-relaxed">
              <strong className="text-[var(--foreground)]">{t.footer.companyInfo.title}</strong>
              <br />
              {site.address.line1}
              <br />
              {site.address.line2} / {site.address.country[language]}
            </p>

            {/* Social Links — yalnızca dolu olanlar görünür */}
            {socials.length > 0 && (
              <div className="flex items-center gap-3 mt-4">
                {socials.map(({ key, url }) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={key}
                    className="w-9 h-9 rounded-lg border border-[var(--border-color)] flex items-center justify-center text-[var(--foreground-muted)] hover:text-[var(--neon-blue)] hover:border-[var(--neon-blue)] transition-colors"
                  >
                    <SocialIcon name={key} />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[var(--foreground)] font-semibold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[var(--foreground-muted)] hover:text-[var(--neon-blue)] transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[var(--foreground)] font-semibold mb-4">{t.footer.services}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-[var(--foreground-muted)] hover:text-[var(--neon-blue)] transition-colors text-sm">
                  {t.services.items["autonomous-drones"].title}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[var(--foreground-muted)] hover:text-[var(--neon-blue)] transition-colors text-sm">
                  {t.services.items["industrial-ai"].title}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[var(--foreground-muted)] hover:text-[var(--neon-blue)] transition-colors text-sm">
                  {t.services.items["data-engineering"].title}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[var(--foreground-muted)] hover:text-[var(--neon-blue)] transition-colors text-sm">
                  {t.services.items["digital-twin"].title}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[var(--foreground-muted)] hover:text-[var(--neon-blue)] transition-colors text-sm">
                  {t.services.items["saas-development"].title}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[var(--foreground-muted)] hover:text-[var(--neon-blue)] transition-colors text-sm">
                  {t.services.items["iot-automation"].title}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[var(--foreground)] font-semibold mb-4">{t.footer.contact}</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/contact"
                  className="flex items-center space-x-2 text-[var(--foreground-muted)] hover:text-[var(--neon-blue)] transition-colors text-sm"
                >
                  <svg className="w-4 h-4 text-[var(--neon-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Bize Ulaşın</span>
                </Link>
              </li>
              <li>
                <a
                  href={telLink}
                  className="flex items-center space-x-2 text-[var(--foreground-muted)] hover:text-[var(--neon-blue)] transition-colors text-sm"
                >
                  <svg className="w-4 h-4 text-[var(--neon-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{site.phone.display}</span>
                </a>
              </li>
              <li>
                <a
                  href={mailLink}
                  className="flex items-center space-x-2 text-[var(--foreground-muted)] hover:text-[var(--neon-blue)] transition-colors text-sm"
                >
                  <svg className="w-4 h-4 text-[var(--neon-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{site.email}</span>
                </a>
              </li>
              <li className="flex items-start space-x-2 text-[var(--foreground-muted)] text-sm">
                <svg className="w-4 h-4 text-[var(--neon-blue)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Muratpaşa, Antalya</span>
              </li>
              <li className="flex items-center space-x-2 text-[var(--foreground-muted)] text-sm">
                <svg className="w-4 h-4 text-[var(--neon-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Pzt-Cum: 09:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[var(--border-color)]">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[var(--foreground-muted)] text-sm">
              © {currentYear} WOOWCODE YAZILIM ve TİCARET A.Ş. {t.footer.allRightsReserved}
            </p>
            <div className="flex space-x-6">
              <Link href="/contact" className="text-[var(--foreground-muted)] hover:text-[var(--neon-blue)] text-sm transition-colors">
                {t.nav.contact}
              </Link>
              <Link href="/about" className="text-[var(--foreground-muted)] hover:text-[var(--neon-blue)] text-sm transition-colors">
                {t.nav.about}
              </Link>
            </div>
          </div>
        </div>
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
