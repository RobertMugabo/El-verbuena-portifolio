import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { IconEnvelope, IconPhone, IconWhatsapp, IconTwitterX, IconFacebook, IconInstagram, IconLinkedin } from './Icons';

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
            <IconEnvelope size={16} />
            <span>robertscresswell@gmail.com</span>
          </a>
          <a href="tel:+250789492390">
            <IconPhone size={16} />
            <span>+250 789 492 390</span>
          </a>
          <a href="tel:+250789438711">
            <IconPhone size={16} />
            <span>+250 789 438 711</span>
          </a>
          <a href="https://wa.me/250789492390" target="_blank" rel="noopener noreferrer">
            <IconWhatsapp size={16} />
            <span>+250 789 492 390</span>
          </a>
        </div>
        <div className="ev-footer-social">
          <h4>{t('footer.follow')}</h4>
          <div className="ev-footer-social-links">
            <a href="https://x.com/el_verbuena" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <IconTwitterX size={16} />
            </a>
            <a href="https://www.facebook.com/roberto.cresswell.33" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <IconFacebook size={16} />
            </a>
            <a href="https://www.instagram.com/el_verbuena_k2/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <IconInstagram size={16} />
            </a>
            <a href="https://www.linkedin.com/in/robert-mugabo-102102428/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <IconLinkedin size={16} />
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
