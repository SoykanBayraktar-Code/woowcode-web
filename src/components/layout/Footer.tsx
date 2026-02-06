"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

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
              Şirinyalı Mah. 1533. Sokak No:49/2
              <br />
              Muratpaşa/Antalya/Türkiye
            </p>
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
