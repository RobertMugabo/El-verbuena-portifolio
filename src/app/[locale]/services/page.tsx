import Image from 'next/image';
import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { services } from '@/lib/portfolio-data';

type Props = { params: Promise<{ locale: string }> };

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'HomePage' });

  return {
    title: locale === 'fr'
      ? 'Services | EL-VERBUENA - Designer Graphique & UI'
      : 'Services | EL-VERBUENA - Graphic Designer & UI Designer',
    description: locale === 'fr'
      ? 'Découvrez les services de design d\'EL-VERBUENA: création de logos, cartes de visite, flyers, pochettes, design UI et packaging pour les entreprises et artistes.'
      : 'Discover EL-VERBUENA design services: logo design, business cards, flyers, covers, UI design, and packaging for businesses and artists.',
  };
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'HomePage' });

  return (
    <section className="ev-section ev-section-alt">
      <div className="ev-container">
        <div className="ev-section-header">
          <span className="ev-label">{t('services.eyebrow')}</span>
          <h2>{t('services.title')}</h2>
          <p>{t('services.description')}</p>
        </div>
        <div className="ev-services-grid">
          {services.map((service) => (
            <Link key={service.key} href={`/${locale}${service.href}`} className="ev-service-card" prefetch={false}>
              <div className="ev-service-img-wrap">
                {(service as any).isVideo ? (
                  <video
                    src={service.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <Image
                    src={service.image}
                    alt={t(`services.items.${service.key}.title` as any)}
                    width={400}
                    height={280}
                    className="ev-service-img"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw,400px"
                  />
                )}
                <div className="ev-service-overlay">
                  <span>{locale === 'en' ? 'View Work →' : 'Voir les projets →'}</span>
                </div>
              </div>
              <div className="ev-service-body">
                <h3>{t(`services.items.${service.key}.title` as any)}</h3>
                <p>{t(`services.items.${service.key}.description` as any)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
