"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { NavItem } from "@/types";

const navigation: NavItem[] = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hakkımda", href: "/about" },
  { name: "Projeler", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "İletişim", href: "/contact" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && systemTheme)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      x: "0%",
      transition: {
        duration: 0.3,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-white/10 dark:bg-black/20 backdrop-blur-lg border-b border-white/10 shadow-lg shadow-black/5"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Global">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex lg:flex-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href="/" className="-m-1.5 p-1.5 group">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <span className="text-white font-bold text-lg">YD</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <div className="hidden sm:block">
                    <div className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      Yusuf Demirci
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                      Software Engineer
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Mobile menu button */}
            <div className="flex items-center space-x-4 lg:hidden">
              {/* Mobile Dark Mode Toggle */}
              <motion.button
                onClick={toggleDarkMode}
                className="p-2.5 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </motion.button>

              <motion.button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
                onClick={() => setMobileMenuOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="sr-only">Ana menüyü aç</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </motion.button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden lg:flex lg:gap-x-2 lg:items-center">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href={item.href}
                    className="relative text-sm font-semibold leading-6 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 px-4 py-2.5 rounded-xl group hover:bg-white/15 dark:hover:bg-white/5 backdrop-blur-sm"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 dark:from-blue-400/5 dark:to-indigo-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      layoutId={`nav-${item.name}`}
                    />
                    <span className="absolute inset-x-2 bottom-1 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                  </Link>
                </motion.div>
              ))}

              {/* Desktop Dark Mode Toggle */}
              <div className="ml-4 pl-4 border-l border-gray-200/50 dark:border-gray-700/50">
                <motion.button
                  onClick={toggleDarkMode}
                  className="p-2.5 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-white/15 dark:hover:bg-white/5 transition-all duration-200 backdrop-blur-sm hover:text-blue-600 dark:hover:text-blue-400"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Toggle dark mode"
                >
                  <motion.div
                    initial={false}
                    animate={{ rotate: darkMode ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {darkMode ? (
                      <Sun className="h-5 w-5" />
                    ) : (
                      <Moon className="h-5 w-5" />
                    )}
                  </motion.div>
                </motion.button>
              </div>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-white/30 dark:bg-gray-900/30 backdrop-blur-md lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile menu panel */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/98 dark:bg-gray-900/98 backdrop-blur-2xl px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-200/30 dark:sm:ring-gray-700/30 shadow-xl lg:hidden"
            >
              {/* Mobile menu header */}
              <div className="flex items-center justify-between mb-8">
                <Link
                  href="/"
                  className="-m-1.5 p-1.5 group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">YD</span>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">
                        Yusuf Demirci
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                        Software Engineer
                      </div>
                    </div>
                  </div>
                </Link>
                <motion.button
                  type="button"
                  className="-m-2.5 rounded-xl p-2.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100/60 dark:hover:bg-gray-800/50 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                  whileHover={{ scale: 1.05, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">Menüyü kapat</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </motion.button>
              </div>

              {/* Mobile menu items */}
              <div className="flow-root">
                <div className="-my-6 divide-y divide-gray-200/30 dark:divide-gray-700/30">
                  <div className="space-y-1 py-6">
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        variants={itemVariants}
                        initial="closed"
                        animate="open"
                        transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                      >
                        <Link
                          href={item.href}
                          className="-mx-3 flex items-center rounded-xl px-4 py-4 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50/60 dark:hover:bg-gray-800/50 transition-all duration-300 group"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span className="flex-1">{item.name}</span>
                          <motion.div
                            className="w-1.5 h-1.5 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100"
                            initial={{ scale: 0 }}
                            whileHover={{ scale: 1 }}
                            transition={{ duration: 0.2 }}
                          />
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Mobile Dark Mode Toggle */}
                  <div className="py-6">
                    <motion.button
                      onClick={toggleDarkMode}
                      className="flex items-center justify-between w-full -mx-3 rounded-xl px-4 py-4 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50/60 dark:hover:bg-gray-800/50 transition-all duration-300"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                      transition={{
                        delay: navigation.length * 0.1 + 0.3,
                        duration: 0.5,
                      }}
                    >
                      <span className="flex items-center gap-3">
                        <motion.div
                          animate={{ rotate: darkMode ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {darkMode ? (
                            <Sun className="h-5 w-5" />
                          ) : (
                            <Moon className="h-5 w-5" />
                          )}
                        </motion.div>
                        {darkMode ? "Light Mode" : "Dark Mode"}
                      </span>
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
