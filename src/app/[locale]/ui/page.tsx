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
    title: locale === 'fr' ? 'Design UI | EL-VERBUENA' : 'UI Design | EL-VERBUENA',
    description: locale === 'fr'
      ? 'Maquettes modernes pour sites web et applications — EL-VERBUENA, Kigali Rwanda.'
      : 'Modern interface mockups for websites and apps — EL-VERBUENA, Kigali Rwanda.',
  };
}

const uiWork = [
  { img: '/assets/img/home.png', name: 'Home Screen UI', desc: 'Mobile app home screen design.' },
  { img: '/assets/img/honeymoon.jpg', name: 'Honeymoon App', desc: 'Travel and booking app interface.' },
  { img: '/assets/img/home.jpg', name: 'Web Dashboard', desc: 'Clean web dashboard mockup.' },
];

export default async function UIPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <PortfolioHero
        img="/assets/img/ui.jpg"
        label="Portfolio"
        title="UI Design"
        desc="Modern interface concepts and mockups for websites and apps that balance usability with visual appeal."
      />
      <section className="ev-section">
        <div className="ev-container">
          <Link href={`/${locale}`} className="ev-back-link">← Back to Portfolio</Link>
          <div className="ev-gallery-grid">
            {uiWork.map(({ img, name, desc }, i) => (
              <div key={name} className="ev-gallery-item">
                <Image src={img} alt={name} width={400} height={400} loading={i < 4 ? 'eager' : 'lazy'} sizes="(max-width: 600px) 50vw, (max-width: 900px) 33vw, 25vw" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
