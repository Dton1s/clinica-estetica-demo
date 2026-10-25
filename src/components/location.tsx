import { ArrowUpRight, Clock3, MapPin } from "lucide-react";
import { siteData } from "@/data/siteData";

export function Location() {
  const data = siteData.location;
  return (
    <section className="location-section section-pad" id="ubicacion">
      <div className="location-inner page-width">
        <div className="location-heading"><p className="eyebrow">{data.eyebrow}</p><h2>{data.title}</h2><p>{data.city}</p></div>
        <div className="location-card">
          <div className="map-card"><div className="map-grid" /><div className="map-orbit orbit-one" /><div className="map-orbit orbit-two" /><div className="map-center"><span><MapPin size={22} /></span><strong>{siteData.ui.mapPinName}</strong><small>{siteData.ui.mapPinLabel}</small></div><span className="map-coord">{siteData.ui.mapCoordinates}</span></div>
          <div className="location-details"><div className="location-block"><span className="detail-icon"><MapPin size={17} /></span><div><small>{siteData.ui.locationWhereLabel}</small><p>{data.address}</p><span>{data.city}</span></div></div><div className="location-block"><span className="detail-icon"><Clock3 size={17} /></span><div><small>{data.hoursTitle}</small>{data.hours.map((line) => <p className="hours-line" key={line.days}><span>{line.days}</span><strong>{line.time}</strong></p>)}</div></div><a href={data.mapsUrl} target="_blank" rel="noreferrer" className="button button-outline maps-button">{siteData.ui.mapsLabel}<ArrowUpRight size={16} /></a><p className="location-disclaimer">{data.note}</p></div>
        </div>
      </div>
    </section>
  );
}
