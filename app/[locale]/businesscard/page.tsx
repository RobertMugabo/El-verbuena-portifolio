import Image from 'next/image';
import Link from 'next/link';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'fr' ? 'Cartes de Visite | EL-VERBUENA' : 'Business & Service Cards | EL-VERBUENA',
    description: locale === 'fr'
      ? 'Cartes de visite et de service premium — EL-VERBUENA, Kigali Rwanda.'
      : 'Clean, premium business and service card designs — EL-VERBUENA, Kigali Rwanda.',
  };
}

const cards = [
  { img: '/assets/img/driver.png', name: 'Driver Card', desc: 'Professional driver identification card.' },
  { img: '/assets/img/front.png', name: 'Business Card Front', desc: 'Clean front-side business card design.' },
  { img: '/assets/img/purity.jpg', name: 'Purity Card', desc: 'Elegant service card for a beauty brand.' },
];

export default async function BusinessCardPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <div className="ev-portfolio-hero" style={{ backgroundImage: "url('/assets/img/forbusiness.jpg')" }}>
        <div className="ev-portfolio-hero-overlay" />
        <div className="ev-portfolio-hero-content">
          <span className="ev-label">Portfolio</span>
          <h1>Business &amp; Service Cards</h1>
          <p>Clean, premium card designs that help you present your brand professionally in every interaction.</p>
        </div>
      </div>
      <section className="ev-section">
        <div className="ev-container">
          <Link href={`/${locale}`} className="ev-back-link">← Back to Portfolio</Link>
          <div className="ev-gallery-grid">
            {cards.map(({ img, name, desc }, i) => (
              <div key={name} className="ev-gallery-item">
                <Image src={img} alt={name} width={400} height={400} loading={i < 4 ? 'eager' : 'lazy'} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="ev-gallery-caption">
                  <strong>{name}</strong>
                  <span>{desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
