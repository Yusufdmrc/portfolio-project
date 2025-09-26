"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  TestTube,
  Laptop,
  Trophy,
  Calendar,
  BookOpen,
  Coffee,
  Zap,
} from "lucide-react";

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
    items: ["Node.js", "Express.js", "MongoDB", "REST API"],
  },
  {
    category: "Test & QA",
    items: ["Selenium", "Java", "TestNG", "Cucumber", "Appium", "Maven"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Jenkins", "Postman", "JIRA", "JMeter"],
  },
];

const experiences = [
  {
    title: "QA Tester",
    company: "Sisal Hub Türkiye",
    period: "Eylül 2024 - Devam Ediyor",
    description:
      "Java, Selenium, Appium, Jenkins, Postman, BrowserStack, CharlesProxy ",
    icon: TestTube,
  },
  {
    title: "Frontend Developer",
    company: "Arute Solutions",
    period: "Aralık 2023 - Ağustos 2024",
    description: "React, TypeScript, Tailwind CSS, React Native, Jira",
    icon: Code,
  },
  {
    title: "Frontend Developer Intern",
    company: "Arute Solutions",
    period: "Kasım 2023 - Aralık 2023",
    description: "React, JavaScript, HTML, CSS, Bootstrap",
    icon: Laptop,
  },
];

const stats = [
  { label: "Deneyim Yılı", value: "3+", icon: Calendar },
  { label: "Tamamlanan Proje", value: "15+", icon: Trophy },
  { label: "Günlük Kahve", value: "4", icon: Coffee },
  { label: "Öğrenme Hızı", value: "⚡", icon: Zap },
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
            Merhaba! Ben Yusuf, yazılım test mühendisi ve frontend developer
            tecrübem bulunmakta. Teknolojiye olan tutkum ve sürekli öğrenme
            isteğimle, kaliteli yazılım çözümleri geliştiriyorum.
          </motion.p>
        </motion.div>

        {/* Değerler ve İlkelerim */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Çalışma Yaklaşımım
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Yazılım geliştirirken ve test ederken beni yönlendiren temel
              değerler
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl border border-blue-200/50 dark:border-blue-700/50"
            >
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Detay Odaklı
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Her kod satırını özenle hazırlıyorum
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl border border-green-200/50 dark:border-green-700/50"
            >
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Takım Çalışması
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                İş birliği ve bilgi paylaşımını önemsiyorum
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl border border-purple-200/50 dark:border-purple-700/50"
            >
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Sürekli Öğrenme
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Teknoloji hızla değişiyor, ben de onunla birlikte gelişiyorum
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl border border-orange-200/50 dark:border-orange-700/50"
            >
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                İnovasyon
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Yeni çözümler ve yaklaşımlar keşfetmeyi seviyorum
              </p>
            </motion.div>
          </div>
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
                Test yaşam döngüsünün tüm aşamalarında aktif rol alan, test
                senaryoları tasarlayan ve web ile mobil (iOS ve Android)
                uygulamalarda kapsamlı manuel ve otomasyon testleri
                gerçekleştiren bir yazılım test mühendisiyim.
              </p>
              <p>
                Üniversite dönemimde frontend developer olarak çalıştım. Bu
                tecrübe, kullanıcı arayüzü davranışlarını daha iyi analiz etmemi
                ve geliştiricilerle etkili iş birliği kurmamı sağladı. Böylece
                hem teknik kalite hem de kullanıcı deneyimi açısından güçlü
                çözümler üretebiliyorum.
              </p>
              <p>
                Sıfırdan eksiksiz web uygulamaları, mobil uygulamalar ve
                otomasyon çözümleri tasarlama ve geliştirme yeteneğine sahibim.
                Geliştirme uzmanlığımı QA deneyimimle birleştirerek, React,
                React Native, Next.js ve diğer çerçeveler dahil olmak üzere hem
                web hem de mobil platformlar için duyarlı, kullanıcı dostu ve
                performans açısından optimize edilmiş uygulamalar oluşturuyorum.
              </p>
              <p>
                Otomasyon tarafında, özel test otomasyon çerçeveleri tasarlıyor
                ve uyguluyorum, bunları CI/CD süreçlerine entegre ediyor ve iş
                hedefleri ve kalite standartlarıyla uyumlu hale getiriyorum.
                Gereksinimlerin toplanmasından geliştirmeye, titiz testlerden
                dağıtımına kadar tüm yazılım geliştirme yaşam döngüsü boyunca
                çalışabilme becerim, hem işlevsel hem de güvenilir uçtan uca
                çözümler sunmamı sağlıyor.
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
