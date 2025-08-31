"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "Next.js ile Full-Stack Web Projesi Oluşturma Yol Haritası",
    excerpt:
      "Sıfırdan Next.js ile modern full-stack web uygulaması geliştirme sürecinin detaylı rehberi. Database entegrasyonu, authentication, deployment ve best practices.",
    content: `Next.js, React tabanlı full-stack web uygulamaları geliştirmek için en popüler framework'lerden biri haline geldi. Bu rehberde, sıfırdan bir proje oluşturma sürecini adım adım ele alacağız.

## Proje Kurulumu
Next.js projesi oluşturmak için öncelikle aşağıdaki komutu kullanıyoruz:
\`\`\`bash
npx create-next-app@latest my-project --typescript --tailwind --eslint
\`\`\`

## Database Entegrasyonu
Modern web uygulamaları için veritabanı entegrasyonu kritik önemde. Prisma ORM ile PostgreSQL kullanarak type-safe database işlemleri gerçekleştiriyoruz.

## Authentication Sistemi
NextAuth.js ile güvenli authentication sistemi kuruyoruz. Google, GitHub gibi OAuth providers ile sosyal medya girişi sağlıyoruz.

## Deployment Süreci
Vercel platformu ile hızlı ve güvenilir deployment işlemi gerçekleştiriyoruz.`,
    author: "Yusuf Demirci",
    publishedAt: "2025-08-30",
    readingTime: "15 min",
    category: "Web Development",
    tags: ["Next.js", "Full-Stack", "React", "TypeScript", "Prisma"],
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    slug: "nextjs-fullstack-yol-haritasi",
  },
  {
    id: 2,
    title: "Test Otomasyon Projelerindeki CI/CD Süreçleri",
    excerpt:
      "Modern test otomasyon projelerinde sürekli entegrasyon ve sürekli dağıtım süreçlerinin nasıl kurulacağı. GitHub Actions, Jenkins ve Azure DevOps örnekleri.",
    content: `Test otomasyonu projelerinde CI/CD süreçleri, kaliteli yazılım teslimatının temelidir. Bu yazıda, test otomasyonunu CI/CD pipeline'larına entegre etme yöntemlerini inceleyeceğiz.

## GitHub Actions ile CI/CD
GitHub Actions, test otomasyonu için mükemmel bir platform sunar. Workflow dosyaları ile otomatik test çalıştırma süreçlerini yönetebiliriz.

## Jenkins Entegrasyonu
Jenkins ile test automation framework'ümüzü entegre ederek, scheduled test runs ve parametreli test çalıştırma işlemlerini gerçekleştirebiliriz.

## Test Raporlama
Allure, ExtentReports gibi araçlarla detaylı test raporları oluşturup, CI/CD süreçlerine entegre ediyoruz.

## Paralel Test Çalıştırma
Test Suite'lerin paralel çalıştırılması ile test süresini önemli ölçüde azaltabiliriz.`,
    author: "Yusuf Demirci",
    publishedAt: "2025-08-26",
    readingTime: "12 min",
    category: "Test Automation",
    tags: ["CI/CD", "Testing", "GitHub Actions", "Jenkins", "Automation"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    slug: "test-otomasyon-cicd-surecleri",
  },
  {
    id: 3,
    title: "TypeScript ile Tip Güvenli Kod Yazımı",
    excerpt:
      "JavaScript'in tip güvenliği olmayan yapısını TypeScript ile nasıl güçlendirebiliriz? Advanced types, generics, utility types ve best practices.",
    content: `TypeScript, JavaScript'e static typing ekleyerek daha güvenilir ve maintainable kod yazmamızı sağlıyor. Bu yazıda TypeScript'in advanced özelliklerini inceleyeceğiz.

## Type System Temelleri
TypeScript'in type system'inin temel prensipleri ve primitive type'lar.

## Interface vs Type
Interface ve Type arasındaki farklar ve hangi durumda hangisini kullanacağımız.

## Generic Types
Generic type'lar ile reusable ve type-safe fonksiyonlar yazma.

## Utility Types
TypeScript'in built-in utility type'ları: Partial, Pick, Omit, Record ve diğerleri.

## Advanced Type Patterns
Conditional types, mapped types ve template literal types ile complex type operations.`,
    author: "Yusuf Demirci",
    publishedAt: "2025-08-20",
    readingTime: "18 min",
    category: "Programming",
    tags: ["TypeScript", "JavaScript", "Types", "Programming", "Development"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    slug: "typescript-tip-guvenli-kod",
  },
  {
    id: 4,
    title: "React Performance Optimization",
    excerpt:
      "React uygulamalarında performans optimizasyonu için kullanabileceğimiz teknikler. Memoization, lazy loading, code splitting, virtual scrolling ve daha fazlası.",
    content: `React uygulamalarının performansını artırmak için çeşitli teknikler kullanabiliriz. Bu yazıda, production-ready React uygulamaları için kritik optimizasyon yöntemlerini ele alacağız.

## React.memo ve useMemo
Component re-rendering'ini optimize etmek için React.memo ve useMemo hook'larının doğru kullanımı.

## Code Splitting
React.lazy ve Suspense ile dynamic import'lar kullanarak bundle size'ı optimize etme.

## Virtual Scrolling
Büyük listeler için virtual scrolling teknikleri ve react-window kullanımı.

## Image Optimization
Next.js Image component'i ile lazy loading ve responsive image'lar.

## Bundle Analysis
Webpack Bundle Analyzer ile bundle size analizi ve optimization stratejileri.`,
    author: "Yusuf Demirci",
    publishedAt: "2025-08-14",
    readingTime: "14 min",
    category: "React",
    tags: ["React", "Performance", "Optimization", "Frontend", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80",
    slug: "react-performance-optimization",
  },
];

const categories = [
  "All",
  "Web Development",
  "Test Automation",
  "Programming",
  "React",
  "API Testing",
];

export default function BlogPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="py-24 sm:py-32 min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-800 dark:to-indigo-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center mb-16"
        >
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent mb-6">
            Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Yazılım geliştirme, test otomasyonu ve teknoloji dünyasından
            deneyimlerimi, öğrendiklerimi ve görüşlerimi paylaştığım alan.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "primary" : "outline"}
              size="sm"
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Featured Post */}
        {blogPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
              <Image
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-600/90" />
              <div className="relative z-10 max-w-4xl">
                <Badge
                  variant="secondary"
                  className="mb-4 text-white bg-white/20"
                >
                  Öne Çıkan Yazı
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center space-x-4 text-sm text-blue-200 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(blogPosts[0].publishedAt).toLocaleDateString(
                      "tr-TR"
                    )}
                  </div>
                </div>
                <Link href={`/blog/${blogPosts[0].slug}`}>
                  <Button variant="secondary" size="lg" className="group">
                    Yazıyı Oku
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.slice(1).map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Post Image */}
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.publishedAt).toLocaleDateString("tr-TR")}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-6">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {post.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{post.tags.length - 3}
                    </Badge>
                  )}
                </div>

                <Link href={`/blog/${post.slug}`}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="group p-0 h-auto"
                  >
                    Devamını Oku
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
