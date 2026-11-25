"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { waLink } from "@/lib/site";
import { liveApps, screenshotSrcs, type AppEntry } from "@/lib/apps";
import { homeHero, mobileStack } from "@/lib/home";
import DeviceFrame from "@/components/apps/DeviceFrame";
import AppIcon from "@/components/apps/AppIcon";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.8, delay, ease },
});

type Slide = { app: AppEntry; src?: string };

/** Every screenshot of every live app; apps without screenshots get one branded placeholder slide. */
function buildSlides(language: "TR" | "EN"): Slide[] {
  return liveApps().flatMap((app) => {
    const shots = screenshotSrcs(app, language);
    return shots.length ? shots.map((src) => ({ app, src })) : [{ app }];
  });
}

function FloatingIcon({
  children,
  className,
  delay = 0,
  reduce,
}: {
  children: React.ReactNode;
  className: string;
  delay?: number;
  reduce: boolean | null;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.6 + delay, ease }}
      className={`absolute z-20 ${className}`}
    >
      <motion.div
        animate={reduce ? undefined : { y: [0, -12, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 5 + delay * 2, repeat: Infinity, ease: "easeInOut", delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function HeroSection() {
  const { t, language } = useLanguage();
  const reduce = useReducedMotion();
  const en = language === "EN";
  const sectionRef = useRef<HTMLElement>(null);

  const slides = buildSlides(language);
  const apps = liveApps();
  const [index, setIndex] = useState(0);
  const current = slides[index % slides.length];

  useEffect(() => {
    if (reduce || slides.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 3200);
    return () => clearInterval(id);
  }, [reduce, slides.length]);

  // Scroll-linked 3D tilt of the phone
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const rotateX = useTransform(p, [0, 1], [0, 22]);
  const rotateY = useTransform(p, [0, 1], [-8, -24]);
  const y = useTransform(p, [0, 1], [0, 140]);
  const scale = useTransform(p, [0, 1], [1, 0.86]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden noise pt-32 sm:pt-36 lg:pt-40">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-grid" aria-hidden="true" />
      <div
        className="absolute right-[-10%] top-[-10%] h-[44rem] w-[44rem] rounded-full opacity-60 blur-[120px]"
        style={{ background: "radial-gradient(closest-side, rgba(10,132,255,0.6), rgba(94,92,230,0.25) 60%, transparent)" }}
        aria-hidden="true"
      />

      <div className="relative container-x grid items-center gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-8">
        {/* ---------- Copy ---------- */}
        <div className="text-center lg:text-left">
          {apps[0] && (
            <motion.div {...fadeUp(0)} className="flex justify-center lg:justify-start">
              <Link
                href={`/apps/${apps[0].slug}`}
                className="group inline-flex items-center gap-2.5 rounded-full border border-[var(--border-color-bright)] bg-white/[0.03] py-1 pl-1 pr-3.5 text-sm text-[var(--foreground-muted-bright)] backdrop-blur transition-colors hover:border-white/25"
              >
                <AppIcon app={apps[0]} size={26} className="!shadow-none" />
                <span>
                  <span className="text-[var(--foreground)] font-medium">{apps[0].name}</span>{" "}
                  {en ? "is live on the App Store" : "App Store'da yayında"}
                </span>
                <svg className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          )}

          <motion.h1
            {...fadeUp(0.08)}
            className="heading-xl mt-8 text-[3.4rem] sm:text-7xl lg:text-[6.5rem] xl:text-[7.25rem] text-[var(--foreground)]"
          >
            {homeHero.title[language]}
            <br />
            <span className="text-gradient">{homeHero.highlight[language]}</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.16)}
            className="mx-auto lg:mx-0 mt-7 max-w-xl text-[17px] sm:text-lg leading-[1.6] text-[var(--foreground-muted)]"
          >
            {homeHero.description[language]}
          </motion.p>

          <motion.div {...fadeUp(0.24)} className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
            <Link
              href={`/contact?subject=${encodeURIComponent(t.contact.form.subjects.consultation)}`}
              className="btn-primary w-full sm:w-auto"
            >
              {en ? "Let's talk about your app" : "Uygulamanızı konuşalım"}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link href="/apps" className="btn-ghost w-full sm:w-auto">
              {homeHero.ctaApps[language]}
            </Link>
          </motion.div>

          <motion.a
            {...fadeUp(0.3)}
            href={waLink(language)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
          >
            <span className="h-2 w-2 rounded-full bg-[#30D158] shadow-[0_0_10px_#30D158]" />
            {t.hero.ctaWhatsApp} · WhatsApp
          </motion.a>
        </div>

        {/* ---------- Phone ---------- */}
        <div className="relative mx-auto w-full max-w-[460px] [perspective:1400px]">
          {/* orbit rings */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
            {[300, 440, 580].map((d, i) => (
              <motion.div
                key={d}
                className="absolute left-1/2 top-1/2 rounded-full border border-white/[0.07]"
                style={{ width: d, height: d, marginLeft: -d / 2, marginTop: -d / 2 }}
                animate={reduce ? undefined : { rotate: 360 }}
                transition={{ duration: 60 + i * 30, repeat: Infinity, ease: "linear" }}
              >
                <span className="absolute -top-1 left-1/2 h-2 w-2 rounded-full bg-[var(--mint)] shadow-[0_0_14px_var(--mint)]" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 80, rotateX: 25 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1.2, delay: 0.25, ease }}
            className="relative mx-auto w-[64%] max-w-[290px]"
          >
            <motion.div style={reduce ? undefined : { rotateX, rotateY, y, scale, transformStyle: "preserve-3d" }}>
              <div style={{ filter: `drop-shadow(0 40px 80px ${current.app.accent.glow})` }} className="transition-[filter] duration-1000">
                <DeviceFrame app={current.app} priority>
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 1.06 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.7, ease }}
                      className="absolute inset-0"
                    >
                      {current.src ? (
                        <Image
                          src={current.src}
                          alt={`${current.app.name} ${en ? "screenshot" : "ekran görüntüsü"}`}
                          fill
                          sizes="290px"
                          className="object-cover"
                          priority={index === 0}
                        />
                      ) : (
                        <div
                          className="flex h-full w-full flex-col items-center justify-center gap-4"
                          style={{ background: `radial-gradient(120% 70% at 50% 0%, ${current.app.accent.from}, #05060a 75%)` }}
                        >
                          <AppIcon app={current.app} size={84} />
                          <span className="text-lg font-semibold tracking-[-0.02em] text-white">{current.app.name}</span>
                          <span className="px-8 text-center text-xs text-white/60">{current.app.tagline[language]}</span>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </DeviceFrame>
              </div>
            </motion.div>
          </motion.div>

          {/* floating app icons */}
          {apps.map((app, i) => (
            <FloatingIcon
              key={app.slug}
              reduce={reduce}
              delay={i * 0.4}
              className={i % 2 === 0 ? "left-[2%] top-[14%]" : "right-[0%] bottom-[22%]"}
            >
              <Link href={`/apps/${app.slug}`} aria-label={app.name} className="block transition-transform hover:scale-110">
                <AppIcon app={app} size={i % 2 === 0 ? 68 : 60} />
              </Link>
            </FloatingIcon>
          ))}
          <FloatingIcon reduce={reduce} delay={0.8} className="right-[4%] top-[8%]">
            <Link
              href="/contact"
              aria-label={en ? "Your app" : "Sizin uygulamanız"}
              className="grid h-[52px] w-[52px] place-items-center rounded-[12px] border border-dashed border-white/25 bg-white/[0.03] text-xl text-[var(--foreground-muted)] backdrop-blur transition-colors hover:border-white/50 hover:text-white"
            >
              +
            </Link>
          </FloatingIcon>

          {/* now-showing pill */}
          <div className="relative mt-8 flex justify-center" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.app.slug}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-1.5 pr-3.5 text-sm backdrop-blur"
              >
                <AppIcon app={current.app} size={22} className="!shadow-none" />
                <span className="font-medium text-[var(--foreground)]">{current.app.name}</span>
                <span className="text-[var(--foreground-muted)]">· {en ? "built by WOOWCODE" : "WOOWCODE yapımı"}</span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Stats */}
      <motion.dl
        {...fadeUp(0.5)}
        className="relative mx-4 sm:mx-auto mt-20 grid max-w-4xl grid-cols-1 sm:grid-cols-3 gap-px overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--border-color)]"
      >
        {homeHero.stats.map((s) => (
          <div key={s.label.EN} className="flex flex-col-reverse bg-[var(--background)] px-6 py-6 text-center">
            <dt className="mt-1 text-sm text-[var(--foreground-muted)]">{s.label[language]}</dt>
            <dd className="heading-lg text-3xl text-[var(--foreground)]">{en && s.valueEN ? s.valueEN : s.value}</dd>
          </div>
        ))}
      </motion.dl>

      {/* Tech marquee */}
      <div className="relative mt-20 border-y border-[var(--border-color)] py-6 [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
        <div className="flex w-max animate-marquee gap-12 pr-12">
          {[...mobileStack, ...mobileStack].map((s, i) => (
            <span key={i} className="font-mono text-sm tracking-[0.08em] text-[var(--foreground-muted)]/70 whitespace-nowrap" aria-hidden={i >= mobileStack.length}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
