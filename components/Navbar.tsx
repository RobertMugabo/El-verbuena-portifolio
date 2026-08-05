'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const t = useTranslations('HomePage');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const switchLocale = () => {
    const next = locale === 'en' ? 'fr' : 'en';
    const segments = pathname.split('/');
    segments[1] = next;
    router.push(segments.join('/'));
  };

  const navLinks = [
    { href: `/${locale}#about`, label: t('nav.about') },
    { href: `/${locale}#services`, label: t('nav.services') },
    { href: `/${locale}#skills`, label: t('nav.skills') },
    { href: `/${locale}#testimonials`, label: t('nav.testimonials') },
    { href: `/${locale}#contact`, label: t('nav.contact') },
  ];

  return (
    <header className="ev-header">
      <div className="ev-header-inner">
        <Link href={`/${locale}`} className="ev-logo">
          <Image src="/assets/img/logo.png" alt="EL-VERBUENA" width={44} height={44} />
          <span>EL-VERBUENA</span>
        </Link>

        <nav className={`ev-nav${menuOpen ? ' open' : ''}`}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <button className="ev-lang-btn" onClick={switchLocale} aria-label="Switch language">
            <Image
              src={locale === 'en' ? 'https://flagcdn.com/w20/fr.png' : 'https://flagcdn.com/w20/gb.png'}
              alt={locale === 'en' ? 'Français' : 'English'}
              width={22}
              height={16}
              unoptimized
            />
            <span>{locale === 'en' ? 'FR' : 'EN'}</span>
          </button>
        </nav>

        <button className="ev-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
