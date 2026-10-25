import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, ScanLine } from "lucide-react";

const focusAreas = ["Test otomasyonu", "Web & mobil", "Kullanıcı deneyimi"];

export default function HeroSection() {
  return (
    <section className="hero-section page-width" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="eyebrow hero-eyebrow"><span className="status-dot" /> İstanbul, Türkiye <span className="eyebrow-divider">/</span> Yazılım kalite mühendisi</div>
        <h1 id="hero-title">Yusuf<span className="hero-name-last">Demirci<span className="hero-period">.</span></span></h1>
        <p className="hero-lede">İyi bir deneyim geliştirerek başlar. Güvenilirliğini test ederek kazanır.</p>
        <p className="hero-description">Test otomasyonu ve kalite süreçlerinde çalışıyor; frontend geçmişimle ürünlere kullanıcı gözünden de bakıyorum.</p>
        <div className="hero-actions">
          <Link href="/projects" className="button button-dark">Çalışmaları gör <ArrowUpRight size={17} /></Link>
          <a href="/YusufDemirci_CV.pdf" download className="button button-quiet"><Download size={16} /> Özgeçmiş</a>
        </div>
        <div className="hero-socials" aria-label="Sosyal profiller">
          <a href="https://github.com/Yusufdmrc" target="_blank" rel="noopener noreferrer"><Github size={17} /> GitHub</a>
          <a href="https://www.linkedin.com/in/yusuf-demirci-9846141bb/" target="_blank" rel="noopener noreferrer"><Linkedin size={17} /> LinkedIn</a>
          <a href="mailto:yusuffdemirci10@gmail.com">E-posta <ArrowUpRight size={14} /></a>
        </div>
      </div>

      <div className="hero-portrait-wrap">

        <div className="portrait-frame">
          <Image src="/images/yusuf-profile.jpeg" alt="Yusuf Demirci" fill priority sizes="(max-width: 760px) 80vw, 420px" className="portrait-image" />
        </div>
        <div className="portrait-caption"><span>Geliştirme + kalite</span><span>İstanbul, TR</span></div>
        <div className="portrait-label"><ScanLine size={27} aria-hidden="true" /><div><strong>Detaylarda kalite.</strong><small>Koddan kullanıcı deneyimine</small></div></div>
      </div>

      <div className="hero-bottomline">
        <span className="eyebrow">Odak alanlarım</span>
        <div className="focus-list">{focusAreas.map((area) => <span key={area}>{area}</span>)}</div>
        <a href="#selected-work" className="scroll-cue">Aşağı kaydır <ArrowDown size={15} /></a>
      </div>
    </section>
  );
}
