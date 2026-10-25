"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { siteData } from "@/data/siteData";

export function SiteHeader({ onAppointment }: { onAppointment: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner page-width">
        <a className="brand-lockup" href="#inicio" aria-label={`${siteData.brand.name}, inicio`}>
          <span className="brand-mark">a</span>
          <span><strong>{siteData.brand.name}</strong><small>{siteData.brand.descriptor}</small></span>
        </a>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navegación principal">
          {siteData.navigation.map((item) => <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
          <button className="button button-green mobile-cta" onClick={() => { setMenuOpen(false); onAppointment(); }}>{siteData.ui.appointment}<ArrowUpRight size={16} /></button>
        </nav>
        <button className="button button-green header-cta" onClick={onAppointment}>{siteData.ui.appointment}<ArrowUpRight size={16} /></button>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? siteData.ui.menuClose : siteData.ui.menuOpen} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
    </header>
  );
}
