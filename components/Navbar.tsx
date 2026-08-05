'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
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
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

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
          <a href={`/#footer`} className="ev-nav-cta">
            {locale === 'en' ? 'Get in touch' : 'Contactez-moi'}
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
