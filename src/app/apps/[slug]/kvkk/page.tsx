import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PolicyShell, { policyProse } from "@/components/apps/PolicyShell";
import { apps, getApp } from "@/lib/apps";
import { loadPolicy } from "@/lib/app-policy";

export const dynamicParams = false;
export const generateStaticParams = () => apps.filter((a) => a.legalPages?.kvkk).map((a) => ({ slug: a.slug }));

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const app = getApp((await params).slug);
  if (!app) return {};
  const title = `${app.name} KVKK Aydınlatma Metni`;
  const description = `${app.name} için 6698 sayılı KVKK kapsamında aydınlatma metni.`;
  return {
    title,
    description,
    alternates: { canonical: `/apps/${app.slug}/kvkk` },
    openGraph: { title, description, type: "article", locale: "tr_TR", url: `/apps/${app.slug}/kvkk` },
  };
}

export default async function KvkkPage({ params }: Props) {
  const app = getApp((await params).slug);
  if (!app?.legalPages?.kvkk) notFound();
  const { html } = loadPolicy(app.slug, "KVKK-AYDINLATMA-METNI.md");
  return (
    <PolicyShell
      app={app}
      lang="tr"
      nav={[
        { href: `/apps/${app.slug}#support`, label: "Destek" },
        { href: `/apps/${app.slug}/gizlilik`, label: "Gizlilik Politikası" },
        { href: `/apps/${app.slug}/kosullar`, label: "Kullanım Koşulları" },
      ]}
    >
      <article className={policyProse} dangerouslySetInnerHTML={{ __html: html }} />
    </PolicyShell>
  );
}
