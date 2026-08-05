'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter, usePathname } from '@/i18n/navigation';
import Image from 'next/image';

interface NavbarClientProps {
  locale: string;
}

export default function NavbarClient({ locale }: NavbarClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  }, [theme]);

  const switchLocale = useCallback(() => {
    const next = locale === 'en' ? 'fr' : 'en';
    router.replace(pathname, { locale: next });
  }, [locale, pathname, router]);

  return (
    <>
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
          loading="lazy"
        />
        <span>{locale === 'en' ? 'FR' : 'EN'}</span>
      </button>
      <button className="ev-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span /><span /><span />
      </button>
      {menuOpen && <div className="ev-nav-overlay" onClick={() => setMenuOpen(false)} />}
    </>
  );
}
