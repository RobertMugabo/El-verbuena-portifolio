'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavbarClient from './NavbarClient';

interface NavbarProps {
  locale: string;
  translations: {
    nav: {
      home: string;
      about: string;
      services: string;
      skills: string;
      testimonials: string;
      getInTouch: string;
    };
  };
}

export default function Navbar({ locale, translations }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { href: `/${locale}`, label: translations.nav.home },
    { href: `/${locale}/about`, label: translations.nav.about },
    { href: `/${locale}/services`, label: translations.nav.services },
    { href: `/${locale}/skills`, label: translations.nav.skills },
    { href: `/${locale}/testimonials`, label: translations.nav.testimonials },
  ];

  return (
    <header className="ev-header">
      <div className="ev-header-inner">
        <Link href={`/${locale}`} className="ev-logo">
          <Image src="/assets/img/logo.png" alt="EL-VERBUENA" width={44} height={44} priority />
          <span>EL-VERBUENA</span>
        </Link>

        <nav className={`ev-nav ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <a href={`/${locale}#footer`} className="ev-nav-cta">
            {translations.nav.getInTouch}
          </a>
        </nav>

        <NavbarClient locale={locale} onMenuToggle={setMenuOpen} />
      </div>
    </header>
  );
}
