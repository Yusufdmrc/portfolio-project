"use client";

import { ArrowUpRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { blogCategories, blogPosts } from "@/data/blog-posts";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tümü");
  const filteredPosts = selectedCategory === "Tümü"
    ? blogPosts
    : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="site-page page-width">
      <header className="page-heading">
        <span className="eyebrow">Yazılım <span className="eyebrow-divider">/</span> Geliştirme, test ve kariyer</span>
        <h1>Yazılar<span className="hero-period">.</span></h1>
        <p>Web ve mobil geliştirme, test otomasyonu ve mesleki deneyimlerim üzerine notlar.</p>
      </header>

      <div className="journal-filters" role="group" aria-label="Yazıları kategoriye göre filtrele">
        {blogCategories.map((category) => (
          <button
            key={category}
            type="button"
            className={`filter-button${selectedCategory === category ? " is-selected" : ""}`}
            aria-pressed={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredPosts.length > 0 ? (
        <>
          <Link className="journal-feature" href={`/blog/${filteredPosts[0].slug}`}>
            <div className="journal-feature-art">
              <Image src={filteredPosts[0].image} alt="" fill priority sizes="(max-width: 650px) 100vw, 55vw" />
            </div>
            <div className="journal-feature-copy">
              <div className="article-kicker"><span>ÖNE ÇIKAN</span><span>{filteredPosts[0].category}</span></div>
              <h2>{filteredPosts[0].title}</h2>
              <p>{filteredPosts[0].excerpt}</p>
              <div className="article-kicker"><Calendar size={14} /><span>{new Date(filteredPosts[0].publishedAt).toLocaleDateString("tr-TR")}</span></div>
              <span className="text-link" style={{ marginTop: 19 }}>Yazıyı oku <ArrowUpRight size={16} /></span>
            </div>
          </Link>

          <div className="journal-grid">
            {filteredPosts.slice(1).map((post) => (
              <Link className="journal-card" href={`/blog/${post.slug}`} key={post.id}>
                <div className="article-kicker"><span>{post.category}</span><span>{new Date(post.publishedAt).toLocaleDateString("tr-TR")}</span></div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <div className="journal-card-bottom"><span>{post.tags.slice(0, 3).join(" · ")}</span><ArrowUpRight size={15} /></div>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <p className="journal-empty">Bu kategoride henüz bir yazı yok.</p>
      )}
    </div>
  );
}
