import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Script from 'next/script';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'HomePage' });
  
  return {
    title: locale === 'fr' 
      ? 'À propos | EL-VERBUENA - Designer Graphique & UI'
      : 'About | EL-VERBUENA - Graphic Designer & UI Designer',
    description: locale === 'fr'
      ? 'Découvrez MUGABO Robert (EL-VERBUENA), designer graphique et UI basé à Kigali, Rwanda, spécialisé en branding, logo design et interfaces digitales.'
      : 'Learn about MUGABO Robert (EL-VERBUENA), a graphic designer and UI designer based in Kigali, Rwanda specializing in branding, logo design, and digital interfaces.',
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'HomePage' });

  return (
    <>
      <section className="ev-section">
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
                sizes="(max-width: 768px) 100vw,420px"
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
              <a href="#footer" className="ev-btn-primary">{t('hero.secondaryCta')}</a>
            </div>
          </div>
        </div>
      </section>

      <Script
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
