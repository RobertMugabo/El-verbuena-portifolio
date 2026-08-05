import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'HomePage' });
  
  return {
    title: locale === 'fr'
      ? 'Témoignages | EL-VERBUENA - Designer Graphique & UI'
      : 'Testimonials | EL-VERBUENA - Graphic Designer & UI Designer',
    description: locale === 'fr'
      ? 'Découvrez ce que les clients disent de leur collaboration avec EL-VERBUENA. Qualité créative, constance et fiabilité sont les raisons pour lesquelles les clients recommandent ce travail.'
      : 'Discover what clients say about working with EL-VERBUENA. Creative quality, consistency and reliability are the reasons clients keep recommending this work.',
  };
}

export default async function TestimonialsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'HomePage' });

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
