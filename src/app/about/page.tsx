import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";

const experiences: Array<{
  title: string;
  company: string;
  period: string;
  employmentType?: string;
  description?: string;
}> = [
  { title: "Test Specialist", company: "Sisal Hub Türkiye", period: "Ocak 2026 — günümüz", employmentType: "Tam zamanlı" },
  { title: "QA Tester", company: "Sisal Hub Türkiye", period: "Eylül 2024 — Ocak 2026", description: "Java, Selenium, Appium, Jenkins, Postman, BrowserStack ve Charles Proxy ile web ve mobil ürünlerin test süreçleri." },
  { title: "Frontend Developer", company: "Arute Solutions", period: "Aralık 2023 — Ağustos 2024", description: "React, TypeScript, Tailwind CSS ve React Native kullanarak kullanıcı arayüzleri geliştirme." },
  { title: "Frontend Developer Intern", company: "Arute Solutions", period: "Kasım 2023 — Aralık 2023", description: "React, JavaScript, HTML, CSS ve Bootstrap ile frontend geliştirme deneyimi." },
];

const skills = [
  { category: "Web & mobil geliştirme", items: "React · Next.js · React Native · TypeScript · JavaScript" },
  { category: "Test & kalite", items: "Selenium · Appium · Playwright · TestNG · Cucumber · Maven" },
  { category: "Servisler", items: "Node.js · Express.js · MongoDB · REST API" },
  { category: "Araçlar", items: "Git · Docker · Jenkins · Postman · Jira · JMeter" },
];

export default function AboutPage() {
  return (
    <div className="site-page page-width">
      <header className="page-heading">
        <span className="eyebrow">Hakkımda <span className="eyebrow-divider">/</span> Biraz daha yakından</span>
        <h1>Yazılım mühendisliği<span className="hero-period">.</span></h1>
        <p>Web ve mobil uygulama geliştirme deneyimimi test otomasyonu çalışmalarımla bir araya getiriyorum.</p>
      </header>

      <section className="about-intro-grid" aria-label="Kişisel hikâyem">
        <div className="about-copy">
          <h2>Geliştirme ve kalite</h2>
          <p>Web arayüzleri ve mobil uygulamalar geliştiriyorum; kullanıcıların bu ürünlerle kurduğu akışları test otomasyonuyla güvence altına alıyorum.</p>
          <p>Çalışmalarım web geliştirme, mobil uygulama geliştirme ve test otomasyonunu kapsıyor. Ürüne hem kod hem de kullanıcı deneyimi açısından yaklaşmayı seviyorum.</p>
          <p>İyi yazılımın geliştirme ve kalite adımlarının birlikte düşünülmesiyle ortaya çıktığına inanıyorum.</p>
          <a href="/YusufDemirci_CV.pdf" download className="button button-quiet"><Download size={15} /> Özgeçmişi indir</a>
        </div>
        <aside className="about-note">
          <span>Çalışma yaklaşımım</span>
          <p>Önce ihtiyacı netleştirir, çözümün geliştirme ve test aşamalarında beklentiyi karşıladığını doğrularım.</p>
        </aside>
      </section>

      <section className="about-section" aria-labelledby="experience-heading">
        <div className="about-section-heading">
          <div><span className="eyebrow">Deneyim</span><h2 id="experience-heading" className="content-heading">Çalışma geçmişi</h2></div>
          <span className="eyebrow">2023 — bugün</span>
        </div>
        <div className="timeline">
          {experiences.map((experience) => (
            <article className="timeline-item" key={experience.title}>
              <span className="timeline-period">{experience.period}</span>
              <h3>{experience.title}</h3>
              <span className="timeline-company">{experience.company}{experience.employmentType ? ` · ${experience.employmentType}` : ""}</span>
              {experience.description && <p>{experience.description}</p>}
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" aria-labelledby="skills-heading">
        <div className="about-section-heading">
          <div><span className="eyebrow">Araç kutusu</span><h2 id="skills-heading" className="content-heading">Kullandığım teknolojiler</h2></div>
        </div>
        <div className="skill-groups">
          {skills.map((group, index) => (
            <article className="skill-group" key={group.category}>
              <span>0{index + 1}</span><h3>{group.category}</h3><p>{group.items}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section contact-rail" aria-label="İletişim">
        <div><span className="eyebrow">Birlikte üretelim</span><h2>Merhaba deyin.</h2></div>
        <Link href="/contact" className="contact-rail-link">İletişime geç <ArrowUpRight size={17} /></Link>
      </section>
    </div>
  );
}
