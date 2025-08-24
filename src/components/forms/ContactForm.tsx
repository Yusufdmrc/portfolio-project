"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { saveContactMessage } from "@/lib/supabase/queries";
import { ContactFormData } from "@/types";
import { CheckCircle, AlertCircle, Send, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const result = await saveContactMessage({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      if (!result.success) {
        throw new Error(result.error);
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={formVariants}
      initial="hidden"
      animate="visible"
      className="w-full"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <motion.div variants={inputVariants}>
          <Input
            label="Ad Soyad"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Adınız ve soyadınız"
            className="transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </motion.div>

        <motion.div variants={inputVariants} transition={{ delay: 0.1 }}>
          <Input
            label="E-posta"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="ornek@email.com"
            className="transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </motion.div>

        <motion.div variants={inputVariants} transition={{ delay: 0.2 }}>
          <Textarea
            label="Mesaj"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Mesajınızı buraya yazın..."
            rows={5}
            className="transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </motion.div>

        <motion.div variants={inputVariants} transition={{ delay: 0.3 }}>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full relative group overflow-hidden"
            size="lg"
          >
            <span className="flex items-center justify-center">
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Gönderiliyor...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Mesaj Gönder
                </>
              )}
            </span>
          </Button>
        </motion.div>

        <AnimatePresence mode="wait">
          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 border border-green-200/50 dark:border-green-800/50 shadow-sm"
            >
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold text-green-800 dark:text-green-300 mb-1">
                    Mesaj Başarıyla Gönderildi!
                  </h3>
                  <p className="text-sm text-green-700 dark:text-green-400">
                    Mesajınız başarıyla gönderildi. En kısa sürede size dönüş
                    yapacağım.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 border border-red-200/50 dark:border-red-800/50 shadow-sm"
            >
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold text-red-800 dark:text-red-300 mb-1">
                    Gönderim Hatası
                  </h3>
                  <p className="text-sm text-red-700 dark:text-red-400">
                    Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra
                    tekrar deneyin veya
                    <a
                      href="mailto:yusuf@example.com"
                      className="underline ml-1 hover:text-red-900 dark:hover:text-red-300"
                    >
                      doğrudan e-posta gönderin
                    </a>
                    .
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
}
