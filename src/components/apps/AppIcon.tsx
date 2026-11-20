import Image from "next/image";
import type { AppEntry } from "@/lib/apps";
import { iconSrc } from "@/lib/apps";

/** App icon with the iOS squircle-ish corner (22.5%). Falls back to a monogram in the app's colours. */
export default function AppIcon({ app, size = 64, className = "" }: { app: AppEntry; size?: number; className?: string }) {
  const src = iconSrc(app);
  const radius = Math.round(size * 0.225);
  const common = `relative block shrink-0 overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] ring-1 ring-white/10 ${className}`;
  if (src) {
    return (
      <span className={common} style={{ width: size, height: size, borderRadius: radius }}>
        <Image src={src} alt={`${app.name} uygulama ikonu`} width={size} height={size} className="h-full w-full object-cover" />
      </span>
    );
  }
  return (
    <span
      className={`${common} grid place-items-center font-semibold text-white`}
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        fontSize: size * 0.42,
        letterSpacing: "-0.04em",
        background: `linear-gradient(140deg, ${app.accent.from}, ${app.accent.to})`,
      }}
      role="img"
      aria-label={`${app.name} uygulama ikonu`}
    >
      <span className="absolute inset-0 bg-gradient-to-b from-white/25 to-transparent to-50%" aria-hidden="true" />
      <span className="relative">{app.name.slice(0, 1)}</span>
    </span>
  );
}
