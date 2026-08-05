'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const t = useTranslations('HomePage');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const switchLocale = () => {
    const next = locale === 'en' ? 'fr' : 'en';
    router.replace(pathname, { locale: next });
  };

  const navLinks = [
    { href: `/${locale}`, label: t('nav.home'), prefetch: true },
    { href: `/${locale}/about`, label: t('nav.about'), prefetch: true },
    { href: `/${locale}/services`, label: t('nav.services'), prefetch: true },
    { href: `/${locale}/skills`, label: t('nav.skills'), prefetch: true },
    { href: `/${locale}/testimonials`, label: t('nav.testimonials'), prefetch: true },
  ];

  return (
    <header className="ev-header">
      <div className="ev-header-inner">
        <Link href={`/${locale}`} className="ev-logo" prefetch>
          <Image src="/assets/img/logo.png" alt="EL-VERBUENA" width={44} height={44} priority />
          <span>EL-VERBUENA</span>
        </Link>

        <nav className={`ev-nav${menuOpen ? ' open' : ''}`}>
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} prefetch={link.prefetch} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <a href={`/${locale}#footer`} className="ev-nav-cta">
            {t('nav.getInTouch')}
          </a>
          <button className="ev-theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? (
              <i className="bx bx-moon" />
            ) : (
              <i className="bx bx-sun" />
            )}
          </button>
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
