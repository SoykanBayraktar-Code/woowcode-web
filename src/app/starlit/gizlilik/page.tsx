import type { Metadata } from "next";
import StarlitShell, { STARLIT_TERMS_URL, starlitProse } from "@/components/starlit/StarlitShell";
import { loadPolicy } from "@/lib/starlit-policy";

export const dynamic = "force-static";

const description =
  "Starlit gizlilik politikası: hangi veriler işlenir, nerede durur ve nasıl silinir.";

export const metadata: Metadata = {
  title: "Starlit Gizlilik Politikası",
  description,
  alternates: {
    canonical: "/starlit/gizlilik",
    languages: { tr: "/starlit/gizlilik", en: "/starlit/privacy" },
  },
  openGraph: {
    title: "Starlit Gizlilik Politikası",
    description,
    type: "article",
    locale: "tr_TR",
    url: "/starlit/gizlilik",
  },
};

export default function StarlitGizlilikPage() {
  const { html } = loadPolicy("GIZLILIK-POLITIKASI.md");
  return (
    <StarlitShell
      lang="tr"
      nav={[
        { href: "/starlit", label: "Starlit" },
        { href: "/starlit/privacy", label: "English", lang: "en" },
        { href: STARLIT_TERMS_URL, label: "Kullanım Koşulları (Apple)", external: true },
      ]}
    >
      <article
        className={`${starlitProse} [&_.starlit-meta]:text-[var(--foreground-muted)]`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </StarlitShell>
  );
}
