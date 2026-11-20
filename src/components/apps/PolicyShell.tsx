import Link from "next/link";
import type { ReactNode } from "react";
import type { AppEntry } from "@/lib/apps";
import AppIcon from "@/components/apps/AppIcon";

export interface PolicyNavItem {
  href: string;
  label: string;
  lang?: "tr" | "en";
  external?: boolean;
}

// Uygulama yasal sayfaları için ortak okuma düzeni: dar sütun, koyu tema, prose tipografisi.
export const policyProse = `prose prose-invert max-w-none
  prose-headings:text-[var(--foreground)] prose-headings:font-semibold prose-headings:tracking-[-0.02em]
  prose-h1:text-4xl sm:prose-h1:text-5xl prose-h1:mb-8
  prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-3 prose-h2:border-b prose-h2:border-[var(--border-color)] prose-h2:pb-3
  prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-2
  prose-p:text-[var(--foreground-muted-bright)] prose-p:leading-relaxed prose-p:text-[17px]
  prose-li:text-[var(--foreground-muted-bright)] prose-li:my-1 prose-li:text-[17px]
  prose-strong:text-[var(--foreground)] prose-strong:font-semibold
  prose-a:text-[var(--azure-soft)] prose-a:underline-offset-2
  prose-code:text-[var(--foreground)] prose-code:bg-[var(--background-tertiary)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
  [&_.policy-meta]:text-[var(--foreground-muted)] [&_.policy-meta]:text-sm`;

export default function PolicyShell({
  app,
  lang,
  nav,
  children,
}: {
  app: AppEntry;
  lang: "tr" | "en";
  nav: PolicyNavItem[];
  children: ReactNode;
}) {
  const linkCls =
    "rounded-full border border-[var(--border-color)] px-3.5 py-1.5 text-[var(--foreground-muted-bright)] hover:border-[var(--border-color-bright)] hover:text-[var(--foreground)] transition-colors";
  return (
    <div lang={lang} className="min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Link href={`/apps/${app.slug}`} className="inline-flex items-center gap-3 group">
          <AppIcon app={app} size={44} />
          <span className="text-lg font-semibold tracking-[-0.02em] text-[var(--foreground)] group-hover:underline underline-offset-4">
            {app.name}
          </span>
        </Link>
        <nav aria-label={lang === "tr" ? `${app.name} sayfaları` : `${app.name} pages`} className="mt-6 mb-12 flex flex-wrap gap-2 text-sm">
          {nav.map((item) =>
            item.external ? (
              <a key={item.href} href={item.href} lang={item.lang} rel="noopener" className={linkCls}>
                {item.label}
              </a>
            ) : (
              <Link key={item.href} href={item.href} lang={item.lang} hrefLang={item.lang} className={linkCls}>
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
