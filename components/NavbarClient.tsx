'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from '@/i18n/navigation';
import Image from 'next/image';
import { IconMoon, IconSun } from './Icons';

interface NavbarClientProps {
  locale: string;
  onMenuToggle: (isOpen: boolean) => void;
  showHamburger?: boolean;
}

export default function NavbarClient({ locale, onMenuToggle, showHamburger = true }: NavbarClientProps) {
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

  const toggleMenu = () => {
    const newState = !menuOpen;
    setMenuOpen(newState);
    onMenuToggle(newState);
  };

  return (
    <>
      <button className="ev-theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
        {theme === 'light' ? <IconMoon size={18} /> : <IconSun size={18} />}
      </button>
      <button className="ev-lang-btn" onClick={switchLocale} aria-label="Switch language">
        <Image
          src={locale === 'en' ? 'https://flagcdn.com/w20/fr.png' : 'https://flagcdn.com/w20/gb.png'}
          alt={locale === 'en' ? 'Français' : 'English'}
          width={22}
          height={16}
          priority
        />
        <span>{locale === 'en' ? 'FR' : 'EN'}</span>
      </button>
      {showHamburger && (
        <button className="ev-hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      )}
      {menuOpen && <div className="ev-nav-overlay" onClick={toggleMenu} />}
    </>
  );
}
