import Image from 'next/image';
import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'fr' ? 'Services | EL-VERBUENA' : 'Services | EL-VERBUENA',
    description: locale === 'fr'
      ? 'Services de design graphique et UI — logos, flyers, cartes, pochettes, packaging — EL-VERBUENA, Kigali Rwanda.'
      : 'Graphic design and UI services — logos, flyers, cards, covers, packaging — EL-VERBUENA, Kigali Rwanda.',
  };
}

const services = [
  { key: 'logo', img: '/assets/img/EV.jpg', route: 'logo' },
  { key: 'cards', img: '/assets/img/forbusiness.jpg', route: 'businesscard' },
  { key: 'flyers', img: '/assets/img/forflyer.png', route: 'flyer' },
  { key: 'covers', img: '/assets/img/song.png', route: 'songcovers' },
  { key: 'uiux', img: '/assets/img/home.jpg', route: 'ui' },
  { key: 'package', img: '/assets/img/pack.png', route: 'package' },
];

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'HomePage' });

  return (
    <section className="ev-section ev-section-alt" style={{ marginTop: 70 }}>
      <div className="ev-container">
        <div className="ev-section-header">
          <span className="ev-label">{t('services.eyebrow')}</span>
          <h2>{t('services.title')}</h2>
          <p>{t('services.description')}</p>
        </div>
        <div className="ev-services-grid">
          {services.map(({ key, img, route }, i) => (
            <Link key={key} href={`/${locale}/${route}`} className="ev-service-card" prefetch={false}>
              <div className="ev-service-img-wrap">
                <Image
                  src={img}
                  alt={t(`services.items.${key}.title` as any)}
                  width={400}
                  height={280}
                  className="ev-service-img"
                  loading={i < 3 ? 'eager' : 'lazy'}
                />
                <div className="ev-service-overlay">
                  <span>{locale === 'en' ? 'View Work →' : 'Voir les projets →'}</span>
                </div>
              </div>
              <div className="ev-service-body">
                <h3>{t(`services.items.${key}.title` as any)}</h3>
                <p>{t(`services.items.${key}.description` as any)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
