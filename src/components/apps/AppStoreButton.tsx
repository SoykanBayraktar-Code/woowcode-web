"use client";

import type { AppEntry } from "@/lib/apps";
import { appStoreButtonUrl } from "@/lib/apps";
import { useLanguage } from "@/context/LanguageContext";

/**
 * Download button. Uses our own artwork (no Apple logo) — swap in Apple's official
 * "Download on the App Store" badge here if/when the team adds the official asset.
 * Renders nothing in production until the app has an App Store ID.
 */
export default function AppStoreButton({ app, size = "md" }: { app: AppEntry; size?: "md" | "lg" }) {
  const { language } = useLanguage();
  const href = appStoreButtonUrl(app);
  const en = language === "EN";

  if (!href && process.env.NODE_ENV === "production") return null;

  const lg = size === "lg";
  const inner = (
    <>
      <svg className={lg ? "h-6 w-6" : "h-5 w-5"} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v11m0 0l-4.5-4.5M12 15l4.5-4.5M5 19.5h14" />
      </svg>
      <span className="flex flex-col items-start leading-none">
        <span className={`${lg ? "text-[11px]" : "text-[10px]"} font-medium opacity-70`}>{en ? "Download on the" : "İndirin"}</span>
        <span className={`${lg ? "text-lg" : "text-base"} font-semibold tracking-[-0.02em] mt-0.5`}>App Store</span>
      </span>
    </>
  );

  const cls = `inline-flex items-center gap-2.5 rounded-2xl bg-white text-[#05070a] ${
    lg ? "h-14 pl-4 pr-6" : "h-12 pl-3.5 pr-5"
  } shadow-[0_10px_30px_-10px_rgba(255,255,255,0.35)] transition-transform duration-200 hover:-translate-y-0.5 active:scale-95`;

  if (!href) {
    return (
      <span className={`${cls} opacity-40 cursor-not-allowed`} title="App Store ID eklenmedi (yalnızca geliştirmede görünür)">
        {inner}
      </span>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  );
}
