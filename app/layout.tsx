import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
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
    <html lang="en" className={montserrat.variable} suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme')||'light';document.documentElement.setAttribute('data-theme',t);})();`,
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
              :root{--brand:#ef3d01;--brand-dark:#c93200;--text:#1a1a1a;--text-muted:#666;--bg:#ffffff;--bg-alt:#f7f5f4;--border:#e8e4e2;--radius:12px;--shadow:0 4px 24px rgba(0,0,0,0.08);--shadow-hover:0 12px 40px rgba(0,0,0,0.14);--transition:0.3s ease;--font:'Montserrat',sans-serif}
              [data-theme="dark"]{--brand:#ef3d01;--brand-dark:#ff6b35;--text:#ffffff;--text-muted:#aaa;--bg:#111111;--bg-alt:#1a1a1a;--border:#333333;--shadow:0 4px 24px rgba(0,0,0,0.4);--shadow-hover:0 12px 40px rgba(0,0,0,0.6)}
              body{font-family:var(--font);color:var(--text);background:var(--bg);line-height:1.7;-webkit-font-smoothing:antialiased;transition:background-color 0.3s ease,color 0.3s ease}
              a{color:inherit;text-decoration:none!important}
              img{max-width:100%;display:block}
              .ev-header{position:fixed;top:0;left:0;right:0;background:var(--bg);border-bottom:1px solid var(--border);z-index:1000;transition:var(--transition)}
              .ev-header-inner{max-width:1200px;margin:0 auto;padding:16px 24px;display:flex;align-items:center;justify-content:space-between}
              .ev-logo{display:flex;align-items:center;gap:10px;font-size:18px;font-weight:800;color:var(--text);letter-spacing:1px;text-decoration:none}
              .ev-nav{display:flex;align-items:center;gap:8px}
              .ev-nav a{font-size:13px;font-weight:600;letter-spacing:0.5px;text-transform:capitalize;color:var(--text);padding:8px 12px;border-radius:6px;transition:var(--transition)}
              .ev-nav a:hover{color:var(--brand);background:rgba(239,61,1,0.06)}
              .ev-nav-cta{background:var(--brand)!important;color:#fff!important;padding:10px 20px!important;font-weight:700!important;border-radius:50px!important}
              .ev-nav-cta:hover{background:var(--brand-dark)!important;transform:translateY(-2px);box-shadow:0 4px 12px rgba(239,61,1,0.3)}
              .ev-theme-btn{display:flex;align-items:center;justify-content:center;gap:6px;background:none;border:none;color:var(--text);font-family:var(--font);font-size:12px;font-weight:700;letter-spacing:1px;padding:6px 14px;border-radius:50px;cursor:pointer;transition:var(--transition);margin-left:8px}
              .ev-theme-btn:hover{background:var(--bg-alt);color:var(--brand)}
              .ev-theme-btn i{font-size:18px}
              .ev-lang-btn{display:flex;align-items:center;gap:6px;background:none;border:none;color:var(--brand);font-family:var(--font);font-size:12px;font-weight:700;letter-spacing:1px;padding:6px 14px;border-radius:50px;cursor:pointer;transition:var(--transition);margin-left:8px}
              .ev-lang-btn:hover{color:var(--brand);opacity:0.8}
              .ev-hamburger{display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:4px}
              .ev-hamburger span{display:block;width:24px;height:2px;background:var(--text);border-radius:2px;transition:var(--transition)}
              .ev-hero{position:relative;min-height:100vh;overflow:hidden;display:flex;align-items:center;padding:120px 24px 80px}
              .ev-hero-overlay{position:absolute;inset:0;background:linear-gradient(135deg,rgba(10,10,10,0.75) 0%,rgba(30,10,5,0.55) 100%)}
              .ev-hero-content{position:relative;z-index:1;max-width:700px;margin:0 auto;text-align:center;color:#fff}
              .ev-hero-eyebrow{font-size:13px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:var(--brand);margin-bottom:16px}
              .ev-hero-content h1{font-size:clamp(32px,6vw,64px);font-weight:900;line-height:1.1;letter-spacing:-1px;margin-bottom:24px}
              .ev-hero-desc{font-size:17px;line-height:1.8;color:rgba(255,255,255,0.85);margin-bottom:40px;max-width:560px;margin-left:auto;margin-right:auto}
              .ev-hero-actions{display:flex;gap:16px;justify-content:center;flex-wrap:wrap}
              .ev-btn-primary{display:inline-block;background:var(--brand);color:#fff;font-family:var(--font);font-size:14px;font-weight:700;letter-spacing:0.5px;padding:14px 32px;border-radius:50px;border:2px solid var(--brand);transition:var(--transition);cursor:pointer}
              .ev-btn-primary:hover{background:var(--brand-dark);border-color:var(--brand-dark);transform:translateY(-2px);box-shadow:0 8px 24px rgba(239,61,1,0.3)}
              .ev-btn-outline{display:inline-block;background:transparent;color:#fff;font-family:var(--font);font-size:14px;font-weight:700;letter-spacing:0.5px;padding:14px 32px;border-radius:50px;border:2px solid rgba(255,255,255,0.7);transition:var(--transition)}
              .ev-btn-outline:hover{background:rgba(255,255,255,0.15);border-color:#fff}
              .ev-container{width:100%;max-width:1200px;margin:0 auto;padding:0 24px}
              @media (max-width:900px){.ev-hamburger{display:flex}.ev-nav{display:none;position:fixed;top:70px;left:0;right:0;background:#fff;flex-direction:column;align-items:stretch;padding:16px 24px 24px;border-bottom:1px solid var(--border);box-shadow:var(--shadow);gap:4px}.ev-nav.open{display:flex}.ev-nav a{padding:12px 16px;font-size:15px}}
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://flagcdn.com" />
      </head>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
