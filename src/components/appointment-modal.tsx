"use client";

import { useEffect, useState, type FormEvent } from "react";
import { ArrowLeft, ArrowUpRight, Check, X } from "lucide-react";
import { siteData } from "@/data/siteData";

export function AppointmentModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sent, setSent] = useState(false);
  const [selected, setSelected] = useState("");
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") { setSent(false); onClose(); } };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open, onClose]);
  if (!open) return null;
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const phone = String(form.get("phone") ?? "");
    const treatment = String(form.get("treatment") ?? "");
    if (siteData.contact.whatsapp) {
      const message = `${siteData.appointment.fields.name}: ${name}\n${siteData.appointment.fields.phone}: ${phone}\n${siteData.appointment.fields.treatment}: ${treatment}`;
      window.open(`https://wa.me/${siteData.contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    }
    setSent(true);
  }
  return (
    <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) { setSent(false); onClose(); } }}>
      <section className="appointment-modal" role="dialog" aria-modal="true" aria-label={siteData.appointment.dialogLabel}>
        <button className="modal-close" onClick={() => { setSent(false); onClose(); }} aria-label={siteData.ui.close}><X size={19} /></button>
        {!sent ? <><p className="eyebrow">{siteData.appointment.eyebrow}</p><h2>{siteData.appointment.title}</h2><p className="modal-intro">{siteData.contact.appointmentLead}</p><form onSubmit={submit}><label>{siteData.appointment.nameLabel}<input name="name" required placeholder={siteData.appointment.namePlaceholder} autoComplete="name" /></label><label>{siteData.appointment.phoneLabel}<input name="phone" required type="tel" placeholder={siteData.appointment.phonePlaceholder} autoComplete="tel" /></label><label>{siteData.appointment.treatmentLabel}<select name="treatment" required value={selected} onChange={(event) => setSelected(event.target.value)}><option value="">{siteData.appointment.treatmentPlaceholder}</option>{siteData.treatments.items.map((item) => <option key={item.name}>{item.name}</option>)}</select></label><button className="button button-green modal-submit" type="submit">{siteData.appointment.submitLabel}<ArrowUpRight size={16} /></button><small className="privacy-note">Demo de formulario. Los datos no se almacenan ni se envían sin configurar un canal de contacto.</small></form></> : <div className="modal-success"><span><Check size={25} /></span><p className="eyebrow">LISTO</p><h2>{siteData.appointment.successTitle}</h2><p>{siteData.appointment.successText}</p><button className="text-link" onClick={() => { setSent(false); onClose(); }}><ArrowLeft size={15} />{siteData.appointment.closeLabel}</button>{!siteData.contact.whatsapp && <small className="data-disclaimer">{siteData.ui.phoneSetup}</small>}</div>}
      </section>
    </div>
  );
}
