import Image from "next/image";
import type { ReactNode } from "react";
import type { AppEntry } from "@/lib/apps";
import AppIcon from "@/components/apps/AppIcon";

/** Pure-CSS iPhone frame (titanium edge, Dynamic Island). Screenshots are 1206×2622 (iPhone 17 Pro). */
export default function DeviceFrame({
  src,
  app,
  alt,
  className = "",
  priority = false,
  children,
}: {
  /** Custom screen content; overrides `src`. */
  children?: ReactNode;
  src?: string;
  app: AppEntry;
  alt?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative aspect-[1206/2622] rounded-[13.5%/6.2%] bg-[#1a1d24] p-[3.2%] shadow-[0_0_0_1px_rgba(255,255,255,0.14),0_0_0_2px_#0a0c10,0_40px_80px_-20px_rgba(0,0,0,0.9)] ${className}`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[11%/5.1%] bg-black">
        {children ? (
          children
        ) : src ? (
          <Image src={src} alt={alt ?? `${app.name} ekran görüntüsü`} fill sizes="(max-width: 768px) 60vw, 320px" className="object-cover" priority={priority} />
        ) : (
          <div
            className="flex h-full w-full flex-col items-center justify-center gap-4"
            style={{ background: `radial-gradient(120% 70% at 50% 0%, ${app.accent.from}, #05060a 75%)` }}
          >
            <AppIcon app={app} size={72} />
            <span className="text-sm font-medium text-white/80">{app.name}</span>
          </div>
        )}
        {/* Dynamic Island */}
        <div className="absolute left-1/2 top-[1.6%] h-[3.6%] w-[31%] -translate-x-1/2 rounded-full bg-black" aria-hidden="true" />
      </div>
      {/* side buttons */}
      <span className="absolute -left-[1.2%] top-[18%] h-[6%] w-[1.2%] rounded-l bg-[#2a2e37]" aria-hidden="true" />
      <span className="absolute -left-[1.2%] top-[27%] h-[10%] w-[1.2%] rounded-l bg-[#2a2e37]" aria-hidden="true" />
      <span className="absolute -right-[1.2%] top-[24%] h-[13%] w-[1.2%] rounded-r bg-[#2a2e37]" aria-hidden="true" />
    </div>
  );
}
