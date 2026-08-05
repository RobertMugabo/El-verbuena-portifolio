import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://el-verbuena.vercel.app'),
  title: 'EL-VERBUENA | Graphic Design & UI Portfolio',
  description: 'EL-VERBUENA helps businesses, artists and founders communicate clearly through branding, digital design and high-impact visuals.',
  icons: { icon: '/assets/img/logo-1.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme')||'light';document.documentElement.setAttribute('data-theme',t);})();`,
          }}
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" />
        <link rel="stylesheet" href="/assets/vendor/boxicons/css/boxicons.min.css" />
      </head>
      <body className={montserrat.className}>
        {children}
        <Script src="/assets/vendor/animate.css/animate.min.css" strategy="lazyOnload" />
      </body>
    </html>
  );
}
