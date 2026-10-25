import ContactForm from "@/components/forms/ContactForm";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";

const contactInfo = [
  { label: "E-posta", value: "yusuffdemirci10@gmail.com", href: "mailto:yusuffdemirci10@gmail.com" },
  { label: "Telefon", value: "+90 543 418 40 52", href: "tel:+905434184052" },
  { label: "Konum", value: "İstanbul, Türkiye", href: "https://maps.google.com/?q=Istanbul,Turkey" },
];

export default function ContactPage() {
  return (
    <div className="site-page page-width">
      <header className="page-heading">
        <span className="eyebrow">İletişim <span className="eyebrow-divider">/</span> Kapım açık</span>
        <h1>Bir not bırakın<span className="hero-period">.</span></h1>
        <p>Bir proje, ekip çalışması veya aklınızdaki bir soru için bana yazabilirsiniz.</p>
      </header>

      <div className="contact-layout">
        <section aria-labelledby="contact-details-heading">
          <h2 id="contact-details-heading" className="content-heading">Ulaşabileceğiniz yerler</h2>
          <dl className="contact-details">
            {contactInfo.map((item) => (
              <div className="contact-detail" key={item.label}>
                <dt>{item.label}</dt>
                <dd><a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}>{item.value}{item.href.startsWith("http") && <ArrowUpRight size={13} />}</a></dd>
              </div>
            ))}
          </dl>
          <div className="contact-social">
            <Link href="https://github.com/Yusufdmrc" target="_blank" rel="noopener noreferrer"><Github size={15} /> GitHub</Link>
            <Link href="https://www.linkedin.com/in/yusuf-demirci-9846141bb/" target="_blank" rel="noopener noreferrer"><Linkedin size={15} /> LinkedIn</Link>
          </div>
        </section>

        <section className="contact-form-panel" aria-labelledby="contact-form-heading">
          <h2 id="contact-form-heading">Mesaj gönderin</h2>
          <ContactForm />
        </section>
      </div>
    </div>
  );
}
