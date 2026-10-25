import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { siteData } from "@/data/siteData";

export function Philosophy() {
  const data = siteData.philosophy;
  return (
    <section className="philosophy-section section-pad" id="filosofia">
      <div className="philosophy-inner page-width">
        <div className="philosophy-image-wrap"><Image src={data.image} alt={data.imageAlt} fill sizes="(max-width: 760px) 92vw, 40vw" /><span className="image-index">AURA · ESTUDIO DE PIEL</span></div>
        <div className="philosophy-copy"><p className="eyebrow">{data.eyebrow}</p><h2>{data.title}</h2><p className="section-body">{data.body}</p><p className="philosophy-note">{data.note}</p><ul>{data.points.map((point) => <li key={point}><Check size={16} />{point}</li>)}</ul><a className="text-link" href="#tratamientos">Conoce nuestro enfoque <ArrowUpRight size={15} /></a></div>
      </div>
    </section>
  );
}
