import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

export default async function Footer({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'HomePage' });
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="ev-footer">
      <div className="ev-footer-inner">
        <div className="ev-footer-brand">
          <Image src="/assets/img/logo-1.png" alt="EL-VERBUENA" width={36} height={36} />
          <span>EL-VERBUENA</span>
          <p>{t('footer.tagline')}</p>
          <p>{t('footer.location')}</p>
        </div>
        <div className="ev-footer-contact">
          <h4>{t('footer.contact')}</h4>
          <a href="mailto:robertscresswell@gmail.com">
            <i className="bi bi-envelope" />
            <span>robertscresswell@gmail.com</span>
          </a>
          <a href="tel:+250789492390">
            <i className="bi bi-phone" />
            <span>+250 789 492 390</span>
          </a>
          <a href="tel:+250789438711">
            <i className="bi bi-phone" />
            <span>+250 789 438 711</span>
          </a>
          <a href="https://wa.me/250789492390" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-whatsapp" />
            <span>+250 789 492 390</span>
          </a>
        </div>
        <div className="ev-footer-social">
          <h4>{t('footer.follow')}</h4>
          <div className="ev-footer-social-links">
            <a href="https://x.com/el_verbuena" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="bx bxl-twitter" />
            </a>
            <a href="https://www.facebook.com/roberto.cresswell.33" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="bx bxl-facebook" />
            </a>
            <a href="https://www.instagram.com/el_verbuena_k2/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="bx bxl-instagram" />
            </a>
            <a href="https://www.linkedin.com/in/mugabo-robert-7647a428b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="bx bxl-linkedin" />
            </a>
          </div>
        </div>
        <div className="ev-footer-quick">
          <h4>{t('footer.quickLinks')}</h4>
          <div className="ev-footer-quick-links">
            <a href={`/${locale}/about`}>{t('nav.about')}</a>
            <a href={`/${locale}/services`}>{t('nav.services')}</a>
            <a href={`/${locale}/skills`}>{t('nav.skills')}</a>
            <a href={`/${locale}/testimonials`}>{t('nav.testimonials')}</a>
          </div>
        </div>
      </div>
      <div className="ev-footer-bottom">
        <p>© {year} {t('footer.rights')}</p>
      </div>
    </footer>
  );
}
