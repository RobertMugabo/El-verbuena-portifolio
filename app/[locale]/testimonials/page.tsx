'use client';

import { useTranslations } from 'next-intl';

export default function TestimonialsPage() {
  const t = useTranslations('HomePage');

  return (
    <section className="ev-section">
      <div className="ev-container">
        <div className="ev-section-header">
          <span className="ev-label">{t('testimonials.eyebrow')}</span>
          <h2>{t('testimonials.title')}</h2>
          <p>{t('testimonials.description')}</p>
        </div>
        <div className="ev-testimonials-grid">
          <div className="ev-testimonial-card">
            <i className="bx bxs-quote-alt-left ev-quote-icon" />
            <p>"{t('testimonials.items.rogerQuote')}"</p>
            <div className="ev-testimonial-author">
              <strong>IZERE HIRWA Roger</strong>
              <span>{t('testimonials.items.rogerRole')}</span>
            </div>
          </div>
          <div className="ev-testimonial-card">
            <i className="bx bxs-quote-alt-left ev-quote-icon" />
            <p>"{t('testimonials.items.felixQuote')}"</p>
            <div className="ev-testimonial-author">
              <strong>UWAYEZU Jean Felix</strong>
              <span>{t('testimonials.items.felixRole')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
