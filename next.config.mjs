import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    remotePatterns: [
      { protocol: "https", hostname: "flagcdn.com" }
    ]
  },
  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/en",
        permanent: true
      },
      {
        source: "/logo.html",
        destination: "/en/work/logo",
        permanent: true
      },
      {
        source: "/businesscard.html",
        destination: "/en/work/cards",
        permanent: true
      },
      {
        source: "/flyer.html",
        destination: "/en/work/flyers",
        permanent: true
      },
      {
        source: "/songcovers.html",
        destination: "/en/work/covers",
        permanent: true
      },
      {
        source: "/ui.html",
        destination: "/en/work/uiux",
        permanent: true
      },
      {
        source: "/package.html",
        destination: "/en/work/package",
        permanent: true
      }
    ];
  }
};

export default withNextIntl(nextConfig);
