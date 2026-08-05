'use client';

import Image from 'next/image';
import { useLocale } from 'next-intl';

export default function Footer() {
  const locale = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="ev-footer">
      <div className="ev-footer-inner">
        <div className="ev-footer-brand">
          <Image src="/assets/img/logo-1.png" alt="EL-VERBUENA" width={36} height={36} />
          <span>EL-VERBUENA</span>
          <p>© {year} All Rights Reserved</p>
        </div>
        <div className="ev-footer-social">
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
    </footer>
  );
}
