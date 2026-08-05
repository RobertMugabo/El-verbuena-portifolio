'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const uiWork = [
  { img: '/assets/img/home.png', name: 'Home Screen UI', desc: 'Mobile app home screen design.' },
  { img: '/assets/img/honeymoon.jpg', name: 'Honeymoon App', desc: 'Travel and booking app interface.' },
  { img: '/assets/img/home.jpg', name: 'Web Dashboard', desc: 'Clean web dashboard mockup.' },
];

export default function UIPage() {
  const locale = useLocale();
  return (
    <>
      <Navbar />
      <div style={{ marginTop: 70 }}>
        <div className="ev-portfolio-hero" style={{ backgroundImage: "url('/assets/img/ui.jpg')" }}>
          <div className="ev-portfolio-hero-overlay" />
          <div className="ev-portfolio-hero-content">
            <span className="ev-label">Portfolio</span>
            <h1>UI Design</h1>
            <p>Modern interface concepts and mockups for websites and apps that balance usability with visual appeal.</p>
          </div>
        </div>

        <section className="ev-section">
          <div className="ev-container">
            <Link href={`/${locale}`} className="ev-back-link">← Back to Portfolio</Link>
            <div className="ev-gallery-grid">
              {uiWork.map(({ img, name, desc }) => (
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
