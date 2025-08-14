"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Code,
  TestTube,
} from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Modern Test Automation: Cypress ile E2E Testing",
    excerpt:
      "End-to-end testing süreçlerini optimize etmek için Cypress framework'ünün gücünden nasıl yararlanabiliriz? Bu yazıda modern test yaklaşımlarını ele alıyoruz.",
    content:
      "Test automation dünyasında Cypress, developer-friendly yaklaşımı ile öne çıkıyor...",
    author: "Yusuf Demirci",
    publishedAt: "2024-01-15",
    readingTime: "8 min",
    category: "Test Automation",
    tags: ["Cypress", "Testing", "Automation", "E2E"],
    image: "/images/blog-1.jpg",
  },
  {
    id: 2,
    title: "Next.js 14 ile Full-Stack Development",
    excerpt:
      "Next.js 14'ün yeni özellikleri ile modern web uygulamaları geliştirirken nelere dikkat etmeliyiz? Server Components, App Router ve daha fazlası.",
    content:
      "Next.js 14 ile birlikte gelen yenilikler web development dünyasını dönüştürüyor...",
    author: "Yusuf Demirci",
    publishedAt: "2024-01-08",
    readingTime: "12 min",
    category: "Web Development",
    tags: ["Next.js", "React", "Full-Stack", "TypeScript"],
    image: "/images/blog-2.jpg",
  },
  {
    id: 3,
    title: "API Testing Best Practices",
    excerpt:
      "RESTful API'lerin test edilmesinde kullanabileceğimiz en etkili yöntemler ve araçlar. Postman, Jest ve Supertest ile comprehensive testing.",
    content:
      "API testing, modern web uygulamalarının güvenilirliği için kritik öneme sahip...",
    author: "Yusuf Demirci",
    publishedAt: "2024-01-01",
    readingTime: "10 min",
    category: "API Testing",
    tags: ["API", "Testing", "Postman", "Jest"],
    image: "/images/blog-3.jpg",
  },
  {
    id: 4,
    title: "TypeScript ile Tip Güvenli Kod Yazımı",
    excerpt:
      "JavaScript'in tip güvenliği olmayan yapısını TypeScript ile nasıl güçlendirebiliriz? Advanced types, generics ve best practices.",
    content:
      "TypeScript, JavaScript'e static typing ekleyerek daha güvenilir kod yazmamızı sağlıyor...",
    author: "Yusuf Demirci",
    publishedAt: "2023-12-25",
    readingTime: "15 min",
    category: "Programming",
    tags: ["TypeScript", "JavaScript", "Types", "Programming"],
    image: "/images/blog-4.jpg",
  },
  {
    id: 5,
    title: "React Performance Optimization",
    excerpt:
      "React uygulamalarında performans optimizasyonu için kullanabileceğimiz teknikler. Memoization, lazy loading, code splitting ve daha fazlası.",
    content:
      "React uygulamalarının performansını artırmak için çeşitli teknikler kullanabiliriz...",
    author: "Yusuf Demirci",
    publishedAt: "2023-12-18",
    readingTime: "11 min",
    category: "React",
    tags: ["React", "Performance", "Optimization", "Frontend"],
    image: "/images/blog-5.jpg",
  },
  {
    id: 6,
    title: "Agile Testing Methodologies",
    excerpt:
      "Agile development süreçlerinde testing'in rolü ve etkili test stratejileri. Scrum, Kanban ve DevOps süreçlerinde QA integration.",
    content:
      "Agile metodolojilerde testing süreci development lifecycle'ın ayrılmaz bir parçası...",
    author: "Yusuf Demirci",
    publishedAt: "2023-12-10",
    readingTime: "9 min",
    category: "Methodology",
    tags: ["Agile", "Testing", "Scrum", "DevOps"],
    image: "/images/blog-6.jpg",
  },
];

const categories = [
  "All",
  "Test Automation",
  "Web Development",
  "API Testing",
  "Programming",
  "React",
  "Methodology",
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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Test Automation":
        return <TestTube className="w-4 h-4" />;
      case "Web Development":
      case "React":
        return <Code className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
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
              <div className="absolute inset-0 bg-black/20" />
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
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {blogPosts[0].readingTime}
                  </div>
                </div>
                <Link href={`/blog/${blogPosts[0].id}`}>
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
              {/* Post Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  {getCategoryIcon(post.category)}
                </div>
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
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readingTime}
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

                <Link href={`/blog/${post.id}`}>
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

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-8 text-center border border-blue-200/50 dark:border-blue-800/50">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Yeni Yazılardan Haberdar Olun
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Blog yazılarımı e-posta ile takip etmek ister misiniz? Yeni
              içeriklerden ilk siz haberdar olun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Button className="whitespace-nowrap">Abone Ol</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
