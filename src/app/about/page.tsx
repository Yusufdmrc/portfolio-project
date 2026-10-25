import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";

const experiences = [
  { title: "QA Tester", company: "Sisal Hub Türkiye", period: "Eylül 2024 — devam ediyor", description: "Java, Selenium, Appium, Jenkins, Postman, BrowserStack ve Charles Proxy ile web ve mobil ürünlerin test süreçleri." },
  { title: "Frontend Developer", company: "Arute Solutions", period: "Aralık 2023 — Ağustos 2024", description: "React, TypeScript, Tailwind CSS ve React Native kullanarak kullanıcı arayüzleri geliştirme." },
  { title: "Frontend Developer Intern", company: "Arute Solutions", period: "Kasım 2023 — Aralık 2023", description: "React, JavaScript, HTML, CSS ve Bootstrap ile frontend geliştirme deneyimi." },
];

const skills = [
  { category: "Arayüz", items: "React · Next.js · TypeScript · Tailwind CSS · JavaScript" },
  { category: "Test & kalite", items: "Selenium · Appium · TestNG · Cucumber · Maven" },
  { category: "Servisler", items: "Node.js · Express.js · MongoDB · REST API" },
  { category: "Araçlar", items: "Git · Docker · Jenkins · Postman · Jira · JMeter" },
];

export default function AboutPage() {
  return (
    <div className="site-page page-width">
      <header className="page-heading">
        <span className="eyebrow">Hakkımda <span className="eyebrow-divider">/</span> Biraz daha yakından</span>
        <h1>Arayüzden kaliteye<span className="hero-period">.</span></h1>
        <p>Frontend geliştirme tecrübemi yazılım testiyle birleştiriyor, ürünlere hem geliştirenin hem de kullananın gözünden bakıyorum.</p>
      </header>

      <section className="about-intro-grid" aria-label="Kişisel hikâyem">
        <div className="about-copy">
          <h2>İki tarafı da tanımak</h2>
          <p>Üniversite dönemimde frontend geliştirici olarak çalışmaya başladım. Arayüzlerin nasıl kurulduğunu öğrenirken, küçük kararların kullanıcı deneyimini ne kadar etkilediğini de gördüm.</p>
          <p>Zamanla odağım test mühendisliğine kaydı. Bugün web ve mobil uygulamalarda test senaryoları hazırlıyor, manuel kontroller yapıyor ve tekrar eden akışları otomasyona taşıyorum.</p>
          <p>Geliştirme geçmişim, bir hatanın nerede ortaya çıkabileceğini anlamama ve ekiplerle daha somut konuşmama yardımcı oluyor. Benim için iyi kalite, geliştirme sürecinin sonuna eklenen bir adım değil; baştan itibaren verilen kararların parçası.</p>
          <a href="/YusufDemirci_CV.pdf" download className="button button-quiet"><Download size={15} /> Özgeçmişi indir</a>
        </div>
        <aside className="about-note">
          <span>Çalışma yaklaşımım</span>
          <p>Bir özelliği yalnızca çalışıyor mu diye değil, kullanıcı için doğru hissettiriyor mu diye de incelerim.</p>
        </aside>
      </section>

      <section className="about-section" aria-labelledby="experience-heading">
        <div className="about-section-heading">
          <div><span className="eyebrow">Deneyim</span><h2 id="experience-heading" className="content-heading">Çalışma geçmişi</h2></div>
          <span className="eyebrow">2023 — bugün</span>
        </div>
        <div className="timeline">
          {experiences.map((experience, index) => (
            <article className="timeline-item" key={experience.title}>
              <span className="timeline-period">0{index + 1} / {experience.period}</span>
              <h3>{experience.title}</h3>
              <span className="timeline-company">{experience.company}</span>
              <p>{experience.description}</p>
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
