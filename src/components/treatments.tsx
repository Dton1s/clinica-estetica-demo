"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Clock3 } from "lucide-react";
import { siteData, type TreatmentCategory } from "@/data/siteData";

export function Treatments({ onAppointment }: { onAppointment: () => void }) {
  const [active, setActive] = useState<TreatmentCategory>(siteData.treatments.categories[0]);
  const items = useMemo(() => siteData.treatments.items.filter((item) => item.category === active), [active]);
  return (
    <section className="treatments-section section-pad" id="tratamientos">
      <div className="page-width">
        <div className="section-heading treatment-heading"><div><p className="eyebrow">{siteData.treatments.eyebrow}</p><h2>{siteData.treatments.title}</h2></div><p className="section-intro">{siteData.treatments.description}</p></div>
        <div className="treatment-toolbar"><div className="treatment-tabs" role="tablist" aria-label={siteData.ui.treatmentTabsLabel}>{siteData.treatments.categories.map((category) => <button key={category} role="tab" aria-selected={active === category} className={active === category ? "active" : ""} onClick={() => setActive(category)}>{category}</button>)}</div><span className="treatment-count">0{items.length} {siteData.ui.experienceCountLabel}</span></div>
        <div className="treatment-grid" role="tabpanel">
          {items.map((item, index) => <article className="treatment-card" key={item.name}>
            <div className="treatment-image"><Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 760px) 92vw, 40vw" /><span className="treatment-label">{item.label}</span><span className="treatment-index">0{index + 1}</span></div>
            <div className="treatment-info"><div><h3>{item.name}</h3><p>{item.description}</p><span className="duration"><Clock3 size={13} />{item.duration}</span></div><span className="treatment-price">{item.price}</span></div>
            <button className="treatment-cta" onClick={onAppointment}>{siteData.ui.requestAssessment} <ArrowUpRight size={16} /></button>
          </article>)}
        </div>
        <p className="data-disclaimer">{siteData.treatments.disclaimer}</p>
      </div>
    </section>
  );
}
