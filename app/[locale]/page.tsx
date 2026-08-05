import Image from 'next/image';
import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'HomePage' });
  const url = `https://el-verbuena.vercel.app/${locale}`;

  return {
    title: locale === 'fr'
      ? 'EL-VERBUENA | Portfolio de Design Graphique & UI — Kigali, Rwanda'
      : 'EL-VERBUENA | Graphic Design & UI Portfolio — Kigali, Rwanda',
    description: t('hero.description'),
    metadataBase: new URL('https://el-verbuena.vercel.app'),
    alternates: {
      canonical: url,
      languages: { en: '/en', fr: '/fr' },
    },
    openGraph: {
      title: 'EL-VERBUENA | Graphic Design & UI Portfolio',
      description: t('hero.description'),
      url,
      siteName: 'EL-VERBUENA',
      images: [{ url: '/assets/img/me.jpg', width: 420, height: 520, alt: 'MUGABO Robert — EL-VERBUENA' }],
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'EL-VERBUENA | Graphic Design & UI Portfolio',
      description: t('hero.description'),
      images: ['/assets/img/me.jpg'],
      creator: '@el_verbuena',
    },
    keywords: ['graphic designer', 'UI designer', 'logo design', 'Kigali', 'Rwanda', 'EL-VERBUENA', 'MUGABO Robert', 'flyer design', 'branding'],
    robots: { index: true, follow: true },
  };
}

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
  { key: 'logo', img: '/assets/img/EV.jpg', route: 'logo' },
  { key: 'cards', img: '/assets/img/forbusiness.jpg', route: 'businesscard' },
  { key: 'flyers', img: '/assets/img/forflyer.png', route: 'flyer' },
  { key: 'covers', img: '/assets/img/song.png', route: 'songcovers' },
  { key: 'uiux', img: '/assets/img/home.jpg', route: 'ui' },
  { key: 'package', img: '/assets/img/pack.png', route: 'package' },
];

const recentWork = [
  { img: '/assets/img/Ibakwe-heroes-day-26.jpg', alt: 'Ibakwe Heroes Day' },
  { img: '/assets/img/Vex.jpg', alt: 'Vex' },
  { img: "/assets/img/Alik's cologne4.jpg", alt: "Alik's Cologne" },
  { img: '/assets/img/Falling.jpg', alt: 'Falling' },
  { img: '/assets/img/GakeGake.jpg', alt: 'GakeGake' },
  { img: '/assets/img/KWIBUKA30-2.jpg', alt: 'KWIBUKA30' },
];

export default async function PortfolioPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'HomePage' });

  return (
    <>
      {/* ── HERO ── */}
      <section className="ev-hero">
        <Image src="/assets/img/first.jpg" alt="" fill priority sizes="100vw" style={{ objectFit: 'cover' }} />
        <div className="ev-hero-overlay" />
        <div className="ev-hero-content">
          <p className="ev-hero-eyebrow">Graphic Design &amp; UI</p>
          <h1>{t('hero.title')}</h1>
          <p className="ev-hero-desc">{t('hero.description')}</p>
          <div className="ev-hero-actions">
            <a href={`/${locale}/services`} className="ev-btn-primary">{t('hero.primaryCta')}</a>
            <a href="#footer" className="ev-btn-outline">{t('hero.secondaryCta')}</a>
          </div>
        </div>
      </section>

      <main>
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
                  <Image 
                    src={img} 
                    alt={alt} 
                    width={400} 
                    height={300} 
                    className="ev-work-img" 
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw,400px"
                  />
                  <div className="ev-work-hover"><span>{alt}</span></div>
                </div>
              ))}
            </div>
            <div className="ev-work-cta">
              <Link href={`/${locale}/services`} className="ev-btn-primary" prefetch={false}>{t('hero.primaryCta')}</Link>
            </div>
          </div>
        </section>
      </main>

      <a href="#" className="ev-back-top" aria-label="Back to top">
        <i className="bi bi-arrow-up-short" />
      </a>

      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'MUGABO Robert',
            alternateName: 'EL-VERBUENA',
            jobTitle: 'Graphic Designer & UI Designer',
            url: 'https://el-verbuena.vercel.app',
            image: 'https://el-verbuena.vercel.app/assets/img/me.jpg',
            address: { '@type': 'PostalAddress', addressLocality: 'Kigali', addressCountry: 'RW' },
            sameAs: [
              'https://x.com/el_verbuena',
              'https://www.instagram.com/el_verbuena_k2/',
              'https://www.linkedin.com/in/mugabo-robert-7647a428b/',
              'https://www.facebook.com/roberto.cresswell.33',
            ],
          }),
        }}
      />
    </>
  );
}
