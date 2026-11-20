import { useId } from "react";

/** iOS-style continuous-corner squircle on a 40×40 box. */
const SQUIRCLE = "M40.00 20.00L39.98 26.72L39.93 28.86L39.85 30.40L39.72 31.65L39.57 32.70L39.38 33.62L39.15 34.43L38.88 35.16L38.58 35.81L38.23 36.40L37.84 36.93L37.41 37.41L36.93 37.84L36.40 38.23L35.81 38.58L35.16 38.88L34.43 39.15L33.62 39.38L32.70 39.57L31.65 39.72L30.40 39.85L28.86 39.93L26.72 39.98L20.00 40.00L13.28 39.98L11.14 39.93L9.60 39.85L8.35 39.72L7.30 39.57L6.38 39.38L5.57 39.15L4.84 38.88L4.19 38.58L3.60 38.23L3.07 37.84L2.59 37.41L2.16 36.93L1.77 36.40L1.42 35.81L1.12 35.16L0.85 34.43L0.62 33.62L0.43 32.70L0.28 31.65L0.15 30.40L0.07 28.86L0.02 26.72L0.00 20.00L0.02 13.28L0.07 11.14L0.15 9.60L0.28 8.35L0.43 7.30L0.62 6.38L0.85 5.57L1.12 4.84L1.42 4.19L1.77 3.60L2.16 3.07L2.59 2.59L3.07 2.16L3.60 1.77L4.19 1.42L4.84 1.12L5.57 0.85L6.38 0.62L7.30 0.43L8.35 0.28L9.60 0.15L11.14 0.07L13.28 0.02L20.00 0.00L26.72 0.02L28.86 0.07L30.40 0.15L31.65 0.28L32.70 0.43L33.62 0.62L34.43 0.85L35.16 1.12L35.81 1.42L36.40 1.77L36.93 2.16L37.41 2.59L37.84 3.07L38.23 3.60L38.58 4.19L38.88 4.84L39.15 5.57L39.38 6.38L39.57 7.30L39.72 8.35L39.85 9.60L39.93 11.14L39.98 13.28Z";

/**
 * WOOWCODE brand mark — the logo *is* an app icon: squircle, vibrant
 * azure → mint gradient, white W and a home-indicator bar.
 */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={`wc-bg-${id}`} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0A84FF" />
          <stop offset="1" stopColor="#5E5CE6" />
        </linearGradient>
        <linearGradient id={`wc-sh-${id}`} x1="0" y1="0" x2="0" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" stopOpacity="0.28" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={SQUIRCLE} fill={`url(#wc-bg-${id})`} />
      <path d={SQUIRCLE} fill={`url(#wc-sh-${id})`} />
      <path
        d="M9.6 13.2 L14.6 26.4 L20 17.2 L25.4 26.4 L30.4 13.2"
        stroke="#fff"
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="15.2" y="32" width="9.6" height="1.8" rx="0.9" fill="#fff" fillOpacity="0.85" />
    </svg>
  );
}

export const TAGLINE = {
  // Written in caps on purpose: CSS `uppercase` under <html lang="tr"> would turn "idea" into "İDEA".
  TR: "FİKİRDEN APP STORE'A",
  EN: "FROM IDEA TO APP STORE",
} as const;

export default function Logo({
  className = "",
  tagline,
}: {
  className?: string;
  /** Small line under the wordmark; hidden on very small screens. */
  tagline?: string;
}) {
  return (
    <span className={`group inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-9 w-9 lg:h-10 lg:w-10 drop-shadow-[0_6px_18px_rgba(10, 132, 255,0.35)] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105" />
      <span className="flex flex-col">
        <span className="text-[1.2rem] lg:text-[1.3rem] font-semibold tracking-[-0.04em] leading-none text-[var(--foreground)]">
          woow<span className="text-gradient">code</span>
        </span>
        {tagline && (
          <span className="mt-1 hidden sm:block font-mono text-[9.5px] tracking-[0.16em] leading-none text-[var(--foreground-muted)]">
            {tagline}
          </span>
        )}
      </span>
    </span>
  );
}
