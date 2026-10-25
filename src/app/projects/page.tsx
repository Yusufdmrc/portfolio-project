"use client";

import ProjectVisual from "@/components/ProjectVisual";
import { useState } from "react";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Huminex Website",
    description:
      "Huminex firması için geliştirilmiş modern kurumsal web sitesi. Next.js 14, TypeScript ve Tailwind CSS kullanılarak responsive tasarım ilkeleriyle oluşturulmuş. SEO optimizasyonu, çok dilli destek ve performans odaklı yapı ile kullanıcı deneyimi ön planda tutulmuş.",
    image: "/images/project-1.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Vercel"],
    demo: "https://website-g69i.vercel.app/tr",
    stars: 24,
    forks: 8,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Selenium Cucumber Test Automation",
    description:
      "Web uygulamaları için kapsamlı test otomasyon framework'ü. Page Object Model (POM) tasarım deseni, Cucumber BDD yaklaşımı ve TestNG test yönetimi ile geliştirilmiş. Cross-browser testing, paralel test çalıştırma ve detaylı raporlama özellikleri içermektedir.",
    image: "/images/project-2.jpg",
    technologies: ["Selenium", "Java", "TestNG", "Cucumber", "Maven"],
    github: "https://github.com/Yusufdmrc/selenium-project",
    stars: 18,
    forks: 5,
    category: "Test Automation",
  },
  {
    id: 3,
    title: "Appium Cucumber Test Automation",
    description:
      "Android ve iOS mobil uygulamaları için geliştirilmiş test otomasyon çerçevesi. Appium WebDriver, Cucumber BDD ve TestNG kullanarak cross-platform mobil test otomasyonu sağlar. Real device ve emulator desteği ile kapsamlı mobil test senaryoları içerir.",
    image: "/images/project-3.jpg",
    technologies: ["Appium", "Java", "TestNG", "Cucumber", "Maven"],
    github: "https://github.com/Yusufdmrc/appium-project",
    stars: 31,
    forks: 12,
    category: "Mobile Testing",
  },
  {
    id: 4,
    title: "Postman API Test Project",
    description:
      "RESTful API'ler için kapsamlı test otomasyon suite'i. Postman Collections, Newman CLI runner ve GitHub Actions CI/CD entegrasyonu ile otomatik API testi. Request/Response validation, schema validation, environment management ve detaylı test raporlama sistemi.",
    image: "/images/project-4.jpg",
    technologies: ["Postman", "Newman", "RESTful API", "GitHub Actions"],
    github: "https://github.com/Yusufdmrc/postman-api-project",
    stars: 15,
    forks: 3,
    category: "API Testing",
  },
  {
    id: 5,
    title: "Blog App",
    description:
      "Modern ve kullanıcı dostu blog platformu. Next.js 13 App Router, NextAuth.js ile Google/GitHub authentication, MongoDB Atlas veritabanı entegrasyonu. Rich text editor, kategori sistemi, yorum özelliği ve responsive tasarım ile complete blog çözümü.",
    image: "/images/project-5.jpg",
    technologies: ["Next.js", "React", "NextAuth.js", "MongoDB", "TypeScript"],
    github: "https://github.com/Yusufdmrc/nextjs-blog-app",
    stars: 22,
    forks: 7,
    category: "Full Stack",
  },
  {
    id: 6,
    title: "E-Commerce Project",
    description:
      "Full-stack e-ticaret platformu. Next.js 14, Prisma ORM ile PostgreSQL veritabanı, Stripe payment integration, NextAuth.js authentication sistemi. Ürün yönetimi, sepet işlemleri, sipariş takibi, admin panel ve güvenli ödeme sistemi içeren complete e-commerce solution.",
    image: "/images/project-6.jpg",
    technologies: ["Next.js", "Prisma", "Stripe", "NextAuth.js", "TypeScript"],
    github: "https://github.com/Yusufdmrc/next.js-e-commerce",
    stars: 27,
    forks: 9,
    category: "Full Stack",
  },
];

const categories = ["Tümü", "Test Automation", "Full Stack", "API Testing", "Mobile Testing"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "Tümü" || project.category === selectedCategory
  );

  return (
    <div className="site-page page-width">
      <header className="page-heading">
        <span className="eyebrow">Projeler <span className="eyebrow-divider">/</span> Ürün, web ve kalite</span>
        <h1>Seçilmiş işler<span className="hero-period">.</span></h1>
        <p>Web geliştirme, test otomasyonu ve mobil kalite alanlarında üzerinde çalıştığım projeler.</p>
      </header>

      <div className="project-toolbar">
        <div className="filter-list" role="group" aria-label="Projeleri kategoriye göre filtrele">
          {categories.map((category) => (
            <button key={category} type="button" className={`filter-button${selectedCategory === category ? " is-selected" : ""}`} aria-pressed={selectedCategory === category} onClick={() => setSelectedCategory(category)}>
              {category === "Tümü" ? category : category === "Full Stack" ? "Web" : category === "Test Automation" ? "Test otomasyonu" : category === "Mobile Testing" ? "Mobil test" : "API test"}
            </button>
          ))}
        </div>
        <span className="project-count">{filteredProjects.length} çalışma</span>
      </div>

      <div className="project-grid" aria-live="polite">
        {filteredProjects.map((project) => (
          <article className="project-card" key={project.id}>
            <ProjectVisual category={project.category} title={project.id === 1 ? "huminex" : project.title} />
            <div className="project-card-info"><h2>{project.title}</h2><span className="project-category">{project.category}</span></div>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
            <div className="project-actions">
              {project.github && <Link href={project.github} target="_blank" rel="noopener noreferrer"><Github size={14} /> Kaynak kod <ArrowUpRight size={13} /></Link>}
              {project.demo && <Link href={project.demo} target="_blank" rel="noopener noreferrer"><ExternalLink size={13} /> Canlı site <ArrowUpRight size={13} /></Link>}
            </div>
          </article>
        ))}
      </div>

      <div className="project-cta"><p>Daha fazla çalışma ve katkı için GitHub profilime göz atabilirsiniz.</p><Link href="https://github.com/Yusufdmrc" target="_blank" rel="noopener noreferrer" className="text-link"><Github size={16} /> GitHub profili <ArrowUpRight size={15} /></Link></div>
    </div>
  );
}
