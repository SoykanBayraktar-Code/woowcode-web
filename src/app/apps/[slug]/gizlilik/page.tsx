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
  const title = `${app.name} Gizlilik Politikası`;
  const description = `${app.name} gizlilik politikası: hangi veriler işlenir, nerede saklanır ve nasıl silinir.`;
  return {
    title,
    description,
    alternates: {
      canonical: `/apps/${app.slug}/gizlilik`,
      languages: { en: `/apps/${app.slug}/privacy`, tr: `/apps/${app.slug}/gizlilik` },
    },
    openGraph: { title, description, type: "article", locale: "tr_TR", url: `/apps/${app.slug}/gizlilik` },
  };
}

export default async function GizlilikPage({ params }: Props) {
  const app = getApp((await params).slug);
  if (!app?.hasPolicy) notFound();
  const { html } = loadPolicy(app.slug, "GIZLILIK-POLITIKASI.md");
  return (
    <PolicyShell
      app={app}
      lang="tr"
      nav={[
        { href: `/apps/${app.slug}#support`, label: "Destek" },
        { href: `/apps/${app.slug}/privacy`, label: "English", lang: "en" },
        { href: APPLE_EULA_URL, label: "Kullanım Koşulları (Apple)", external: true },
      ]}
    >
      <article className={policyProse} dangerouslySetInnerHTML={{ __html: html }} />
    </PolicyShell>
  );
}
