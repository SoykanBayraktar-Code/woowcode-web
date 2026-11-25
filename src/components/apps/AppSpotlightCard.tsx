"use client";

import Link from "next/link";
import { useRef } from "react";
import type { AppEntry } from "@/lib/apps";
import { screenshotSrcs } from "@/lib/apps";
import { useLanguage } from "@/context/LanguageContext";
import AppIcon from "@/components/apps/AppIcon";
import DeviceFrame from "@/components/apps/DeviceFrame";

/**
 * Showcase card for one app: lives in the app's own colours, a light follows the
 * cursor and the card tilts slightly (disabled for reduced-motion via CSS).
 */
export default function AppSpotlightCard({ app, large = false }: { app: AppEntry; large?: boolean }) {
  const { language } = useLanguage();
  const ref = useRef<HTMLAnchorElement>(null);
  const shot = screenshotSrcs(app, language)[0];

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
    el.style.setProperty("--rx", `${(0.5 - y) * 5}deg`);
    el.style.setProperty("--ry", `${(x - 0.5) * 7}deg`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <Link
      ref={ref}
      href={`/apps/${app.slug}`}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="spotlight-card group relative block overflow-hidden rounded-[2rem] border border-white/10 p-7 sm:p-9 focus-visible:outline-offset-4"
      style={{
        background: `radial-gradient(120% 90% at 0% 0%, ${app.accent.from} 0%, #07090d 70%)`,
        ["--glow" as string]: app.accent.glow,
      }}
    >
      {/* cursor light */}
      <span
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "radial-gradient(420px circle at var(--mx,50%) var(--my,50%), var(--glow), transparent 60%)" }}
        aria-hidden="true"
      />
      <span className="pointer-events-none absolute inset-0 bg-grid opacity-30" aria-hidden="true" />

      <div className={`relative grid items-end gap-8 ${large ? "md:grid-cols-[1.1fr_1fr]" : ""}`}>
        <div className="flex flex-col">
          <div className="flex items-center gap-4">
            <AppIcon app={app} size={64} />
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-white">{app.name}</h3>
              <p className="mt-1 font-mono text-xs text-white/60">
                {app.platforms.join(" · ")} · {app.category[language]}
              </p>
            </div>
          </div>
          <p className={`mt-6 font-semibold tracking-[-0.03em] text-white ${large ? "text-3xl sm:text-4xl" : "text-2xl"}`}>
            {app.tagline[language]}
          </p>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/65">{app.description[language]}</p>
          <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-white">
            {language === "EN" ? "Explore the app" : "Uygulamayı incele"}
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </div>

        {large && (
          <div className="relative mx-auto w-[58%] max-w-[260px] md:w-[70%] [perspective:1200px]">
            <div className="spotlight-tilt" style={{ filter: `drop-shadow(0 30px 60px ${app.accent.glow})` }}>
              <DeviceFrame app={app} src={shot} />
            </div>
          </div>
        )}
      </div>

      {app.status === "coming-soon" && (
        <span className="absolute right-6 top-6 rounded-full border border-white/20 bg-black/30 px-3 py-1 font-mono text-[11px] text-white/80">
          {language === "EN" ? "COMING SOON" : "YAKINDA"}
        </span>
      )}
    </Link>
  );
}
