import type { Metadata } from "next";
import StarlitShell, { STARLIT_TERMS_URL, starlitProse } from "@/components/starlit/StarlitShell";
import { loadPolicy } from "@/lib/starlit-policy";

export const dynamic = "force-static";

const description =
  "Starlit privacy policy: what data is processed, where it lives and how it is deleted.";

export const metadata: Metadata = {
  title: "Starlit Privacy Policy",
  description,
  alternates: {
    canonical: "/starlit/privacy",
    languages: { en: "/starlit/privacy", tr: "/starlit/gizlilik" },
  },
  openGraph: {
    title: "Starlit Privacy Policy",
    description,
    type: "article",
    locale: "en_US",
    url: "/starlit/privacy",
  },
};

export default function StarlitPrivacyPage() {
  const { html } = loadPolicy("PRIVACY-POLICY.md");
  return (
    <StarlitShell
      lang="en"
      nav={[
        { href: "/starlit", label: "Starlit" },
        { href: "/starlit/gizlilik", label: "Türkçe", lang: "tr" },
        { href: STARLIT_TERMS_URL, label: "Terms of Use (Apple)", external: true },
      ]}
    >
      <article
        className={`${starlitProse} [&_.starlit-meta]:text-[var(--foreground-muted)]`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </StarlitShell>
  );
}
