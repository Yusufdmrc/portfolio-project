"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X } from "lucide-react";

const navigation = [
  { name: "Ana sayfa", href: "/" },
  { name: "Hakkımda", href: "/about" },
  { name: "Projeler", href: "/projects" },
  { name: "Yazılar", href: "/blog" },
];

export default function Navigation() {
  const menuButton = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    let savedTheme: string | null = null;
    try { savedTheme = localStorage.getItem("theme"); } catch { /* Theme still works without storage. */ }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const useDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    setDarkMode(useDark);
    document.documentElement.classList.toggle("dark", useDark);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setMenuOpen(false); menuButton.current?.focus(); }
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [menuOpen]);

  const toggleTheme = () => {
    const nextTheme = !darkMode;
    setDarkMode(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme);
    try { localStorage.setItem("theme", nextTheme ? "dark" : "light"); } catch { /* Optional persistence. */ }
  };

  return (
    <header className="site-header">
      <nav className="site-nav page-width" aria-label="Ana menü">
        <Link className="site-brand" href="/" aria-label="Yusuf Demirci, ana sayfa">
          <span className="brand-mark" aria-hidden="true">YD</span>
          <span className="brand-copy">
            <span>Yusuf Demirci</span>
            <small>Yazılım mühendisi</small>
          </span>
        </Link>

        <div className="desktop-links">
          {navigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link key={item.href} href={item.href} className={`nav-link${active ? " is-active" : ""}`} aria-current={active ? "page" : undefined}>
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="nav-actions">
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={darkMode ? "Açık temaya geç" : "Koyu temaya geç"}>
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <Link className="nav-contact" href="/contact">İletişim <span aria-hidden="true">↗</span></Link>
          <button ref={menuButton} aria-controls="mobile-navigation" className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div id="mobile-navigation" className="mobile-menu page-width">
          {navigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return <Link key={item.href} href={item.href} className={active ? "is-active" : ""} aria-current={active ? "page" : undefined}>{item.name}<span aria-hidden="true">↗</span></Link>;
          })}
          <Link href="/contact" className="mobile-contact">Birlikte çalışalım <span aria-hidden="true">↗</span></Link>
        </div>
      )}
    </header>
  );
}
