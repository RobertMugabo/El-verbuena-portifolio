import Image from "next/image";
import {getTranslations, setRequestLocale} from "next-intl/server";
import {notFound} from "next/navigation";
import {Link} from "@/i18n/navigation";
import {getServiceByKey, serviceKeys, services} from "@/lib/portfolio-data";

export function generateStaticParams() {
  return serviceKeys.map((slug) => ({slug}));
}

export default async function WorkCategoryPage({
  params
}: {
  params: Promise<{locale: string; slug: string}>;
}) {
  const {locale, slug} = await params;
  setRequestLocale(locale);

  const service = getServiceByKey(slug);

  if (!service) {
    notFound();
  }

  const home = await getTranslations({locale, namespace: "HomePage"});
  const page = await getTranslations({locale, namespace: "PortfolioPage"});

  return (
    <main className="page-shell">
      <section className="hero-section">
        <header className="site-header">
          <Link href="/" locale={locale} className="brand">
            <Image
              src="/assets/img/logo.png"
              alt="EL-VERBUENA logo"
              width={54}
              height={54}
              className="brand-logo"
            />
            <span>EL-VERBUENA</span>
          </Link>

          <Link href="/" locale={locale} className="locale-link">
            {page("backHome")}
          </Link>
        </header>

        <div className="detail-hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{page("eyebrow")}</p>
            <h1>{home(`services.items.${service.key}.title`)}</h1>
            <p className="hero-text">{home(`work.showcase.${service.key}`)}</p>
            <div className="hero-actions">
              <a href="#gallery" className="button primary">
                {page("galleryTitle")}
              </a>
              <a href={`/${locale}#contact`} className="button secondary">
                {page("ctaButton")}
              </a>
            </div>
          </div>

          <div className="hero-card">
            <Image
              src={service.heroImage}
              alt={home(`services.items.${service.key}.title`)}
              width={800}
              height={600}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      <section id="gallery" className="content-section">
        <div className="section-heading">
          <p className="eyebrow">{page("galleryEyebrow")}</p>
          <h2>{page("galleryTitle")}</h2>
          <p>{page("galleryDescription")}</p>
        </div>

        {service.details.length > 0 ? (
          <div className="detail-gallery-grid">
            {service.details.map((item, i) => (
              <article key={item.image} className="detail-card">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={640}
                  height={640}
                  loading={i < 4 ? 'eager' : 'lazy'}
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                  className="detail-gallery-image"
                />
                <div className="detail-copy">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="detail-gallery-grid">
            {service.gallery.map((image, i) => (
              <div key={image} className="gallery-card">
                <Image
                  src={image}
                  alt={home(`services.items.${service.key}.title`)}
                  width={640}
                  height={640}
                  loading={i < 4 ? 'eager' : 'lazy'}
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                  className="detail-gallery-image"
                />
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">{page("moreEyebrow")}</p>
          <h2>{page("moreTitle")}</h2>
          <p>{page("moreDescription")}</p>
        </div>

        <div className="services-grid">
          {services
            .filter((item) => item.key !== service.key)
            .map((item) => (
              <Link key={item.key} href={item.href} locale={locale} className="service-link-card">
                <article className="service-card">
                  <Image
                    src={item.image}
                    alt={home(`services.items.${item.key}.title`)}
                    width={520}
                    height={360}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="service-image"
                  />
                  <div className="service-copy">
                    <h3>{home(`services.items.${item.key}.title`)}</h3>
                    <p>{home(`work.showcase.${item.key}`)}</p>
                  </div>
                </article>
              </Link>
            ))}
        </div>
      </section>
    </main>
  );
}
