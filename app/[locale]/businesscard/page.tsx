'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const cards = [
  { img: '/assets/img/driver.png', name: 'Driver Card', desc: 'Professional driver identification card.' },
  { img: '/assets/img/front.png', name: 'Business Card Front', desc: 'Clean front-side business card design.' },
  { img: '/assets/img/purity.jpg', name: 'Purity Card', desc: 'Elegant service card for a beauty brand.' },
];

export default function BusinessCardPage() {
  const locale = useLocale();
  return (
    <>
      <Navbar />
      <div style={{ marginTop: 70 }}>
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
              {cards.map(({ img, name, desc }) => (
                <div key={name} className="ev-gallery-item">
                  <Image src={img} alt={name} width={400} height={400} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div className="ev-gallery-caption">
                    <strong>{name}</strong>
                    <span>{desc}</span>
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
