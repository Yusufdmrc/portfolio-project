"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Code, TestTube, Laptop, Users, Trophy } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML/CSS",
      "JavaScript",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "REST API",
      "GraphQL",
    ],
  },
  {
    category: "Test & QA",
    items: [
      "Cypress",
      "Jest",
      "Selenium",
      "Test Automation",
      "Manual Testing",
      "API Testing",
    ],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "AWS", "Postman", "JIRA", "VS Code"],
  },
];

const experiences = [
  {
    title: "Software Test Engineer",
    company: "Tech Company",
    period: "2022 - Present",
    description:
      "Test automation framework geliştirme, API testleri, end-to-end testing",
    icon: TestTube,
  },
  {
    title: "Full-Stack Developer",
    company: "Development Agency",
    period: "2021 - 2022",
    description:
      "React, Node.js ile web uygulaması geliştirme, veritabanı yönetimi",
    icon: Code,
  },
  {
    title: "Junior Developer",
    company: "Software Startup",
    period: "2020 - 2021",
    description:
      "Frontend geliştirme, kullanıcı arayüzü tasarımı, responsive tasarım",
    icon: Laptop,
  },
];

const stats = [
  { label: "Projeler Tamamlandı", value: "50+", icon: Trophy },
  { label: "Test Senaryosu", value: "1000+", icon: TestTube },
  { label: "Kod Satırı", value: "100K+", icon: Code },
  { label: "Takım Üyeleri", value: "20+", icon: Users },
];

export default function AboutPage() {
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
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center mb-16"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent mb-6"
          >
            Hakkımda
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            Merhaba! Ben Yusuf Demirci, yazılım test mühendisi ve full-stack
            developer. Teknolojiye olan tutkum ve sürekli öğrenme isteğimle,
            kaliteli yazılım çözümleri geliştiriyorum.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                <stat.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Hikayem
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Yazılım geliştirme dünyasına olan ilgim üniversite yıllarımda
                başladı. İlk projelerimden bugüne kadar, kaliteli kod yazmanın
                ve titiz test süreçlerinin önemini kavrayarak bu alanda
                uzmanlaştım.
              </p>
              <p>
                Test otomasyonu konusundaki uzmanlığımı, full-stack geliştirme
                becerileriyle birleştirerek, hem teknik hem de fonksiyonel
                açıdan mükemmel ürünler ortaya çıkarmaya odaklandım.
              </p>
              <p>
                Sürekli öğrenmeye ve kendimi geliştirmeye olan tutkum,
                teknolojideki yenilikleri yakından takip etmeme ve projelerimde
                modern çözümler kullanmama olanak sağlıyor.
              </p>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Deneyim
            </h2>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <exp.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 text-sm">
                        {exp.company}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        {exp.period}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Teknik Yetenekler
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
