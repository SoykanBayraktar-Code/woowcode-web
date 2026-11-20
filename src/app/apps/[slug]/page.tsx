import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { apps, getApp } from "@/lib/apps";
import { ldJson, softwareApplicationLd } from "@/lib/jsonld";
import AppDetail from "./AppDetail";

export const dynamicParams = false;

export function generateStaticParams() {
  return apps.map((a) => ({ slug: a.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const app = getApp((await params).slug);
  if (!app) return {};
  const title = `${app.name} — ${app.tagline.TR.replace(/\.$/, "")}`;
  return {
    title,
    description: app.description.TR,
    alternates: { canonical: `/apps/${app.slug}` },
    openGraph: {
      title,
      description: app.description.TR,
      url: `/apps/${app.slug}`,
      ...(app.hasIcon ? { images: [{ url: `/apps/${app.slug}/icon.png`, width: 256, height: 256 }] } : {}),
    },
    // iPhone Safari'de sayfanın üstünde "Aç / İndir" bandı (Smart App Banner)
    ...(app.appStoreId ? { itunes: { appId: app.appStoreId } } : {}),
  };
}

export default async function AppPage({ params }: Props) {
  const app = getApp((await params).slug);
  if (!app) notFound();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(softwareApplicationLd(app)) }} />
      <AppDetail slug={app.slug} />
    </>
  );
}
