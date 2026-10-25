import { ArrowUpRight, Instagram, MoveUpRight } from "lucide-react";
import { siteData } from "@/data/siteData";

export function Footer({ onAppointment }: { onAppointment: () => void }) {
  return (
    <footer className="site-footer">
      <div className="footer-top page-width"><div><p className="eyebrow">UN MOMENTO PARA TI</p><h2>¿Empezamos<br /><em>por escucharte?</em></h2><p>Una primera valoración puede ayudarte a encontrar el cuidado adecuado.</p><button className="button button-dark" onClick={onAppointment}>{siteData.ui.appointment}<ArrowUpRight size={17} /></button></div><div className="footer-brand-block"><span className="footer-monogram">a</span><strong>{siteData.brand.name}</strong><small>{siteData.brand.descriptor}</small><span className="demo-pill">{siteData.brand.conceptLabel}</span></div></div>
      <div className="footer-bottom page-width"><span>{siteData.footer.yearPrefix} {new Date().getFullYear()} {siteData.brand.name} · {siteData.footer.legal}</span><nav aria-label="Enlaces del pie">{siteData.footer.navLinks.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}{siteData.contact.instagram && <a href={siteData.contact.instagram} target="_blank" rel="noreferrer" aria-label={siteData.ui.instagramSetup}><Instagram size={15} /></a>}</nav><a className="agency-credit" href={siteData.footer.agencyUrl} target="_blank" rel="noreferrer">{siteData.footer.signoff}<MoveUpRight size={13} /></a></div>
    </footer>
  );
}
