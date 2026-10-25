import { Star } from "lucide-react";
import { siteData } from "@/data/siteData";

export function Reviews() {
  const data = siteData.reviews;
  return (
    <section className="reviews-section section-pad" id="opiniones">
      <div className="page-width">
        <div className="reviews-top"><div><p className="eyebrow">{data.eyebrow}</p><h2>{data.title}</h2></div><div className="rating"><span>{data.rating}</span><div><div className="stars" aria-label={`${data.stars} ${siteData.ui.reviewStarsLabel}`}>{Array.from({ length: data.stars }, (_, index) => <Star key={index} size={14} fill="currentColor" />)}</div><small>{data.totalLabel}</small></div></div></div>
        <div className="review-grid">{data.quotes.map((quote, index) => <article className="review-card" key={`${quote.author}-${index}`}><div className="review-stars">{Array.from({ length: data.stars }, (_, i) => <Star key={i} size={12} fill="currentColor" />)}</div><blockquote>“{quote.text}”</blockquote><div className="review-author"><span className="author-avatar">{String(index + 1).padStart(2, "0")}</span><span><strong>{quote.author}</strong><small>{quote.detail}</small></span></div></article>)}</div>
        <p className="review-source">{data.source} · {data.disclaimer}</p>
      </div>
    </section>
  );
}
