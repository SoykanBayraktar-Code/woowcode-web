import { Metadata } from "next";
import { getAllPosts, getAllCategories } from "@/lib/blog";
import BlogIndex from "./BlogIndex";

const description = "Ürün geliştirme, yapay zekâ ve teknoloji üzerine WOOWCODE yazıları ve rehberleri.";

export const metadata: Metadata = {
  title: "Blog | Notlar & Rehberler",
  description,
  alternates: { canonical: "/blog" },
  openGraph: { title: "WOOWCODE Blog", description, type: "website" },
};

export default function BlogPage() {
  return <BlogIndex posts={getAllPosts()} categories={getAllCategories()} />;
}
