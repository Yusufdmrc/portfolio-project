import { ArrowRight, Braces, Code2, Layers, Monitor, Smartphone } from "lucide-react";

type ProjectVisualProps = { category: string; title?: string };

/** Editorial illustrations of project domains; these are not execution reports. */
export default function ProjectVisual({ category, title = "Web deneyimi" }: ProjectVisualProps) {
  const kind = category === "Mobile Testing" ? "mobile" : category === "Test Automation" ? "test" : category === "API Testing" ? "api" : "web";
  return (
    <div className={`project-visual visual-${kind}`} aria-hidden="true">
      <div className="visual-caption"><span>{kind === "web" ? "ARAYÜZ / GELİŞTİRME" : kind === "mobile" ? "MOBİL / OTOMASYON" : kind === "api" ? "API / TEST" : "WEB / OTOMASYON"}</span><Code2 size={17} /></div>
      {kind === "web" ? (
        <div className="visual-window">
          <div className="visual-window-top"><i /><i /><i /></div>
          <div className="visual-window-content"><div><strong>{title}</strong><span>Next.js · TypeScript</span></div><Layers size={34} strokeWidth={1.2} /></div>
        </div>
      ) : kind === "mobile" ? (
        <div className="visual-phone"><div className="visual-phone-device"><Smartphone size={27} strokeWidth={1.2} /></div><div className="visual-phone-copy">İki platform.<br />Ortak yaklaşım.<small>Android · iOS · Appium</small></div></div>
      ) : (
        <div className="visual-flow"><div className="visual-node"><Braces size={25} strokeWidth={1.3} /><span>{kind === "api" ? "İstek" : "Senaryo"}</span></div><ArrowRight size={16} /><div className="visual-node"><Monitor size={25} strokeWidth={1.3} /><span>{kind === "api" ? "Yanıt" : "Tarayıcı"}</span></div><ArrowRight size={16} /><div className="visual-node"><ScanIcon /><span>Doğrulama</span></div></div>
      )}
    </div>
  );
}

function ScanIcon() {
  return <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5M7 12h10M12 7v10" /></svg>;
}
