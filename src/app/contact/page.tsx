"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/forms/ContactForm";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "E-posta",
    value: "yusuffdemirci10@gmail.com",
    href: "mailto:yusuffdemirci10@gmail.com",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+90 543 418 40 52",
    href: "tel:+905434184052",
  },
  {
    icon: MapPin,
    label: "Konum",
    value: "İstanbul, Türkiye",
    href: "https://maps.google.com/?q=Istanbul,Turkey",
  },
];

export default function ContactPage() {
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
            İletişim
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Projeleriniz hakkında konuşmak veya sorularınız için benimle
            iletişime geçin. Size en kısa sürede geri dönüş yapacağım.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                İletişim Bilgileri
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Yeni projeler, iş birlikleri veya herhangi bir konuda benimle
                iletişime geçmekten çekinmeyin. Her türlü sorunuza yardımcı
                olmaktan memnuniyet duyarım.
              </p>
            </motion.div>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-start space-x-4 p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      {item.label}
                    </h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg font-medium text-gray-900 dark:text-white">
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <motion.div variants={itemVariants} className="pt-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Hızlı İletişim
              </h3>
              <div className="flex space-x-4">
                <motion.a
                  href="mailto:yusuffdemirci10@gmail.com"
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-4 h-4 mr-2" />
                  E-posta Gönder
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/yusuf-demirci-9846141bb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  LinkedIn
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Mesaj Gönder
            </h2>
            <ContactForm />
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Neden Benimle Çalışmalısınız?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Hızlı Yanıt
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  24 saat içinde geri dönüş garantisi
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Etkili İletişim
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Açık ve anlaşılır iletişim
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Send className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Kaliteli Çözümler
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Profesyonel ve sürdürülebilir çözümler
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
