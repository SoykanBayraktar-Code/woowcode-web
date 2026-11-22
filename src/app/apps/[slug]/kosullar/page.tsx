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
  const title = `${app.name} Kullanım Koşulları`;
  const description = `${app.name} kullanım koşulları: hizmet, abonelik, sorumluluklar ve yasal bilgiler.`;
  return {
    title,
    description,
    alternates: {
      canonical: `/apps/${app.slug}/kosullar`,
      languages: { en: `/apps/${app.slug}/terms`, tr: `/apps/${app.slug}/kosullar` },
    },
    openGraph: { title, description, type: "article", locale: "tr_TR", url: `/apps/${app.slug}/kosullar` },
  };
}

export default async function KosullarPage({ params }: Props) {
  const app = getApp((await params).slug);
  if (!app?.legalPages?.terms) notFound();
  const { html } = loadPolicy(app.slug, "KULLANIM-KOSULLARI.md");
  return (
    <PolicyShell
      app={app}
      lang="tr"
      nav={[
        { href: `/apps/${app.slug}#support`, label: "Destek" },
        { href: `/apps/${app.slug}/terms`, label: "English", lang: "en" },
        { href: `/apps/${app.slug}/gizlilik`, label: "Gizlilik Politikası" },
      ]}
    >
      <article className={policyProse} dangerouslySetInnerHTML={{ __html: html }} />
    </PolicyShell>
  );
}
