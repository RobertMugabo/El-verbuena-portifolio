import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'EL-VERBUENA | Graphic Design & UI Portfolio',
  description: 'EL-VERBUENA helps businesses, artists and founders communicate clearly through branding, digital design and high-impact visuals.',
  icons: { icon: '/assets/img/logo-1.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="stylesheet"
          href="/assets/vendor/bootstrap-icons/bootstrap-icons.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/boxicons/css/boxicons.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/animate.css/animate.min.css"
        />
      </head>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
