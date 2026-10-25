"use client";

import { useRef, useState } from "react";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { saveContactMessage } from "@/lib/supabase/queries";
import { ContactFormData } from "@/types";
import { CheckCircle, AlertCircle, Send, Loader2 } from "lucide-react";

type FieldErrors = Partial<Record<keyof ContactFormData, string>>;

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const pending = useRef(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (pending.current) return;
    const nextErrors: FieldErrors = {};
    if (!formData.name.trim()) nextErrors.name = "Lütfen adınızı ve soyadınızı yazın.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) nextErrors.email = "Geçerli bir e-posta adresi yazın: ornek@alan.com";
    if (!formData.message.trim()) nextErrors.message = "Lütfen iletmek istediğiniz mesajı yazın.";
    setErrors(nextErrors);
    setSubmitStatus("idle");
    const firstError = Object.keys(nextErrors)[0];
    if (firstError) {
      const field = event.currentTarget.elements.namedItem(firstError);
      if (field instanceof HTMLElement) field.focus();
      return;
    }
    pending.current = true;
    setIsSubmitting(true);
    try {
      const result = await saveContactMessage({ name: formData.name.trim(), email: formData.email.trim(), message: formData.message.trim() });
      if (!result.success) throw new Error("Message could not be saved");
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      pending.current = false;
      setIsSubmitting(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => ({ ...previous, [name]: undefined }));
    if (submitStatus === "success") setSubmitStatus("idle");
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <Input label="Ad soyad" name="name" autoComplete="name" value={formData.name} onChange={handleChange} required disabled={isSubmitting} error={errors.name} placeholder="Adınız ve soyadınız" />
      <Input label="E-posta" name="email" type="email" autoComplete="email" value={formData.email} onChange={handleChange} required disabled={isSubmitting} error={errors.email} placeholder="ornek@alan.com" />
      <Textarea className="resize-none" label="Mesaj" name="message" value={formData.message} onChange={(event) => { handleChange(event); event.target.style.height = "auto"; event.target.style.height = `${event.target.scrollHeight}px`; }} required disabled={isSubmitting} error={errors.message} placeholder="Projenizden veya konuşmak istediğiniz konudan bahsedin." rows={6} />
      <button type="submit" disabled={isSubmitting} aria-busy={isSubmitting} className="button button-dark w-full">
        {isSubmitting ? <Loader2 size={17} className="animate-spin" aria-hidden="true" /> : <Send size={17} aria-hidden="true" />}
        {isSubmitting ? "Gönderiliyor…" : "Mesaj gönder"}
      </button>
      <div className="form-feedback" aria-live="polite" aria-atomic="true">
        {submitStatus === "success" && <p className="form-success"><CheckCircle size={20} aria-hidden="true" /> Mesajınız gönderildi. İletişime geçtiğiniz için teşekkürler.</p>}
        {submitStatus === "error" && <p className="form-error"><AlertCircle size={20} aria-hidden="true" /><span>Mesajınız gönderilemedi. Yazdıklarınız korundu; tekrar deneyebilir veya <a className="underline" href="mailto:yusuffdemirci10@gmail.com">doğrudan e-posta gönderebilirsiniz</a>.</span></p>}
      </div>
    </form>
  );
}
