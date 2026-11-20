"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/** Shared section heading: mono eyebrow, tight display title, muted lead. */
export default function SectionHeader({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  action,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
}) {
  const center = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 lg:mb-16 flex flex-col gap-6 ${
        center ? "items-center text-center" : "lg:flex-row lg:items-end lg:justify-between"
      }`}
    >
      <div className={center ? "max-w-3xl" : "max-w-2xl"}>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 className="heading-lg mt-4 text-3xl sm:text-4xl lg:text-[3.25rem] text-[var(--foreground)]">
          {title} {highlight && <span className="text-gradient">{highlight}</span>}
        </h2>
        {description && (
          <p className="mt-5 text-base lg:text-lg leading-relaxed text-[var(--foreground-muted)]">{description}</p>
        )}
      </div>
      {action}
    </motion.div>
  );
}
