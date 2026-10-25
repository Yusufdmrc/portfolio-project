import { ArrowLeft, ArrowUpRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((entry) => entry.id !== post.id && (
      entry.category === post.category || entry.tags.some((tag) => post.tags.includes(tag))
    ))
    .slice(0, 2);

  return (
    <div className="site-page page-width article-page">
      <Link href="/blog" className="text-link article-back"><ArrowLeft size={15} /> Tüm yazılara dön</Link>
      <header className="page-heading article-heading">
        <span className="eyebrow">{post.category} <span className="eyebrow-divider">/</span> Yusuf Demirci</span>
        <h1>{post.title}<span className="hero-period">.</span></h1>
        <p>{post.excerpt}</p>
        <div className="article-kicker">
          <Calendar size={14} />
          <span>{new Date(post.publishedAt).toLocaleDateString("tr-TR")}</span>
          <span>·</span>
          <Clock size={14} />
          <span>{post.readingTime}</span>
        </div>
        <div className="project-tags article-tags">{post.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </header>

      <div className="article-hero-image">
        <Image src={post.image} alt="" fill priority sizes="(max-width: 820px) 100vw, 820px" />
      </div>

      <article className="article-content">
        {post.content.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.bullets && (
              <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            )}
          </section>
        ))}
      </article>

      {post.sources && (
        <section className="article-sources" aria-labelledby="sources-heading">
          <h2 id="sources-heading">Kaynaklar</h2>
          <ul>
            {post.sources.map((source) => (
              <li key={source.href}>
                <a href={source.href} target="_blank" rel="noopener noreferrer">
                  {source.title}<ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {relatedPosts.length > 0 && (
        <section className="article-related" aria-labelledby="related-heading">
          <span className="eyebrow">Okumaya devam et</span>
          <h2 id="related-heading" className="content-heading">İlgili yazılar</h2>
          {relatedPosts.map((relatedPost) => (
            <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
              <span className="article-kicker">{relatedPost.category} <span>·</span> {relatedPost.readingTime}</span>
              <h3>{relatedPost.title}</h3>
              <span className="text-link">Yazıyı aç <ArrowUpRight size={14} /></span>
            </Link>
          ))}
        </section>
      )}
    </div>
  );
}
