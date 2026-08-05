import Image from 'next/image';
import Link from 'next/link';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'fr' ? 'Flyers, Affiches & Bannières | EL-VERBUENA' : 'Flyers, Posters & Banners | EL-VERBUENA',
    description: locale === 'fr'
      ? 'Visuels promotionnels accrocheurs pour événements, campagnes et annonces — EL-VERBUENA, Kigali Rwanda.'
      : 'Attention-grabbing promotional visuals for events, campaigns and announcements — EL-VERBUENA, Kigali Rwanda.',
    openGraph: { images: [{ url: '/assets/img/Vex.jpg' }] },
  };
}

const flyers = [
  '/assets/img/Vex.jpg',
  '/assets/img/Ibakwe-heroes-day-26.jpg',
  '/assets/img/Future InnovaTech Ltd flyer.jpg',
  '/assets/img/IBYIGISHO-2.jpg',
  '/assets/img/p2.jpg',
  '/assets/img/p1.jpg',
  '/assets/img/weekend.jpg',
  '/assets/img/Motor.jpg',
  '/assets/img/ed.jpg',
  '/assets/img/corporate.jpg',
  '/assets/img/IAD Tarrif.jpg',
  '/assets/img/thecohort.png',
  '/assets/img/Barista.jpg',
  '/assets/img/carbaba flyer.jpg',
  '/assets/img/KWIBUKA30-2.jpg',
  '/assets/img/What are you looking for.jpg',
  "/assets/img/let's complete it copy.jpg",
  '/assets/img/Discount.jpg',
];

export default async function FlyerPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <div className="ev-portfolio-hero" style={{ backgroundImage: "url('/assets/img/fff.png')" }}>
        <div className="ev-portfolio-hero-overlay" />
        <div className="ev-portfolio-hero-content">
          <span className="ev-label">Portfolio</span>
          <h1>Flyers, Posters &amp; Banners</h1>
          <p>Attention-grabbing promotional visuals created to communicate fast and convert interest into action.</p>
        </div>
      </div>
      <section className="ev-section">
        <div className="ev-container">
          <Link href={`/${locale}`} className="ev-back-link">← Back to Portfolio</Link>
          <div className="ev-gallery-grid">
            {flyers.map((img, i) => (
              <div key={img} className="ev-gallery-item">
                <Image
                  src={img}
                  alt="Flyer design by EL-VERBUENA"
                  width={400}
                  height={400}
                  loading={i < 4 ? 'eager' : 'lazy'}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
