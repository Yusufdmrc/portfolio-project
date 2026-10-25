import Link from "next/link";
import { ArrowUpRight, MoveRight } from "lucide-react";
import ProjectVisual from "@/components/ProjectVisual";
import HeroSection from "@/components/sections/HeroSection";
import { projects, selectedProjectIds } from "@/data/projects";

const selectedWork = selectedProjectIds.map((id) => projects.find((project) => project.id === id)!);

function getLinkLabel(project: (typeof projects)[number]) {
  return project.group === "web" ? "Web sitesini ziyaret et" : "GitHub projesini görüntüle";
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="section-block selected-work page-width" id="selected-work">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Seçilmiş işler <span className="eyebrow-divider">/</span> Web ve otomasyon</span>
            <h2>Projelerim<span className="hero-period">.</span></h2>
          </div>
          <Link href="/projects" className="text-link">Tüm projeler <ArrowUpRight size={16} /></Link>
        </div>
        <div className="work-grid">
          {selectedWork.map((project) => (
            <a className="work-card" href={project.href} target="_blank" rel="noopener noreferrer" key={project.id}>
              <ProjectVisual kind={project.visual} title={project.title} />
              <div className="work-meta"><span>{project.category}</span><ArrowUpRight size={14} aria-hidden="true" /></div>
              <h3>{project.title}</h3>
              {"description" in project && <p>{project.description}</p>}
              <div className="work-card-bottom"><span>{getLinkLabel(project)}</span><ArrowUpRight size={17} /></div>
            </a>
          ))}
        </div>
      </section>

      <section className="about-strip">
        <div className="page-width about-strip-inner">
          <span className="eyebrow">Kısaca ben</span>
          <p>Web ve mobil uygulamalar geliştiriyorum; test otomasyonu projeleri üzerinde çalışıyorum. Ürünü fikirden kalite kontrollerine kadar bir bütün olarak ele alıyorum.</p>
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
