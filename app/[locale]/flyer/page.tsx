'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
  "/assets/img/What are you looking for.jpg",
  "/assets/img/let's complete it copy.jpg",
  '/assets/img/Discount.jpg',
];

export default function FlyerPage() {
  const locale = useLocale();
  return (
    <>
      <Navbar />
      <div style={{ marginTop: 70 }}>
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
              {flyers.map((img) => (
                <div key={img} className="ev-gallery-item">
                  <Image src={img} alt="Flyer design" width={400} height={400} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
