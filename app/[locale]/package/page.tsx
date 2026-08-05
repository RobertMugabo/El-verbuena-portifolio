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
    title: locale === 'fr' ? 'Design de Packaging | EL-VERBUENA' : 'Package Design | EL-VERBUENA',
    description: locale === 'fr'
      ? 'Visuels de packaging qui améliorent la présence en rayon — EL-VERBUENA, Kigali Rwanda.'
      : 'Packaging visuals that improve shelf presence and brand consistency — EL-VERBUENA, Kigali Rwanda.',
  };
}

const packages = [
  { img: '/assets/img/ff.png', name: 'Product Package', desc: 'Premium product packaging design.' },
  { img: '/assets/img/pack.png', name: 'Package Mockup', desc: 'Packaging mockup for retail product.' },
  { img: "/assets/img/Alik's cologne4.jpg", name: "Alik's Cologne", desc: 'Cologne bottle packaging and label.' },
];

export default async function PackagePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <PortfolioHero
        img="/assets/img/ff.png"
        label="Portfolio"
        title="Package Design"
        desc="Packaging visuals that improve shelf presence, product perception and overall brand consistency."
      />
      <section className="ev-section">
        <div className="ev-container">
          <Link href={`/${locale}`} className="ev-back-link">← Back to Portfolio</Link>
          <div className="ev-gallery-grid">
            {packages.map(({ img, name, desc }, i) => (
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
