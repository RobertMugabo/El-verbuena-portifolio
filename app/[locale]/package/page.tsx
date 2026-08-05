'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const packages = [
  { img: '/assets/img/ff.png', name: 'Product Package', desc: 'Premium product packaging design.' },
  { img: '/assets/img/pack.png', name: 'Package Mockup', desc: 'Packaging mockup for retail product.' },
  { img: "/assets/img/Alik's cologne4.jpg", name: "Alik's Cologne", desc: 'Cologne bottle packaging and label.' },
];

export default function PackagePage() {
  const locale = useLocale();
  return (
    <>
      <Navbar />
      <div style={{ marginTop: 70 }}>
        <div className="ev-portfolio-hero" style={{ backgroundImage: "url('/assets/img/ff.png')" }}>
          <div className="ev-portfolio-hero-overlay" />
          <div className="ev-portfolio-hero-content">
            <span className="ev-label">Portfolio</span>
            <h1>Package Design</h1>
            <p>Packaging visuals that improve shelf presence, product perception and overall brand consistency.</p>
          </div>
        </div>

        <section className="ev-section">
          <div className="ev-container">
            <Link href={`/${locale}`} className="ev-back-link">← Back to Portfolio</Link>
            <div className="ev-gallery-grid">
              {packages.map(({ img, name, desc }) => (
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
