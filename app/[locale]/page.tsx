'use client';

import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { useTranslations, useLocale } from 'next-intl';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const skills = [
  { name: 'Adobe Photoshop', val: 95 },
  { name: 'Adobe Illustrator', val: 85 },
  { name: 'Adobe XD', val: 80 },
  { name: 'Figma', val: 85 },
  { name: 'Adobe After Effects', val: 70 },
  { name: 'Content Creation', val: 85 },
  { name: 'Social Media Management', val: 70 },
];

const services = [
  { key: 'logo', img: '/assets/img/EV.jpg', route: 'logo', hasPage: true },
  { key: 'cards', img: '/assets/img/forbusiness.jpg', route: 'businesscard', hasPage: true },
  { key: 'flyers', img: '/assets/img/forflyer.png', route: 'flyer', hasPage: true },
  { key: 'covers', img: '/assets/img/song.png', route: 'songcovers', hasPage: true },
  { key: 'uiux', img: '/assets/img/home.jpg', route: 'ui', hasPage: true },
  { key: 'package', img: '/assets/img/pack.png', route: 'package', hasPage: true },
  { key: 'bookcover', img: '/assets/img/bookcover.jpg', hasPage: false },
  { key: 'motion', video: '/assets/videos/motion.mp4', hasPage: false },
];

const recentWork = [
  { img: '/assets/img/Ibakwe-heroes-day-26.jpg', alt: 'Ibakwe Heroes Day' },
  { img: '/assets/img/Vex.jpg', alt: 'Vex' },
  { img: "/assets/img/Alik's cologne4.jpg", alt: "Alik's Cologne" },
  { img: '/assets/img/Falling.jpg', alt: 'Falling' },
  { img: '/assets/img/GakeGake.jpg', alt: 'GakeGake' },
  { img: '/assets/img/KWIBUKA30-2.jpg', alt: 'KWIBUKA30' },
];

export default function PortfolioPage() {
  const t = useTranslations('HomePage');
  const locale = useLocale();

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      {/* Preload hero image for faster LCP */}
      <link rel="preload" as="image" href="/assets/img/first.jpg" />

      <section className="ev-hero" style={{ backgroundImage: "url('/assets/img/first.jpg')" }}>
        <div className="ev-hero-overlay" />
        <div className="ev-hero-content animate__animated animate__fadeInUp">
          <p className="ev-hero-eyebrow">Graphic Design &amp; UI</p>
          <h1>{t('hero.title')}</h1>
          <p className="ev-hero-desc">{t('hero.description')}</p>
          <div className="ev-hero-actions">
            <a href={`/${locale}/flyer`} className="ev-btn-primary">{t('hero.primaryCta')}</a>
            <a href="#contact" className="ev-btn-outline">{t('hero.secondaryCta')}</a>
          </div>
        </div>
      </section>

      <main>
        {/* ── ABOUT ── */}
        <section id="about" className="ev-section">
          <div className="ev-container">
            <div className="ev-about-grid">
              <div className="ev-about-img-wrap">
                <Image
                  src="/assets/img/me.jpg"
                  alt={t('about.imageAlt')}
                  width={420}
                  height={520}
                  className="ev-about-img"
                  priority
                />
                <div className="ev-about-socials">
                  <a href="https://x.com/el_verbuena" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter-x" /></a>
                  <a href="https://www.facebook.com/roberto.cresswell.33" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook" /></a>
                  <a href="https://www.instagram.com/el_verbuena_k2/" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram" /></a>
                  <a href="https://www.linkedin.com/in/mugabo-robert-7647a428b/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin" /></a>
                </div>
              </div>
              <div className="ev-about-text">
                <span className="ev-label">{t('about.eyebrow')}</span>
                <h2>{t('about.name')}</h2>
                <p className="ev-about-role">{t('about.role')}</p>
                <p>{t('about.paragraph1')}</p>
                <p>{t('about.paragraph2')}</p>
                <p>{t('about.paragraph3')}</p>
                <p className="ev-about-closing"><em>{t('about.closing')}</em></p>
                <a href="#contact" className="ev-btn-primary">{t('hero.secondaryCta')}</a>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section id="services" className="ev-section ev-section-alt">
          <div className="ev-container">
            <div className="ev-section-header">
              <span className="ev-label">{t('services.eyebrow')}</span>
              <h2>{t('services.title')}</h2>
              <p>{t('services.description')}</p>
            </div>
            <div className="ev-services-grid">
              {services.map(({ key, img, video, route, hasPage }) => {
                const Card = hasPage ? Link : 'div';
                const cardProps = hasPage ? { href: `/${locale}/${route}` } : {};
                return (
                  <Card key={key} className="ev-service-card" {...cardProps}>
                    <div className="ev-service-img-wrap">
                      {video ? (
                        <video
                          src={video}
                          alt={t(`services.items.${key}.title` as any)}
                          className="ev-service-img"
                          muted
                          loop
                          autoPlay
                          playsInline
                        />
                      ) : (
                        <Image src={img} alt={t(`services.items.${key}.title` as any)} width={400} height={280} className="ev-service-img" />
                      )}
                      {hasPage && (
                        <div className="ev-service-overlay">
                          <span>{locale === 'en' ? 'View Work' : 'Voir les projets'} →</span>
                        </div>
                      )}
                    </div>
                    <div className="ev-service-body">
                      <h3>{t(`services.items.${key}.title` as any)}</h3>
                      <p>{t(`services.items.${key}.description` as any)}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section id="skills" className="ev-section">
          <div className="ev-container">
            <div className="ev-section-header">
              <span className="ev-label">{t('skills.eyebrow')}</span>
              <h2>{t('skills.title')}</h2>
              <p>{t('skills.description')}</p>
            </div>
            <div className="ev-skills-grid">
              {skills.map(({ name, val }) => (
                <div key={name} className="ev-skill-item">
                  <div className="ev-skill-meta">
                    <span>{name}</span>
                    <span>{val}%</span>
                  </div>
                  <div className="ev-skill-track">
                    <div className="ev-skill-bar" style={{ width: `${val}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RECENT WORK ── */}
        <section id="recent-work" className="ev-section ev-section-alt">
          <div className="ev-container">
            <div className="ev-section-header">
              <span className="ev-label">{t('work.eyebrow')}</span>
              <h2>{t('work.title')}</h2>
              <p>{t('work.description')}</p>
            </div>
            <div className="ev-work-grid">
              {recentWork.map(({ img, alt }) => (
                <div key={img} className="ev-work-item">
                  <Image src={img} alt={alt} width={400} height={300} className="ev-work-img" />
                  <div className="ev-work-hover">
                    <span>{alt}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="ev-work-cta">
              <Link href={`/${locale}/flyer`} className="ev-btn-primary">{t('hero.primaryCta')}</Link>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section id="testimonials" className="ev-section">
          <div className="ev-container">
            <div className="ev-section-header">
              <span className="ev-label">{t('testimonials.eyebrow')}</span>
              <h2>{t('testimonials.title')}</h2>
              <p>{t('testimonials.description')}</p>
            </div>
            <div className="ev-testimonials-grid">
              <div className="ev-testimonial-card">
                <i className="bx bxs-quote-alt-left ev-quote-icon" />
                <p>"{t('testimonials.items.rogerQuote')}"</p>
                <div className="ev-testimonial-author">
                  <strong>IZERE HIRWA Roger</strong>
                  <span>{t('testimonials.items.rogerRole')}</span>
                </div>
              </div>
              <div className="ev-testimonial-card">
                <i className="bx bxs-quote-alt-left ev-quote-icon" />
                <p>"{t('testimonials.items.felixQuote')}"</p>
                <div className="ev-testimonial-author">
                  <strong>UWAYEZU Jean Felix</strong>
                  <span>{t('testimonials.items.felixRole')}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <a href="#" className="ev-back-top" aria-label="Back to top">
        <i className="bi bi-arrow-up-short" />
      </a>

      <Script src="/assets/js/main.js" strategy="lazyOnload" />
    </>
  );
}
