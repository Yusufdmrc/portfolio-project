"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Yusufdmrc",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/yusuf-demirci-9846141bb/",
    icon: Linkedin,
  },
];

const footerLinks = [
  {
    title: "Sayfalar",
    links: [
      { name: "Ana Sayfa", href: "/" },
      { name: "Hakkımda", href: "/about" },
      { name: "Projeler", href: "/projects" },
      { name: "Blog", href: "/blog" },
    ],
  },
  {
    title: "İletişim",
    links: [
      { name: "İletişim", href: "/contact" },
      { name: "GitHub", href: "https://github.com/Yusufdmrc" },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/yusuf-demirci-9846141bb/",
      },
    ],
  },
];

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />

      {/* Floating shapes */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl" />

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Yusuf Demirci
                </span>
              </Link>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Software Test Engineer & Full-Stack Developer. Test otomasyonu,
                web geliştirme ve yazılım kalitesi konularında uzmanlaşmış
                yazılım mühendisi.
              </p>
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-800/50 hover:bg-blue-600/20 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1, duration: 0.3 }}
                  >
                    <item.icon className="h-5 w-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer links */}
            {footerLinks.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + sectionIndex * 0.1 }}
              >
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.3 + sectionIndex * 0.1 + linkIndex * 0.05,
                      }}
                    >
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                        {...(link.href.startsWith("http") && {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        })}
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-gray-700/50"
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-sm text-gray-400 flex items-center">
                &copy; {new Date().getFullYear()} Yusuf Demirci. Tüm hakları
                saklıdır.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      )}
    </footer>
  );
}
