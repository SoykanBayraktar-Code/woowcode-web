"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.8, delay, ease },
});

/** Shared hero for inner pages: eyebrow, poster-size headline, lead, optional extra content. */
export default function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden noise pt-36 pb-16 lg:pt-44 lg:pb-24">
      <div className="absolute inset-0 bg-grid" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-0 h-[34rem] w-[64rem] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-50 blur-[120px]"
        style={{ background: "radial-gradient(closest-side, rgba(10,132,255,0.55), rgba(94,92,230,0.2) 60%, transparent)" }}
        aria-hidden="true"
      />
      <div className="relative container-x">
        <motion.span {...fadeUp(0)} className="eyebrow">
          {eyebrow}
        </motion.span>
        <motion.h1
          {...fadeUp(0.08)}
          className="heading-xl mt-6 max-w-5xl text-5xl sm:text-6xl lg:text-[5.5rem] text-[var(--foreground)]"
        >
          {title} {highlight && <span className="text-gradient">{highlight}</span>}
        </motion.h1>
        {description && (
          <motion.p
            {...fadeUp(0.16)}
            className="mt-7 max-w-2xl text-[17px] sm:text-lg leading-[1.6] text-[var(--foreground-muted)]"
          >
            {description}
          </motion.p>
        )}
        {children && <motion.div {...fadeUp(0.24)}>{children}</motion.div>}
      </div>
    </section>
  );
}
