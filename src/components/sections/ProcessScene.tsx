"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { processScene } from "@/lib/home";
import { liveApps, screenshotSrcs, type AppEntry } from "@/lib/apps";
import DeviceFrame from "@/components/apps/DeviceFrame";
import AppIcon from "@/components/apps/AppIcon";

const ease = [0.22, 1, 0.36, 1] as const;

/* ---------------- The four phone screens ---------------- */

function WireframeScreen() {
  const box = "rounded-md border border-dashed border-white/25";
  return (
    <div className="flex h-full flex-col gap-3 bg-[#0e1016] px-[8%] pb-[6%] pt-[18%]">
      <div className="flex items-center justify-between">
        <div className={`${box} h-3 w-16`} />
        <div className={`${box} h-6 w-6 rounded-full`} />
      </div>
      <div className={`${box} h-5 w-3/4`} />
      <div className={`${box} mx-auto my-3 aspect-square w-[72%] rounded-full`} />
      <div className="grid grid-cols-2 gap-2">
        <div className={`${box} h-14`} />
        <div className={`${box} h-14`} />
      </div>
      <div className={`${box} h-10`} />
      <div className="mt-auto flex justify-around rounded-xl border border-dashed border-white/25 py-3">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={`${box} h-4 w-4 rounded-full`} />
        ))}
      </div>
    </div>
  );
}

function DesignScreen({ app, en }: { app?: AppEntry; en: boolean }) {
  const src = app ? screenshotSrcs(app, en ? "EN" : "TR")[0] : undefined;
  if (src) return <Image src={src} alt="" fill sizes="280px" className="object-cover" />;
  return <div className="h-full bg-gradient-to-b from-[#0A84FF] to-[#5E5CE6]" />;
}

function CodeScreen() {
  const k = "text-[#fc5fa3]"; // keyword
  const ty = "text-[#5dd8ff]"; // type
  const s = "text-[#fc6a5d]"; // string
  const n = "text-[#d0bf69]"; // number
  const c = "text-[#6c7986]"; // comment
  return (
    <div className="h-full overflow-hidden bg-[#1f1f24] px-[7%] pt-[17%] font-mono text-[9.5px] leading-[1.65] text-[#dfdfe0] sm:text-[10.5px]">
      <div className="mb-3 flex items-center gap-1.5 text-[9px] text-white/40">
        <span className="h-2 w-2 rounded-sm bg-[#fd8d3f]" /> OrbitView.swift
      </div>
      <pre className="whitespace-pre">
        <span className={k}>import</span> SwiftUI{"\n\n"}
        <span className={k}>struct</span> <span className={ty}>OrbitView</span>: <span className={ty}>View</span> {"{"}{"\n"}
        {"  "}<span className={k}>@State var</span> routines: [<span className={ty}>Routine</span>]{"\n\n"}
        {"  "}<span className={k}>var</span> body: <span className={k}>some</span> <span className={ty}>View</span> {"{"}{"\n"}
        {"    "}<span className={ty}>ZStack</span> {"{"}{"\n"}
        {"      "}<span className={ty}>Circle</span>(){"\n"}
        {"        "}.stroke(.white.opacity(<span className={n}>0.2</span>)){"\n"}
        {"      "}<span className={ty}>StarView</span>(){"\n"}
        {"      "}<span className={ty}>ForEach</span>(routines) {"{"} r <span className={k}>in</span>{"\n"}
        {"        "}<span className={ty}>Planet</span>(r){"\n"}
        {"          "}.rotationEffect(r.angle){"\n"}
        {"      "}{"}"}{"\n"}
        {"    "}{"}"}{"\n"}
        {"    "}.animation(.spring, value: routines){"\n"}
        {"  "}{"}"}{"\n"}
        {"}"}{"\n\n"}
        <span className={c}>{"// ✓ Build succeeded"}</span>{"\n"}
        <span className={c}>{"// → TestFlight "}</span><span className={s}>&quot;1.0 (42)&quot;</span>
      </pre>
    </div>
  );
}

function LiveScreen({ app, en }: { app?: AppEntry; en: boolean }) {
  if (!app) return null;
  const shots = screenshotSrcs(app, en ? "EN" : "TR").slice(0, 2);
  return (
    <div className="flex h-full flex-col bg-[#000] px-[7%] pt-[18%] text-white">
      <div className="flex gap-3">
        <AppIcon app={app} size={64} className="!shadow-none" />
        <div className="min-w-0 flex-1">
          <div className="truncate text-[15px] font-semibold leading-tight">{app.name}</div>
          <div className="mt-0.5 truncate text-[11px] text-white/50">{app.tagline[en ? "EN" : "TR"]}</div>
          <div className="mt-2 flex items-center justify-between">
            <span className="rounded-full bg-[#0A84FF] px-4 py-1 text-[11px] font-bold">{en ? "GET" : "AL"}</span>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-between border-y border-white/10 py-2.5 text-center text-[9px] text-white/45">
        <div className="flex-1">
          <div className="text-[11px] font-semibold text-white/80">{app.category[en ? "EN" : "TR"]}</div>
          {en ? "Category" : "Kategori"}
        </div>
        <div className="flex-1 border-l border-white/10">
          <div className="text-[11px] font-semibold text-white/80">WOOWCODE</div>
          {en ? "Developer" : "Geliştirici"}
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {shots.map((s) => (
          <div key={s} className="relative aspect-[1206/2622] overflow-hidden rounded-lg">
            <Image src={s} alt="" fill sizes="120px" className="object-cover" />
          </div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5, ease }}
        className="absolute bottom-[7%] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#30D158] px-3 py-1.5 text-[10px] font-semibold text-black shadow-[0_8px_30px_rgba(48,209,88,0.5)]"
      >
        ✓ {en ? "Ready for Sale" : "Satışa hazır"}
      </motion.div>
    </div>
  );
}

/* ---------------- Scene ---------------- */

export default function ProcessScene() {
  const { language } = useLanguage();
  const en = language === "EN";
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const [step, setStep] = useState(0);
  const app = liveApps()[0];
  const steps = processScene.steps;

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setStep(Math.min(steps.length - 1, Math.max(0, Math.floor(v * steps.length))));
  });
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-6, 0, 6]);

  const screen = (key: (typeof steps)[number]["key"]) => {
    switch (key) {
      case "wireframe":
        return <WireframeScreen />;
      case "design":
        return <DesignScreen app={app} en={en} />;
      case "code":
        return <CodeScreen />;
      case "live":
        return <LiveScreen app={app} en={en} />;
    }
  };

  return (
    <section ref={ref} className="relative border-t border-[var(--border-color)]" style={{ height: `${steps.length * 85 + 40}vh` }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[120px]"
          style={{ background: "radial-gradient(closest-side, rgba(94,92,230,0.6), transparent)" }}
          aria-hidden="true"
        />
        <div className="relative container-x grid items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16 pt-16">
          {/* Steps */}
          <div className="order-2 lg:order-1">
            <span className="eyebrow">{processScene.eyebrow[language]}</span>
            <h2 className="heading-lg mt-4 text-3xl sm:text-4xl lg:text-[3.25rem] text-[var(--foreground)]">
              {processScene.title[language]} <span className="text-gradient">{processScene.highlight[language]}</span>
            </h2>

            <div className="relative mt-8 lg:mt-12 pl-6">
              <div className="absolute left-0 top-1 bottom-1 w-px bg-white/10" aria-hidden="true">
                <motion.div className="w-px bg-gradient-to-b from-[var(--azure)] to-[var(--mint)]" style={{ height: progress }} />
              </div>
              <ol className="space-y-2 lg:space-y-6">
                {steps.map((s, i) => {
                  const active = i === step;
                  return (
                    <li key={s.key} className={`${active ? "" : "hidden lg:block"}`} aria-current={active ? "step" : undefined}>
                      <div className={`flex items-baseline gap-3 transition-colors duration-500 ${active ? "text-[var(--foreground)]" : "text-[var(--foreground-muted)]/50"}`}>
                        <span className="font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>
                        <h3 className="text-xl lg:text-2xl font-semibold tracking-[-0.02em]">{s.title[language]}</h3>
                      </div>
                      <AnimatePresence initial={false}>
                        {active && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease }}
                            className="overflow-hidden pl-8 pt-2 text-[15px] lg:text-[17px] leading-[1.6] text-[var(--foreground-muted)]"
                          >
                            {s.body[language]}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>

          {/* Phone */}
          <div className="order-1 lg:order-2 flex justify-center [perspective:1400px]">
            <motion.div style={reduce ? undefined : { rotateY: rotate }} className="w-[38vw] max-w-[150px] sm:max-w-[200px] lg:w-[300px] lg:max-w-[300px]">
              <DeviceFrame app={app}>
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -24, filter: "blur(8px)" }}
                    transition={{ duration: 0.55, ease }}
                    className="absolute inset-0"
                  >
                    {screen(steps[step].key)}
                  </motion.div>
                </AnimatePresence>
              </DeviceFrame>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
