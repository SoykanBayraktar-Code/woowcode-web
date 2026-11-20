import Link from "next/link";
import type { ReactNode } from "react";

// Apple'ın standart son kullanıcı lisans sözleşmesi (uygulamadaki Kullanım Koşulları bağlantısı).
export const STARLIT_TERMS_URL = "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";

export interface StarlitNavItem {
  href: string;
  label: string;
  lang?: "tr" | "en";
  external?: boolean;
}

interface StarlitShellProps {
  lang: "tr" | "en";
  nav: StarlitNavItem[];
  children: ReactNode;
}

// Starlit sayfaları için ortak okuma düzeni: dar sütun, sitenin koyu teması, prose tipografisi.
export const starlitProse = `prose prose-invert max-w-none
  prose-headings:text-[var(--foreground)] prose-headings:font-bold
  prose-h1:text-3xl sm:prose-h1:text-4xl prose-h1:mb-6
  prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-3 prose-h2:border-b prose-h2:border-[var(--border-color)] prose-h2:pb-2
  prose-h3:text-lg prose-h3:mt-7 prose-h3:mb-2
  prose-p:text-[var(--foreground-muted-bright)] prose-p:leading-relaxed
  prose-li:text-[var(--foreground-muted-bright)] prose-li:my-1
  prose-strong:text-[var(--foreground)] prose-strong:font-semibold
  prose-a:text-[#8ab4ff] prose-a:underline-offset-2
  prose-code:text-[var(--foreground)] prose-code:bg-[var(--background-tertiary)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none`;

export default function StarlitShell({ lang, nav, children }: StarlitShellProps) {
  return (
    <div lang={lang} className="min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <nav
          aria-label={lang === "tr" ? "Starlit sayfaları" : "Starlit pages"}
          className="flex flex-wrap gap-x-5 gap-y-1 text-sm mb-8"
        >
          {nav.map((item) =>
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                lang={item.lang}
                rel="noopener"
                className="py-2 text-[#8ab4ff] hover:underline underline-offset-2"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                lang={item.lang}
                hrefLang={item.lang}
                className="py-2 text-[#8ab4ff] hover:underline underline-offset-2"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
        {children}
      </div>
    </div>
  );
}
