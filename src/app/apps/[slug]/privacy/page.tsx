import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PolicyShell, { policyProse } from "@/components/apps/PolicyShell";
import { apps, getApp, APPLE_EULA_URL } from "@/lib/apps";
import { loadPolicy } from "@/lib/app-policy";

export const dynamicParams = false;
export const generateStaticParams = () => apps.filter((a) => a.hasPolicy).map((a) => ({ slug: a.slug }));

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const app = getApp((await params).slug);
  if (!app) return {};
  const title = `${app.name} Privacy Policy`;
  const description = `${app.name} privacy policy: what data is processed, where it lives and how it is deleted.`;
  return {
    title,
    description,
    alternates: {
      canonical: `/apps/${app.slug}/privacy`,
      languages: { en: `/apps/${app.slug}/privacy`, tr: `/apps/${app.slug}/gizlilik` },
    },
    openGraph: { title, description, type: "article", locale: "en_US", url: `/apps/${app.slug}/privacy` },
  };
}

export default async function PrivacyPage({ params }: Props) {
  const app = getApp((await params).slug);
  if (!app?.hasPolicy) notFound();
  const { html } = loadPolicy(app.slug, "PRIVACY-POLICY.md");
  return (
    <PolicyShell
      app={app}
      lang="en"
      nav={[
        { href: `/apps/${app.slug}#support`, label: "Support" },
        { href: `/apps/${app.slug}/gizlilik`, label: "Türkçe", lang: "tr" },
        app.legalPages?.terms
          ? { href: `/apps/${app.slug}/terms`, label: "Terms of Use" }
          : { href: APPLE_EULA_URL, label: "Terms of Use (Apple)", external: true },
      ]}
    >
      <article className={policyProse} dangerouslySetInnerHTML={{ __html: html }} />
    </PolicyShell>
  );
}
