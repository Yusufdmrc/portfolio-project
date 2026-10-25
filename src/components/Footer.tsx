import { ArrowUpRight, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-inner">
        <div className="footer-intro">
          <span className="eyebrow">Yusuf Demirci · İstanbul</span>
          <p>İyi ürünlerin arkasında, detaylara dikkat eden insanlar vardır.</p>
        </div>
        <div className="footer-right">
          <div className="footer-socials">
            <a href="https://github.com/Yusufdmrc" target="_blank" rel="noopener noreferrer" aria-label="GitHub profilim"><Github size={18} /></a>
            <a href="https://www.linkedin.com/in/yusuf-demirci-9846141bb/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profilim"><Linkedin size={18} /></a>
            <a href="mailto:yusuffdemirci10@gmail.com" aria-label="E-posta gönder"><ArrowUpRight size={18} /></a>
          </div>
          <span className="footer-copy">© {new Date().getFullYear()} Yusuf Demirci</span>
        </div>
      </div>
    </footer>
  );
}
