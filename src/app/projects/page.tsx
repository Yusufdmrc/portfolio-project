"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "E-Commerce Test Automation",
    description:
      "Kapsamlı e-ticaret platformu için geliştirilmiş Cypress tabanlı test otomasyon framework'ü. API testleri, UI testleri ve performans testlerini içerir.",
    image: "/images/project-1.jpg",
    technologies: ["Cypress", "TypeScript", "JavaScript", "Node.js", "MongoDB"],
    github: "https://github.com/Yusufdmrc/ecommerce-test",
    demo: "https://demo-ecommerce-test.vercel.app",
    stars: 24,
    forks: 8,
    category: "Test Automation",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "React ve Node.js kullanılarak geliştirilen modern görev yönetimi uygulaması. Real-time güncellemeler, drag & drop özelliği ve responsive tasarım.",
    image: "/images/project-2.jpg",
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Socket.io",
      "Tailwind CSS",
    ],
    github: "https://github.com/Yusufdmrc/task-manager",
    demo: "https://task-manager-demo.vercel.app",
    stars: 18,
    forks: 5,
    category: "Full Stack",
  },
  {
    id: 3,
    title: "API Testing Framework",
    description:
      "RESTful API'ler için comprehensive testing framework. Otomatik raporlama, data validation ve CI/CD entegrasyonu ile.",
    image: "/images/project-3.jpg",
    technologies: ["Jest", "Supertest", "Node.js", "Express.js", "Docker"],
    github: "https://github.com/Yusufdmrc/api-testing",
    demo: "https://api-testing-demo.com",
    stars: 31,
    forks: 12,
    category: "API Testing",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "Next.js ve Tailwind CSS ile geliştirilmiş modern portfolio website. Dark mode, animasyonlar ve responsive tasarım.",
    image: "/images/project-4.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Yusufdmrc/portfolio",
    demo: "https://yusufdemirci.dev",
    stars: 15,
    forks: 3,
    category: "Frontend",
  },
  {
    id: 5,
    title: "Mobile App Testing Suite",
    description:
      "React Native uygulamaları için kapsamlı test suite. Unit testler, integration testler ve e2e testler içerir.",
    image: "/images/project-5.jpg",
    technologies: ["React Native", "Detox", "Jest", "Appium", "TypeScript"],
    github: "https://github.com/Yusufdmrc/mobile-testing",
    demo: "https://mobile-testing-demo.com",
    stars: 22,
    forks: 7,
    category: "Mobile Testing",
  },
  {
    id: 6,
    title: "Data Visualization Dashboard",
    description:
      "D3.js ve React kullanılarak geliştirilmiş interaktif veri görselleştirme dashboard'u. Real-time data processing.",
    image: "/images/project-6.jpg",
    technologies: ["React", "D3.js", "Node.js", "MongoDB", "WebSocket"],
    github: "https://github.com/Yusufdmrc/data-viz",
    demo: "https://data-viz-demo.vercel.app",
    stars: 27,
    forks: 9,
    category: "Data Visualization",
  },
];

const categories = [
  "All",
  "Test Automation",
  "Full Stack",
  "API Testing",
  "Frontend",
  "Mobile Testing",
  "Data Visualization",
];

export default function ProjectsPage() {
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
            Test otomasyonu, web geliştirme ve yazılım kalitesi alanındaki
            çalışmalarım. Her proje, farklı teknolojiler ve metodolojiler
            kullanılarak geliştirildi.
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

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
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
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" className="flex-1 group/btn">
                      <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      Code
                    </Button>
                  </Link>
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 group/btn"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                      Demo
                    </Button>
                  </Link>
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
