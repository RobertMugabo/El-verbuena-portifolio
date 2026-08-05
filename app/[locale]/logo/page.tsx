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
    title: locale === 'fr' ? 'Création de Logos | EL-VERBUENA' : 'Logo Design | EL-VERBUENA',
    description: locale === 'fr'
      ? 'Logos mémorables conçus pour renforcer la reconnaissance de votre marque — EL-VERBUENA, Kigali Rwanda.'
      : 'Memorable logo systems designed to strengthen brand recognition — EL-VERBUENA, Kigali Rwanda.',
    openGraph: { images: [{ url: '/assets/img/GakeGake.jpg' }] },
  };
}

const logos = [
  { img: '/assets/img/GakeGake.jpg', name: 'Gake Gake', desc: 'A saving platform for small installment purchases.' },
  { img: '/assets/img/Arcane.jpg', name: 'Arcane Solutions', desc: 'Software development and IT training company.' },
  { img: '/assets/img/CyberNex logo.jpg', name: 'CyberNex', desc: 'Cybersecurity, electronics and software services.' },
  { img: '/assets/img/SHEMA.jpg', name: 'SHEMA Shoes Store', desc: 'Online and physical shoe shop in Kigali, Rwanda.' },
  { img: '/assets/img/Wilson.jpg', name: 'MWESIGYE Wilson', desc: 'Private notary.' },
  { img: '/assets/img/NZOZI.jpg', name: 'NZOZI Collection', desc: 'Handmade bead-bag-making company.' },
  { img: '/assets/img/JF.png', name: 'JF Tech Ltd', desc: 'Software development company.' },
  { img: '/assets/img/fit.png', name: 'Future InnoveTech Ltd', desc: 'Software development and IT company.' },
];

export default async function LogoPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <PortfolioHero
        img="/assets/img/logodesign10.png"
        label="Portfolio"
        title="Logo Design"
        desc="Memorable logo systems designed to strengthen recognition and give your brand a lasting identity."
      />
      <section className="ev-section">
        <div className="ev-container">
          <Link href={`/${locale}`} className="ev-back-link">← Back to Portfolio</Link>
          <div className="ev-gallery-grid">
            {logos.map(({ img, name, desc }, i) => (
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
