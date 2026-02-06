import { Metadata } from "next";
import { getAllPosts, getFeaturedPosts, getAllCategories } from "@/lib/blog";
import BlogCard from "@/components/ui/BlogCard";
import BlogHero from "./BlogHero";
import BlogFilters from "./BlogFilters";

export const metadata: Metadata = {
  title: "Blog | Teknoloji ve İnovasyon Yazıları",
  description:
    "Otonom sistemler, yapay zeka, dijital ikiz, veri mühendisliği ve SaaS geliştirme hakkında güncel yazılar ve rehberler.",
  openGraph: {
    title: "WOOWCODE Blog | Teknoloji ve İnovasyon Yazıları",
    description:
      "Otonom sistemler, yapay zeka, dijital ikiz, veri mühendisliği ve SaaS geliştirme hakkında güncel yazılar ve rehberler.",
    type: "website",
  },
};

export default function BlogPage() {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  const categories = getAllCategories();
  const regularPosts = allPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <BlogHero />

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8">
              <span className="neon-text">Öne Çıkan</span> Yazılar
            </h2>
            <div className="space-y-8">
              {featuredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12 lg:py-16 bg-[var(--background-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <BlogFilters categories={categories} />

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {regularPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          {/* Load More - Optional */}
          {allPosts.length > 6 && (
            <div className="text-center mt-12">
              <button className="px-8 py-3 border border-[var(--border-color)] text-[var(--foreground)] rounded-xl hover:border-[var(--neon-blue)] hover:text-[var(--neon-blue)] transition-colors">
                Daha Fazla Yükle
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-[var(--foreground)]">Yeni yazılardan </span>
            <span className="neon-text">haberdar olun</span>
          </h2>
          <p className="text-[var(--foreground-muted)] mb-8 max-w-2xl mx-auto">
            Teknoloji, AI ve dijital dönüşüm hakkında en güncel içerikleri
            haftalık bültenimizle alın.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1 px-4 py-3 rounded-xl bg-[var(--background-secondary)] border border-[var(--border-color)] text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:outline-none focus:border-[var(--neon-blue)] transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] text-[var(--background)] font-semibold rounded-xl hover:opacity-90 transition-opacity"
            >
              Abone Ol
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
