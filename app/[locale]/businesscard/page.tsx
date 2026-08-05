import Image from 'next/image';
import Link from 'next/link';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import PortfolioHero from '@/components/PortfolioHero';

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }];
}

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
      <PortfolioHero
        img="/assets/img/forbusiness.jpg"
        label="Portfolio"
        title="Business & Service Cards"
        desc="Clean, premium card designs that help you present your brand professionally in every interaction."
      />
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
