'use client';

import Script from 'next/script';
import {useTranslations, useLocale} from 'next-intl';
import {usePathname, useRouter} from 'next/navigation';

export default function PortfolioPage() {
  const t = useTranslations('HomePage');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };
  return (
    <>
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex justify-content-between">
          <div className="logo">
            <img src="/assets/img/logo.png" alt="" />&nbsp;&nbsp;<a href="/">EL-VERBUENA</a>
          </div>
          <nav id="navbar" className="navbar">
            <ul>
              <li><a href="#about">{t('nav.about')}</a></li>
              <li><a href="#services">{t('nav.services')}</a></li>
              <li><a href="#skills">{t('nav.skills')}</a></li>
              <li><a href="#testimonials">{t('nav.testimonials')}</a></li>
              <li><a href="#contact">{t('nav.contact')}</a></li>
              <li>
                <button 
                  onClick={() => switchLocale(locale === 'en' ? 'fr' : 'en')}
                  style={{
                    background: 'none',
                    border: '1px solid #ef3d01',
                    color: '#ef3d01',
                    padding: '5px 15px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  {locale === 'en' ? (
                    <>
                      <img 
                        src="https://flagcdn.com/w20/fr.png" 
                        alt="French" 
                        style={{width: '20px', height: '15px', objectFit: 'cover'}}
                      />
                      Français
                    </>
                  ) : (
                    <>
                      <img 
                        src="https://flagcdn.com/w20/gb.png" 
                        alt="English" 
                        style={{width: '20px', height: '15px', objectFit: 'cover'}}
                      />
                      English
                    </>
                  )}
                </button>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>

      <section id="hero">
        <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active" style={{backgroundImage: "url('/assets/img/first.jpg')"}}>
              <div className="carousel-container">
                <div className="carousel-content animate__animated animate__fadeInUp">
                  <h2>{t('hero.title')}</h2>
                  <p>{t('hero.description')}</p>
                  <div className="text-center"><a href="#about" className="btn-get-started">{t('hero.primaryCta')}</a></div>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bx bx-left-arrow" aria-hidden="true"></span>
          </a>
          <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon bx bx-right-arrow" aria-hidden="true"></span>
          </a>
          <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>
        </div>
      </section>

      <main id="main">
        <section id="about" className="team section-bg">
          <div className="container">
            <div className="section-title"></div>
            <div className="row">
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <div className="member-img">
                    <img src="/assets/img/me.jpg" className="img-fluid" alt="" />
                    <div className="social">
                      <a href="https://x.com/el_verbuena"><i className="bi bi-twitter"></i></a>
                      <a href="https://www.facebook.com/roberto.cresswell.33"><i className="bi bi-facebook"></i></a>
                      <a href="https://www.instagram.com/el_verbuena_k2/"><i className="bi bi-instagram"></i></a>
                      <a href="https://www.linkedin.com/in/mugabo-robert-7647a428b/"><i className="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>{t('about.name')}</h4>
                    <span>{t('about.role')}</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch" style={{width: '700px'}}>
                <div className="member" style={{width: '700px'}}>
                  <div className="member-img" style={{width: '600px'}}>
                    <div className="social"></div>
                  </div>
                  <div className="member-info" id="member-info">
                    <h2><strong>{t('about.eyebrow')}</strong></h2><br/><br/>
                    <h4 style={{textAlign: 'left', fontWeight: 300}}>
                      {t('about.paragraph1')} {t('about.paragraph2')} {t('about.paragraph3')}
                    </h4>
                    <span>{t('about.closing')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="team section-bg">
          <div className="container">
            <div className="section-title">
              <h2><strong>{t('services.eyebrow')}</strong></h2>
              <p>{t('services.description')}</p>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <div className="member-img">
                    <img src="/assets/img/EV.jpg" className="img-fluid" alt="" />
                    <div className="social">
                      <a href="logo.html">Logo design<i className="bi bi-dot"></i></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>{t('services.items.logo.title')}</h4>
                    <span>{t('services.items.logo.description')}</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <div className="member-img">
                    <img src="/assets/img/forbusiness.jpg" className="img-fluid" alt="" />
                    <div className="social">
                      <a href="businesscard.html">Business card and Service card design<i className="bi bi-dot"></i></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>{t('services.items.cards.title')}</h4>
                    <span>{t('services.items.cards.description')}</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <div className="member-img">
                    <img src="/assets/img/forflyer.png" className="img-fluid" alt="" />
                    <div className="social">
                      <a href="flyer.html">Flyer/banner/poster design<i className="bi bi-dot"></i></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>{t('services.items.flyers.title')}</h4>
                    <span>{t('services.items.flyers.description')}</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <div className="member-img">
                    <img src="/assets/img/song.png" className="img-fluid" alt="" />
                    <div className="social">
                      <a href="songcovers.html">Song/Movie cover design<i className="bi bi-dot"></i></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>{t('services.items.covers.title')}</h4>
                    <span>{t('services.items.covers.description')}</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <div className="member-img">
                    <img src="/assets/img/home.jpg" className="img-fluid" alt="" />
                    <div className="social">
                      <a href="ui.html">User interface design<i className="bi bi-dot"></i></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>{t('services.items.uiux.title')}</h4>
                    <span>{t('services.items.uiux.description')}</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <div className="member-img">
                    <img src="/assets/img/pack.png" className="img-fluid" alt="" />
                    <div className="social">
                      <a href="package.html">Package design<i className="bi bi-dot"></i></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>{t('services.items.package.title')}</h4>
                    <span>{t('services.items.package.description')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills" style={{alignContent: 'center'}}>
          <div className="container">
            <div className="section-title">
              <h2><strong>{t('skills.eyebrow')}</strong></h2>
              <p>{t('skills.description')}</p>
            </div>
            <div className="row skills-content">
              <div className="col-lg-6">
                <div className="progress" style={{width: '100%'}}>
                  <span className="skill">Adobe Photoshop <i className="val">95%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">Adobe Illustrator <i className="val">85%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">Adobe XD<i className="val">80%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="progress" style={{width: '100%'}}>
                  <span className="skill">Adobe After Effects <i className="val">70%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">Figma<i className="val">85%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">Social media platforms management <i className="val">70%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">Content creation <i className="val">85%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="recent-work" className="team section-bg">
          <div className="container">
            <div className="section-title">
              <h2><strong>{t('work.eyebrow')}</strong></h2>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12 mb-4">
                <div className="member text-center">
                  <div className="member-img">
                    <img src="/assets/img/Ibakwe-heroes-day-26.jpg" className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 mb-4">
                <div className="member text-center">
                  <div className="member-img">
                    <img src="/assets/img/Vex.jpg" className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 mb-4">
                <div className="member text-center">
                  <div className="member-img">
                    <img src="/assets/img/Alik's cologne4.jpg" className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 mb-4">
                <div className="member text-center">
                  <div className="member-img">
                    <img src="/assets/img/Falling.jpg" className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <a href="flyer.html" className="btn-get-started">{t('hero.primaryCta')}</a>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="testimonials">
          <div className="container">
            <div className="section-title">
              <h2>What Our <strong>{t('testimonials.eyebrow')}</strong> Say</h2>
              <p>{t('testimonials.description')}</p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="testimonial-item mt-4 mt-lg-0">
                  <h3>IZERE HIRWA Roger</h3>
                  <h4>{t('testimonials.items.rogerRole')}</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    "{t('testimonials.items.rogerQuote')}"
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="testimonial-item mt-4">
                  <h3>UWAYEZU Jean Felix</h3>
                  <h4>{t('testimonials.items.felixRole')}</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    "{t('testimonials.items.felixQuote')}"
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <div className="section-title">
              <h2><strong>{t('contact.eyebrow')}</strong></h2>
              <p>{t('contact.description')}</p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="info">
                  <div className="address">
                    <i className="bi bi-geo-alt"></i>
                    <h4>{t('contact.locationTitle')}:</h4>
                    <p>{t('contact.locationValue')}</p>
                  </div><br/>
                  <div className="email">
                    <a href="mailto:robertscresswell@gmail.com" style={{textDecoration: 'none', color: 'inherit'}}>
                      <i className="bi bi-envelope"></i>
                      <h4>{t('contact.directTitle')}:</h4>
                      <p>robertscresswell@gmail.com</p>
                    </a>
                  </div><br/>
                  <div className="phone">
                    <a href="tel:+250789492390" style={{textDecoration: 'none', color: 'inherit'}}>
                      <i className="bi bi-phone"></i>
                      <h4>{t('contact.directTitle')}:</h4>
                      <p>+250 789 492 390</p>
                    </a>
                    <br/>
                    <a href="tel:+250789438711" style={{textDecoration: 'none', color: 'inherit'}}>
                      <p>+250 789 438 711</p>
                    </a>
                  </div><br/>
                  <div className="phone">
                    <a href="https://wa.me/250789492390" target="_blank" style={{textDecoration: 'none', color: 'inherit'}}>
                      <i className="bi bi-whatsapp"></i>
                      <h4>{t('contact.directTitle')}:</h4>
                      <p>+250 789 492 390</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer">
        <div className="container d-md-flex py-4">
          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              &copy; Copyright <img src="/assets/img/logo-1.png" alt="EL-VERBUENA" style={{height: '30px'}} /> <strong><span>EL-VERBUENA</span></strong>. All Rights Reserved
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="https://x.com/el_verbuena" className="twitter"><i className="bx bxl-twitter"></i></a>
            <a href="https://www.facebook.com/roberto.cresswell.33" className="facebook"><i className="bx bxl-facebook"></i></a>
            <a href="https://www.instagram.com/el_verbuena_k2/" className="instagram"><i className="bx bxl-instagram"></i></a>
            <a href="https://www.linkedin.com/in/mugabo-robert-7647a428b/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
          </div>
        </div>
      </footer>

      <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>

      <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
      <Script src="/assets/vendor/glightbox/js/glightbox.min.js" strategy="afterInteractive" />
      <Script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js" strategy="afterInteractive" />
      <Script src="/assets/vendor/swiper/swiper-bundle.min.js" strategy="afterInteractive" />
      <Script src="/assets/vendor/waypoints/noframework.waypoints.js" strategy="afterInteractive" />
      <Script src="/assets/vendor/php-email-form/validate.js" strategy="afterInteractive" />
      <Script src="/assets/js/main.js" strategy="afterInteractive" />
    </>
  );
}
