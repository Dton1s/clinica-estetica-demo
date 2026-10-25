import Image from "next/image";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { siteData } from "@/data/siteData";

export function Hero({ onAppointment }: { onAppointment: () => void }) {
  const data = siteData.hero;
  return (
    <section className="hero-section" id="inicio">
      <div className="hero-inner page-width">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" />{data.eyebrow}</p>
          <h1>{data.title.split(" ").slice(0, 3).join(" ")} <em>{data.title.split(" ").slice(3).join(" ")}</em></h1>
          <p className="hero-description">{data.description}</p>
          <div className="hero-actions">
            <button className="button button-green button-large" onClick={onAppointment}>{siteData.ui.appointment}<ArrowUpRight size={17} /></button>
            <a className="text-link" href="#tratamientos">{data.secondaryCta}<ArrowDown size={15} /></a>
          </div>
          <div className="hero-proof"><span className="proof-icon"><Sparkles size={17} /></span><span><strong>{data.stat.value}</strong><small>{data.stat.label}</small></span><i /><span className="proof-location">{data.location}</span></div>
        </div>
        <figure className="hero-photo-wrap">
          <Image className="hero-photo" src={data.image} alt={data.imageAlt} fill priority sizes="(max-width: 760px) 100vw, 54vw" />
          <div className="hero-photo-scrim" />
          <figcaption><span>{data.imageIndex}</span><span>{data.imageCaption}</span></figcaption>
          <div className="hero-note"><span className="note-flower">✳</span><span>Tu ritual<br />comienza aquí</span></div>
        </figure>
      </div>
      <div className="hero-bottom page-width"><span>ESTÉTICA CONSCIENTE</span><span className="bottom-line" /><span>PERSONAL · NATURAL · CONTEMPORÁNEA</span></div>
    </section>
  );
}
