"use client";

import { useState } from "react";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import ProjectVisual from "@/components/ProjectVisual";
import { projects, type ProjectGroup } from "@/data/projects";

const filters: { id: "all" | ProjectGroup; label: string }[] = [
  { id: "all", label: "Tümü" },
  { id: "web", label: "Web projeleri" },
  { id: "automation", label: "Otomasyon projeleri" },
];

const groups: { id: ProjectGroup; title: string }[] = [
  { id: "web", title: "Web projelerim" },
  { id: "automation", title: "Otomasyon projelerim" },
];

function getLinkLabel(project: (typeof projects)[number]) {
  return project.group === "web" ? "Web sitesini ziyaret et" : "GitHub projesini görüntüle";
}

export default function ProjectsPage() {
  const [selectedGroup, setSelectedGroup] = useState<"all" | ProjectGroup>("all");
  const visibleGroups = groups.filter((group) => selectedGroup === "all" || group.id === selectedGroup);
  const visibleCount = projects.filter((project) => selectedGroup === "all" || project.group === selectedGroup).length;

  return (
    <div className="site-page page-width">
      <header className="page-heading">
        <span className="eyebrow">Projeler <span className="eyebrow-divider">/</span> Yazılım mühendisliği</span>
        <h1>Projelerim<span className="hero-period">.</span></h1>
        <p>Web ve mobil uygulama geliştirme ile test otomasyonu alanlarında üzerinde çalıştığım projeler.</p>
      </header>

      <div className="project-toolbar">
        <div className="filter-list" role="group" aria-label="Projeleri alana göre filtrele">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              className={`filter-button${selectedGroup === filter.id ? " is-selected" : ""}`}
              aria-pressed={selectedGroup === filter.id}
              onClick={() => setSelectedGroup(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <span className="project-count">{visibleCount} proje</span>
      </div>

      {visibleGroups.map((group) => {
        const groupProjects = projects.filter((project) => project.group === group.id);
        return (
          <section className="project-group" key={group.id} aria-labelledby={`project-group-${group.id}`}>
            <div className="about-section-heading project-group-heading">
              <h2 id={`project-group-${group.id}`} className="content-heading">{group.title}</h2>
              <span className="eyebrow">{groupProjects.length} proje</span>
            </div>
            <div className="project-grid" aria-live="polite">
              {groupProjects.map((project) => (
                <article className="project-card" key={project.id}>
                  <ProjectVisual kind={project.visual} title={project.title} />
                  <div className="project-card-info">
                    <h3>{project.title}</h3>
                    <span className="project-category">{project.category}</span>
                  </div>
                  {"description" in project && <p className="project-description">{project.description}</p>}
                  {"technologies" in project && (
                    <div className="project-tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
                  )}
                  <div className="project-actions">
                    <Link href={project.href} target="_blank" rel="noopener noreferrer">
                      {project.group === "web" ? <ExternalLink size={14} /> : <Github size={14} />}
                      {getLinkLabel(project)}
                      <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        );
      })}

      <div className="project-cta"><p>Projelerin kaynak kodu ve diğer çalışmalarım GitHub profilimde.</p><Link href="https://github.com/Yusufdmrc" target="_blank" rel="noopener noreferrer" className="text-link"><Github size={16} /> GitHub profili <ArrowUpRight size={15} /></Link></div>
    </div>
  );
}
