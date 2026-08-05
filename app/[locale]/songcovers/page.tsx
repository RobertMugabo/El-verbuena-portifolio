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
    title: locale === 'fr' ? 'Pochettes de Chansons & Films | EL-VERBUENA' : 'Song & Movie Covers | EL-VERBUENA',
    description: locale === 'fr'
      ? 'Pochettes qui capturent l\'émotion et l\'identité en un seul regard — EL-VERBUENA, Kigali Rwanda.'
      : 'Cover artwork that captures emotion, personality and story at a single glance — EL-VERBUENA, Kigali Rwanda.',
  };
}

const covers = [
  { img: '/assets/img/Bad energy2.jpg', name: 'Bad Energy' },
  { img: '/assets/img/song.png', name: 'Song Cover' },
  { img: '/assets/img/sad feelings1.jpg', name: 'Sad Feelings' },
  { img: '/assets/img/Hidden evil.jpg', name: 'Hidden Evil' },
  { img: '/assets/img/24-Hours.jpg', name: '24 Hours' },
  { img: '/assets/img/GUD VYBZ.jpg', name: 'GUD VYBZ' },
  { img: '/assets/img/Vex Prince MONEY ft. Dorty cover art DSPs.jpg', name: 'Vex Prince – MONEY' },
  { img: '/assets/img/Falling.jpg', name: 'Falling' },
  { img: '/assets/img/NZOZI.jpg', name: 'NZOZI' },
  { img: '/assets/img/YT1.jpg', name: 'YT Cover' },
];

export default async function SongCoversPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <PortfolioHero
        img="/assets/img/msc.png"
        label="Portfolio"
        title="Song & Movie Covers"
        desc="Cover artwork that captures emotion, personality and story at a single glance."
      />
      <section className="ev-section">
        <div className="ev-container">
          <Link href={`/${locale}`} className="ev-back-link">← Back to Portfolio</Link>
          <div className="ev-gallery-grid">
            {covers.map(({ img, name }, i) => (
              <div key={name} className="ev-gallery-item">
                <Image src={img} alt={name} width={400} height={400} loading={i < 4 ? 'eager' : 'lazy'} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="ev-gallery-caption"><strong>{name}</strong></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
