'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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

export default function LogoPage() {
  const locale = useLocale();
  return (
    <>
      <Navbar />
      <div style={{ marginTop: 70 }}>
        <div className="ev-portfolio-hero" style={{ backgroundImage: "url('/assets/img/logodesign10.png')" }}>
          <div className="ev-portfolio-hero-overlay" />
          <div className="ev-portfolio-hero-content">
            <span className="ev-label">Portfolio</span>
            <h1>Logo Design</h1>
            <p>Memorable logo systems designed to strengthen recognition and give your brand a lasting identity.</p>
          </div>
        </div>

        <section className="ev-section">
          <div className="ev-container">
            <Link href={`/${locale}`} className="ev-back-link">← Back to Portfolio</Link>
            <div className="ev-gallery-grid">
              {logos.map(({ img, name, desc }) => (
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
