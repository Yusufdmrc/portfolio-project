"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Huminex Website",
    description:
      "Huminex firması için geliştirilmiş modern kurumsal web sitesi. Next.js 14, TypeScript ve Tailwind CSS kullanılarak responsive tasarım ilkeleriyle oluşturulmuş. SEO optimizasyonu, çok dilli destek ve performans odaklı yapı ile kullanıcı deneyimi ön planda tutulmuş.",
    image: "/images/project-1.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Vercel"],
    demo: "https://website-g69i.vercel.app/tr",
    stars: 24,
    forks: 8,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Selenium Cucumber Test Automation",
    description:
      "Web uygulamaları için kapsamlı test otomasyon framework'ü. Page Object Model (POM) tasarım deseni, Cucumber BDD yaklaşımı ve TestNG test yönetimi ile geliştirilmiş. Cross-browser testing, paralel test çalıştırma ve detaylı raporlama özellikleri içermektedir.",
    image: "/images/project-2.jpg",
    technologies: ["Selenium", "Java", "TestNG", "Cucumber", "Maven"],
    github: "https://github.com/Yusufdmrc/selenium-project",
    stars: 18,
    forks: 5,
    category: "Test Automation",
  },
  {
    id: 3,
    title: "Appium Cucumber Test Automation",
    description:
      "Android ve iOS mobil uygulamaları için geliştirilmiş test otomasyon çerçevesi. Appium WebDriver, Cucumber BDD ve TestNG kullanarak cross-platform mobil test otomasyonu sağlar. Real device ve emulator desteği ile kapsamlı mobil test senaryoları içerir.",
    image: "/images/project-3.jpg",
    technologies: ["Appium", "Java", "TestNG", "Cucumber", "Maven"],
    github: "https://github.com/Yusufdmrc/appium-project",
    stars: 31,
    forks: 12,
    category: "Mobile Testing",
  },
  {
    id: 4,
    title: "Postman API Test Project",
    description:
      "RESTful API'ler için kapsamlı test otomasyon suite'i. Postman Collections, Newman CLI runner ve GitHub Actions CI/CD entegrasyonu ile otomatik API testi. Request/Response validation, schema validation, environment management ve detaylı test raporlama sistemi.",
    image: "/images/project-4.jpg",
    technologies: ["Postman", "Newman", "RESTful API", "GitHub Actions"],
    github: "https://github.com/Yusufdmrc/postman-api-project",
    stars: 15,
    forks: 3,
    category: "API Testing",
  },
  {
    id: 5,
    title: "Blog App",
    description:
      "Modern ve kullanıcı dostu blog platformu. Next.js 13 App Router, NextAuth.js ile Google/GitHub authentication, MongoDB Atlas veritabanı entegrasyonu. Rich text editor, kategori sistemi, yorum özelliği ve responsive tasarım ile complete blog çözümü.",
    image: "/images/project-5.jpg",
    technologies: ["Next.js", "React", "NextAuth.js", "MongoDB", "TypeScript"],
    github: "https://github.com/Yusufdmrc/nextjs-blog-app",
    stars: 22,
    forks: 7,
    category: "Full Stack",
  },
  {
    id: 6,
    title: "E-Commerce Project",
    description:
      "Full-stack e-ticaret platformu. Next.js 14, Prisma ORM ile PostgreSQL veritabanı, Stripe payment integration, NextAuth.js authentication sistemi. Ürün yönetimi, sepet işlemleri, sipariş takibi, admin panel ve güvenli ödeme sistemi içeren complete e-commerce solution.",
    image: "/images/project-6.jpg",
    technologies: ["Next.js", "Prisma", "Stripe", "NextAuth.js", "TypeScript"],
    github: "https://github.com/Yusufdmrc/next.js-e-commerce",
    stars: 27,
    forks: 9,
    category: "Full Stack",
  },
];

const categories = [
  "All",
  "Test Automation",
  "Full Stack",
  "API Testing",
  "Mobile Testing",
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filtrelenmiş projeleri hesapla
  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "All" || project.category === selectedCategory
  );

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
            Projelerim
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Otomasyon, web geliştirme ve yazılım kalitesi alanındaki
            çalışmalarım. Her proje, farklı teknolojiler ve metodolojiler
            kullanılarak geliştirildi.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === selectedCategory ? "primary" : "outline"}
              size="sm"
              className="mb-2 transition-all duration-200 hover:scale-105"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Project Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center mb-8"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {selectedCategory === "All"
              ? `Toplam ${filteredProjects.length} proje`
              : `${selectedCategory} kategorisinde ${filteredProjects.length} proje`}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={selectedCategory} // Key eklendi animasyon için
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold text-blue-300/30 dark:text-blue-700/30">
                    {project.id}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      {project.stars}
                    </div>
                    <div className="flex items-center">
                      <GitFork className="w-4 h-4 mr-1" />
                      {project.forks}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-6">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button size="sm" className="w-full group/btn">
                        <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                        Code
                      </Button>
                    </Link>
                  )}
                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full group/btn"
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                        Demo
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Daha Fazla Proje
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            GitHub profilimde daha fazla proje ve katkılarımı
            inceleyebilirsiniz.
          </p>
          <Link
            href="https://github.com/Yusufdmrc"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Button size="lg">
              <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              GitHub Profili
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
