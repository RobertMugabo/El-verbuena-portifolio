'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from '@/i18n/navigation';
import Image from 'next/image';
import { IconMoon, IconSun } from './Icons';

interface NavbarClientProps {
  locale: string;
  onMenuToggle: (isOpen: boolean) => void;
}

export default function NavbarClient({ locale, onMenuToggle }: NavbarClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const switchLocale = () => {
    const next = locale === 'en' ? 'fr' : 'en';
    router.replace(pathname, { locale: next });
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
    </>
  );
}
