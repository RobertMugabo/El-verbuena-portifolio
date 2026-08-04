import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EL-VERBUENA",
  description: "Graphic Designer Portfolio - Your trusted partner for quality branding through various forms of advertisement",
  icons: {
    icon: "/assets/img/logo-1.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Muli:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />
        <link href="/assets/vendor/animate.css/animate.min.css" rel="stylesheet" />
        <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="/assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
        <link href="/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
        <link href="/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
        <link href="/assets/css/style.css" rel="stylesheet" />
        <style>{`
          #header .navbar ul li {
            margin-left: 20px;
          }
          #header .navbar ul li a {
            font-size: 14px;
            font-weight: 500;
            transition: all 0.3s ease;
          }
          #header .navbar ul li a:hover {
            color: #ef3d01;
          }
          .section-title {
            margin-bottom: 40px;
            text-align: center;
          }
          .section-title h2 {
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 15px;
          }
          .section-title p {
            font-size: 16px;
            color: #666;
            max-width: 700px;
            margin: 0 auto;
          }
          .member {
            margin-bottom: 30px;
            transition: transform 0.3s ease;
          }
          .member:hover {
            transform: translateY(-5px);
          }
          .member-info h4 {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 10px;
          }
          .member-info span {
            font-size: 14px;
            color: #666;
            line-height: 1.6;
          }
          .testimonial-item {
            padding: 30px;
            background: #f9f9f9;
            border-radius: 8px;
            margin-bottom: 20px;
          }
          .testimonial-item h3 {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 5px;
          }
          .testimonial-item h4 {
            font-size: 14px;
            color: #ef3d01;
            margin-bottom: 15px;
          }
          .testimonial-item p {
            font-size: 15px;
            line-height: 1.8;
            color: #555;
          }
          .info .address,
          .info .email,
          .info .phone {
            padding: 20px;
            background: #f9f9f9;
            border-radius: 8px;
            margin-bottom: 15px;
            transition: all 0.3s ease;
          }
          .info .address:hover,
          .info .email:hover,
          .info .phone:hover {
            background: #f0f0f0;
          }
          .info h4 {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 10px;
          }
          .info p {
            font-size: 15px;
            color: #666;
            margin: 0;
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
