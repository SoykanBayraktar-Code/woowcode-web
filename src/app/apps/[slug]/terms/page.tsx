import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PolicyShell, { policyProse } from "@/components/apps/PolicyShell";
import { apps, getApp } from "@/lib/apps";
import { loadPolicy } from "@/lib/app-policy";

export const dynamicParams = false;
export const generateStaticParams = () => apps.filter((a) => a.legalPages?.terms).map((a) => ({ slug: a.slug }));

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const app = getApp((await params).slug);
  if (!app) return {};
  const title = `${app.name} Terms of Use`;
  const description = `${app.name} terms of use: the service, subscription, responsibilities and legal information.`;
  return {
    title,
    description,
    alternates: {
      canonical: `/apps/${app.slug}/terms`,
      languages: { en: `/apps/${app.slug}/terms`, tr: `/apps/${app.slug}/kosullar` },
    },
    openGraph: { title, description, type: "article", locale: "en_US", url: `/apps/${app.slug}/terms` },
  };
}

export default async function TermsPage({ params }: Props) {
  const app = getApp((await params).slug);
  if (!app?.legalPages?.terms) notFound();
  const { html } = loadPolicy(app.slug, "TERMS-OF-USE.md");
  return (
    <PolicyShell
      app={app}
      lang="en"
      nav={[
        { href: `/apps/${app.slug}#support`, label: "Support" },
        { href: `/apps/${app.slug}/kosullar`, label: "Türkçe", lang: "tr" },
        { href: `/apps/${app.slug}/privacy`, label: "Privacy Policy" },
      ]}
    >
      <article className={policyProse} dangerouslySetInnerHTML={{ __html: html }} />
    </PolicyShell>
  );
}
