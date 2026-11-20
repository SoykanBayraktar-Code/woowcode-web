"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { AppEntry, AppShowcase } from "@/lib/apps";
import { screenshotSrcs } from "@/lib/apps";
import { useLanguage } from "@/context/LanguageContext";
import DeviceFrame from "@/components/apps/DeviceFrame";

const ease = [0.22, 1, 0.36, 1] as const;

/* ---------------- Manifesto ---------------- */

export function Manifesto({ app }: { app: AppEntry }) {
  const { language } = useLanguage();
  const m = app.manifesto;
  if (!m) return null;
  return (
    <section className="relative border-t border-[var(--border-color)] py-24 lg:py-36">
      <div className="container-x">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="heading-xl max-w-4xl text-4xl sm:text-5xl lg:text-7xl text-[var(--foreground)]/45"
        >
          {m.lead[language]}{" "}
          <span style={{ color: app.accent.to }}>{m.statement[language]}</span>
        </motion.p>
        <div className="mt-16 grid gap-px overflow-hidden rounded-[1.5rem] border border-[var(--border-color)] bg-[var(--border-color)] md:grid-cols-3">
          {m.principles.map((p, i) => (
            <motion.div
              key={p.title.EN}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-[var(--background)] p-7 lg:p-9"
            >
              <span className="font-mono text-xs" style={{ color: app.accent.to }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-[var(--foreground)]">{p.title[language]}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--foreground-muted)]">{p.body[language]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Showcase band ---------------- */

function AiAurora() {
  const reduce = useReducedMotion();
  const blob = "absolute rounded-full blur-[110px] opacity-50";
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className={`${blob} left-[5%] top-[10%] h-[28rem] w-[28rem]`}
        style={{ background: "#5E5CE6" }}
        animate={reduce ? undefined : { x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`${blob} right-[5%] top-[30%] h-[24rem] w-[24rem]`}
        style={{ background: "#0A84FF" }}
        animate={reduce ? undefined : { x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`${blob} bottom-[-10%] left-[35%] h-[22rem] w-[22rem]`}
        style={{ background: "#FFB86B", opacity: 0.25 }}
        animate={reduce ? undefined : { x: [0, 40, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function ShowcaseBand({ app, item, index }: { app: AppEntry; item: AppShowcase; index: number }) {
  const { language } = useLanguage();
  const reduce = useReducedMotion();
  const src = screenshotSrcs(app)[item.screen - 1];
  const flip = index % 2 === 1;
  const ai = item.variant === "ai";

  return (
    <section
      id={item.id}
      className={`relative overflow-hidden border-t border-[var(--border-color)] py-24 lg:py-32 ${ai ? "bg-[#07081a]" : ""}`}
    >
      {ai && <AiAurora />}
      {!ai && (
        <div
          className={`pointer-events-none absolute top-1/2 h-[36rem] w-[36rem] -translate-y-1/2 rounded-full opacity-30 blur-[120px] ${flip ? "left-[-10%]" : "right-[-10%]"}`}
          style={{ background: app.accent.glow }}
          aria-hidden="true"
        />
      )}

      <div className="relative container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className={flip ? "lg:order-2" : ""}
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="eyebrow">{item.eyebrow[language]}</span>
            {item.badge && (
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  ai
                    ? "bg-gradient-to-r from-[#0A84FF] to-[#5E5CE6] text-white shadow-[0_6px_24px_-6px_rgba(94,92,230,0.8)]"
                    : "border border-white/15 text-[var(--foreground-muted-bright)]"
                }`}
              >
                {item.badge[language]}
              </span>
            )}
          </div>
          <h2 className="heading-lg mt-5 text-4xl sm:text-5xl lg:text-[3.5rem] text-[var(--foreground)]">
            {ai ? <span className="text-gradient">{item.title[language]}</span> : item.title[language]}
          </h2>
          <p className="mt-6 max-w-xl text-[17px] leading-[1.65] text-[var(--foreground-muted-bright)]">{item.body[language]}</p>
          <ul className="mt-8 space-y-3.5">
            {item.bullets.map((b, i) => (
              <motion.li
                key={b.EN}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.07, ease }}
                className="flex items-start gap-3 text-[15px] leading-relaxed text-[var(--foreground-muted-bright)]"
              >
                <span
                  className="mt-[7px] h-2 w-2 shrink-0 rounded-full"
                  style={{
                    background: ai ? "linear-gradient(135deg,#0A84FF,#A5A3FF)" : app.accent.to,
                    boxShadow: `0 0 10px ${ai ? "#5E5CE6" : app.accent.to}`,
                  }}
                />
                {b[language]}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Phone */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 60, rotate: flip ? -4 : 4 }}
          whileInView={{ opacity: 1, y: 0, rotate: flip ? -2 : 2 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease }}
          className={`relative mx-auto w-[64%] max-w-[300px] ${flip ? "lg:order-1" : ""}`}
        >
          {ai && (
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-[#0A84FF]/40 via-[#5E5CE6]/30 to-transparent blur-2xl" aria-hidden="true" />
          )}
          <div className="relative" style={{ filter: `drop-shadow(0 40px 70px ${ai ? "rgba(94,92,230,0.55)" : app.accent.glow})` }}>
            <DeviceFrame app={app} src={src} alt={`${app.name} — ${item.eyebrow[language]}`} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Showcases({ app }: { app: AppEntry }) {
  if (!app.showcases?.length) return null;
  return (
    <>
      {app.showcases.map((s, i) => (
        <ShowcaseBand key={s.id} app={app} item={s} index={i} />
      ))}
    </>
  );
}

/* ---------------- Milestones (light phases) ---------------- */

export function Milestones({ app }: { app: AppEntry }) {
  const { language } = useLanguage();
  const m = app.milestones;
  if (!m) return null;
  const src = m.screen ? screenshotSrcs(app)[m.screen - 1] : undefined;

  return (
    <section className="relative overflow-hidden border-t border-[var(--border-color)] py-24 lg:py-32">
      <div className="relative container-x grid items-center gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
        <div>
          <span className="eyebrow">{m.eyebrow[language]}</span>
          <h2 className="heading-lg mt-5 text-4xl sm:text-5xl text-[var(--foreground)]">{m.title[language]}</h2>
          <p className="mt-6 max-w-xl text-[17px] leading-[1.65] text-[var(--foreground-muted-bright)]">{m.body[language]}</p>

          <ol className="relative mt-12">
            <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-white/10 via-white/20 to-transparent" aria-hidden="true" />
            {m.steps.map((s, i) => {
              const size = 10 + i * 4;
              return (
                <motion.li
                  key={s.name.EN}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease }}
                  className="relative flex items-center gap-5 py-3"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center">
                    <span
                      className="rounded-full"
                      style={{
                        width: size,
                        height: size,
                        background: `radial-gradient(circle, #fff, ${app.accent.to} 55%, transparent 75%)`,
                        boxShadow: `0 0 ${8 + i * 6}px ${app.accent.to}`,
                      }}
                    />
                  </span>
                  <span className="text-lg font-semibold tracking-[-0.02em] text-[var(--foreground)]">{s.name[language]}</span>
                  <span className="ml-auto font-mono text-xs text-[var(--foreground-muted)]">{s.detail[language]}</span>
                </motion.li>
              );
            })}
          </ol>
        </div>
        {src && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
            className="mx-auto w-[60%] max-w-[280px]"
            style={{ filter: `drop-shadow(0 40px 80px ${app.accent.glow})` }}
          >
            <DeviceFrame app={app} src={src} />
          </motion.div>
        )}
      </div>
    </section>
  );
}

/* ---------------- Extra features + plans ---------------- */

export function ExtrasAndPlans({ app }: { app: AppEntry }) {
  const { language } = useLanguage();
  const en = language === "EN";
  if (!app.extra?.length && !app.plans) return null;

  return (
    <section className="border-t border-[var(--border-color)] py-24 lg:py-32">
      <div className="container-x">
        {app.extra && app.extra.length > 0 && (
          <>
            <span className="eyebrow">{en ? "And more" : "Ve dahası"}</span>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {app.extra.map((x, i) => (
                <motion.div
                  key={x.title.EN}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease }}
                  className="card-line p-7"
                >
                  <h3 className="text-lg font-semibold tracking-[-0.01em] text-[var(--foreground)]">{x.title[language]}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--foreground-muted)]">{x.body[language]}</p>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {app.plans && (
          <div className={`grid gap-4 lg:grid-cols-2 ${app.extra?.length ? "mt-20" : ""}`}>
            {[app.plans.free, app.plans.plus].map((plan, i) => {
              const plus = i === 1;
              return (
                <motion.div
                  key={plan.title.EN}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease }}
                  className={`relative overflow-hidden rounded-[1.5rem] p-8 sm:p-10 ${plus ? "border" : "card-line"}`}
                  style={
                    plus
                      ? {
                          borderColor: `${app.accent.to}55`,
                          background: `radial-gradient(120% 100% at 100% 0%, ${app.accent.from}, #07090d 70%)`,
                        }
                      : undefined
                  }
                >
                  <h3 className="text-2xl font-semibold tracking-[-0.02em]" style={{ color: plus ? app.accent.to : "var(--foreground)" }}>
                    {plan.title[language]}
                  </h3>
                  <ul className="mt-7 space-y-3">
                    {plan.items.map((it) => (
                      <li key={it.EN} className="flex items-start gap-3 text-[15px] text-[var(--foreground-muted-bright)]">
                        <svg className="mt-0.5 h-5 w-5 shrink-0" style={{ color: plus ? app.accent.to : "var(--mint)" }} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clipRule="evenodd" />
                        </svg>
                        {it[language]}
                      </li>
                    ))}
                  </ul>
                  {"note" in plan && (
                    <p className="mt-7 border-t border-white/10 pt-5 text-sm text-[var(--foreground-muted)]">
                      {(plan as { note: { TR: string; EN: string } }).note[language]}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
