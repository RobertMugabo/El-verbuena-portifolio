import Image from 'next/image';
import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getServiceByKey, serviceKeys, services } from '@/lib/portfolio-data';
import PortfolioHero from '@/components/PortfolioHero';

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return serviceKeys.flatMap((slug) => [
    { locale: 'en', slug },
    { locale: 'fr', slug },
  ]);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = getServiceByKey(slug);
  if (!service) return {};
  const t = await getTranslations({ locale, namespace: 'HomePage' });
  const title = t(`services.items.${service.key}.title` as any);
  return {
    title: `${title} | EL-VERBUENA`,
    description: t(`services.items.${service.key}.description` as any),
  };
}

export default async function WorkCategoryPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const service = getServiceByKey(slug);
  if (!service) notFound();

  const t = await getTranslations({ locale, namespace: 'HomePage' });
  const title = t(`services.items.${service.key}.title` as any);
  const desc = t(`services.items.${service.key}.description` as any);

  const galleryItems = service.details.length > 0 ? service.details : service.gallery.filter((img) => img !== service.heroImage).map((img) => ({ image: img, title: '', description: '' }));
  const otherServices = services.filter((s) => s.key !== service.key);
  const isVideoCategory = (service as any).isVideo;

  return (
    <>
      <PortfolioHero img={service.heroImage} label="Portfolio" title={title} desc={desc} isVideo={isVideoCategory} />

      <section className="ev-section">
        <div className="ev-container">
          <Link href={`/${locale}/services`} className="ev-back-link">← {locale === 'fr' ? 'Retour aux services' : 'Back to Services'}</Link>
          <div className="ev-gallery-grid">
            {galleryItems.map(({ image, title: itemTitle }, i) => (
              <div key={image} className="ev-gallery-item">
                {isVideoCategory ? (
                  <video
                    src={image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <Image
                    src={image}
                    alt={itemTitle || title}
                    width={400}
                    height={400}
                    loading={i < 4 ? 'eager' : 'lazy'}
                    sizes="(max-width: 600px) 50vw, (max-width: 900px) 33vw, 25vw"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                )}
                {itemTitle && (
                  <div className="ev-gallery-caption">
                    <strong>{itemTitle}</strong>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ev-section ev-section-alt">
        <div className="ev-container">
          <div className="ev-section-header">
            <span className="ev-label">{locale === 'fr' ? 'Plus de travaux' : 'More Work'}</span>
            <h2>{locale === 'fr' ? 'Autres services' : 'Other Services'}</h2>
          </div>
          <div className="ev-services-grid">
            {otherServices.map((item) => (
              <Link key={item.key} href={`/${locale}/work/${item.key}`} className="ev-service-card" prefetch={false}>
                <div className="ev-service-img-wrap">
                  {(item as any).isVideo ? (
                    <video
                      src={item.image}
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <Image
                      src={item.image}
                      alt={t(`services.items.${item.key}.title` as any)}
                      width={400}
                      height={280}
                      className="ev-service-img"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  )}
                  <div className="ev-service-overlay">
                    <span>{locale === 'fr' ? 'Voir les projets →' : 'View Work →'}</span>
                  </div>
                </div>
                <div className="ev-service-body">
                  <h3>{t(`services.items.${item.key}.title` as any)}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
