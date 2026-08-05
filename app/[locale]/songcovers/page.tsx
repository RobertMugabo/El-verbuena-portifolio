'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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

export default function SongCoversPage() {
  const locale = useLocale();
  return (
    <>
      <Navbar />
      <div style={{ marginTop: 70 }}>
        <div className="ev-portfolio-hero" style={{ backgroundImage: "url('/assets/img/msc.png')" }}>
          <div className="ev-portfolio-hero-overlay" />
          <div className="ev-portfolio-hero-content">
            <span className="ev-label">Portfolio</span>
            <h1>Song &amp; Movie Covers</h1>
            <p>Cover artwork that captures emotion, personality and story at a single glance.</p>
          </div>
        </div>

        <section className="ev-section">
          <div className="ev-container">
            <Link href={`/${locale}`} className="ev-back-link">← Back to Portfolio</Link>
            <div className="ev-gallery-grid">
              {covers.map(({ img, name }) => (
                <div key={name} className="ev-gallery-item">
                  <Image src={img} alt={name} width={400} height={400} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div className="ev-gallery-caption">
                    <strong>{name}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
