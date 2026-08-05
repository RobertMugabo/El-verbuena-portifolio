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
  const navLinks = [
    { href: `/${locale}`, label: translations.nav.home, prefetch: true },
    { href: `/${locale}/about`, label: translations.nav.about, prefetch: true },
    { href: `/${locale}/services`, label: translations.nav.services, prefetch: true },
    { href: `/${locale}/skills`, label: translations.nav.skills, prefetch: true },
    { href: `/${locale}/testimonials`, label: translations.nav.testimonials, prefetch: true },
  ];

  return (
    <header className="ev-header">
      <div className="ev-header-inner">
        <Link href={`/${locale}`} className="ev-logo" prefetch>
          <Image src="/assets/img/logo.png" alt="EL-VERBUENA" width={44} height={44} priority />
          <span>EL-VERBUENA</span>
        </Link>

        <nav className="ev-nav">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} prefetch={link.prefetch}>
              {link.label}
            </Link>
          ))}
          <a href={`/${locale}#footer`} className="ev-nav-cta">
            {translations.nav.getInTouch}
          </a>
          <NavbarClient locale={locale} />
        </nav>
      </div>
    </header>
  );
}
