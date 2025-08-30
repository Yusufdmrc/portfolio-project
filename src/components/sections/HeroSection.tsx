"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { Badge } from "@/components/ui/badge";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Java",
  "Selenium",
  "Appium",
  "Jenkins",
  "Git",
];

export default function HeroSection() {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/YusufDemirci_CV.pdf";
    link.download = "YusufDemirci_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleNavigateToProjects = () => {
    router.push("/projects");
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Yusufdmrc",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/yusuf-demirci-9846141bb/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:yusuffdemirci10@gmail.com", label: "Email" },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.04] dark:bg-grid-white/[0.02] bg-[size:50px_50px]" />

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 -left-20 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-3xl opacity-15"
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium"
                whileHover={{ scale: 1.05 }}
              >
                👋 Merhaba, ben Yusuf Demirci
              </motion.div>

              <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                <span className="block">Yazılım Mühendisi </span>
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                Otomasyon, web geliştirme ve yazılım kalitesi konularında
                tecrübeli yazılım mühendisi olarak modern teknolojilerle
                kaliteli çözümler üretiyorum.
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Teknolojiler
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <Badge
                      variant="secondary"
                      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8"
                onClick={handleNavigateToProjects}
              >
                Projelerimi İncele
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
                onClick={handleDownloadCV}
              >
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                CV İndir
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Floating Elements */}
          <div className="relative">
            <motion.div
              className="relative z-10 w-full max-w-md mx-auto"
              animate={{ y: [-10, 10, -10] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="bg-gradient-to-br from-white/40 to-white/10 dark:from-gray-800/40 dark:to-gray-900/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 dark:border-gray-700/20 shadow-xl">
                <div className="text-center space-y-6">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white/30 dark:border-gray-700/30 shadow-2xl">
                    <Image
                      src="/images/yusuf-profile.jpeg"
                      alt="Yusuf Demirci"
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Yusuf Demirci
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        Software Engineer
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300">
                        <span className="text-sm">📍</span>
                        <span className="text-sm">İstanbul, Türkiye</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300">
                        <span className="text-sm">💼</span>
                        <span className="text-sm">
                          QA & Full-Stack Development
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating decorations */}
            <motion.div
              className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-60 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-8 -right-8 w-16 h-16 bg-gradient-to-br from-green-400 to-cyan-500 rounded-full opacity-50 blur-lg"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
