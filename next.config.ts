import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Eski Starlit adresleri App Store kaydında (destek / gizlilik URL'si) kullanılıyor olabilir:
      // kalıcı yönlendirme ile çalışmaya devam ederler.
      { source: "/starlit", destination: "/apps/starlit", permanent: true },
      { source: "/starlit/privacy", destination: "/apps/starlit/privacy", permanent: true },
      { source: "/starlit/gizlilik", destination: "/apps/starlit/gizlilik", permanent: true },
      // Portföyüm: App Store kaydındaki destek ve gizlilik adresleri kısa yoldan da açılır.
      { source: "/portfoyum", destination: "/apps/portfoyum", permanent: true },
      { source: "/portfoyum/privacy", destination: "/apps/portfoyum/privacy", permanent: true },
      { source: "/portfoyum/gizlilik", destination: "/apps/portfoyum/gizlilik", permanent: true },
      // Tuffi: App Store kaydındaki destek, pazarlama ve gizlilik adresleri.
      { source: "/tuffi", destination: "/apps/tuffi", permanent: true },
      { source: "/tuffi/privacy", destination: "/apps/tuffi/privacy", permanent: true },
      { source: "/tuffi/gizlilik", destination: "/apps/tuffi/gizlilik", permanent: true },
      // Ninni: App Store kaydındaki destek ve gizlilik adresleri.
      { source: "/ninni", destination: "/apps/ninni", permanent: true },
      { source: "/ninni/privacy", destination: "/apps/ninni/privacy", permanent: true },
      { source: "/ninni/gizlilik", destination: "/apps/ninni/gizlilik", permanent: true },
      // PT Coach: App Store kaydındaki destek ve gizlilik adresleri (woowcode.com/PT).
      { source: "/pt", destination: "/apps/ptcoach", permanent: true },
      { source: "/PT", destination: "/apps/ptcoach", permanent: true },
      { source: "/pt/gizlilik", destination: "/apps/ptcoach/gizlilik", permanent: true },
      { source: "/PT/gizlilik", destination: "/apps/ptcoach/gizlilik", permanent: true },
      { source: "/pt/privacy", destination: "/apps/ptcoach/privacy", permanent: true },
      { source: "/PT/privacy", destination: "/apps/ptcoach/privacy", permanent: true },
      { source: "/pt/kvkk", destination: "/apps/ptcoach/kvkk", permanent: true },
      { source: "/PT/kvkk", destination: "/apps/ptcoach/kvkk", permanent: true },
    ];
  },
};

export default nextConfig;
