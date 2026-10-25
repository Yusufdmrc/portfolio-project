import Link from "next/link";
import { ArrowUpRight, MoveRight } from "lucide-react";
import ProjectVisual from "@/components/ProjectVisual";
import HeroSection from "@/components/sections/HeroSection";

const selectedWork = [
  {
    number: "01",
    category: "Web geliştirme",
    title: "Huminex kurumsal web sitesi",
    description: "Çok dilli, responsive ve performans odaklı bir Next.js deneyimi.",
    stack: "Next.js · TypeScript · Tailwind CSS",
    href: "https://website-g69i.vercel.app/tr",
    visualCategory: "Full Stack",
    visualTitle: "huminex",
  },
  {
    number: "02",
    category: "Test otomasyonu",
    title: "Selenium & Cucumber",
    description: "Web uygulamaları için Page Object Model tabanlı otomasyon yaklaşımı.",
    stack: "Java · Selenium · TestNG",
    href: "https://github.com/Yusufdmrc/selenium-project",
    visualCategory: "Test Automation",
  },
  {
    number: "03",
    category: "Mobil test",
    title: "Appium test otomasyonu",
    description: "Android ve iOS senaryolarını ortak bir test yapısında ele alan çalışma.",
    stack: "Appium · Java · Cucumber",
    href: "https://github.com/Yusufdmrc/appium-project",
    visualCategory: "Mobile Testing",
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="section-block selected-work page-width" id="selected-work">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Seçilmiş işler <span className="eyebrow-divider">/</span> Proje arşivi</span>
            <h2>Üzerinde çalıştıklarım<span className="hero-period">.</span></h2>
          </div>
          <Link href="/projects" className="text-link">Tüm projeler <ArrowUpRight size={16} /></Link>
        </div>
        <div className="work-grid">
          {selectedWork.map((work) => (
            <a className="work-card" href={work.href} target="_blank" rel="noopener noreferrer" key={work.number}>
              <ProjectVisual category={work.visualCategory} title={work.visualTitle} />
              <div className="work-meta"><span>{work.category}</span><ArrowUpRight size={14} aria-hidden="true" /></div>
              <h3>{work.title}</h3>
              <p>{work.description}</p>
              <div className="work-card-bottom"><span>{work.stack}</span><ArrowUpRight size={17} /></div>
            </a>
          ))}
        </div>
      </section>

      <section className="about-strip">
        <div className="page-width about-strip-inner">
          <span className="eyebrow">Kısaca ben</span>
          <p>Önce arayüz geliştirdim, sonra kalite tarafına geçtim. Şimdi iki deneyimi bir araya getirip daha güvenilir ürünler için çalışıyorum.</p>
          <Link href="/about" className="button button-light">Hikâyemi oku <MoveRight size={17} /></Link>
        </div>
      </section>

      <section className="contact-rail page-width">
        <div><span className="eyebrow">Bir fikriniz mi var?</span><h2>Konuşalım.</h2></div>
        <Link href="/contact" className="contact-rail-link">Bir mesaj gönder <ArrowUpRight size={18} /></Link>
      </section>
    </>
  );
}
