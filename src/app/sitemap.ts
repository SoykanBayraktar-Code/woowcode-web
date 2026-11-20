import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";
import { apps } from "@/lib/apps";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/apps`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];

  const appPages: MetadataRoute.Sitemap = apps.flatMap((app) => [
    { url: `${base}/apps/${app.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    ...(app.hasPolicy
      ? [
          { url: `${base}/apps/${app.slug}/privacy`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.4 },
          { url: `${base}/apps/${app.slug}/gizlilik`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.4 },
        ]
      : []),
  ]);

  const blogPages: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...appPages, ...blogPages];
}
