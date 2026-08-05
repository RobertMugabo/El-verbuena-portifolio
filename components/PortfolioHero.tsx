import Image from 'next/image';

type Props = {
  img: string;
  label: string;
  title: string;
  desc: string;
  isVideo?: boolean;
};

export default function PortfolioHero({ img, label, title, desc, isVideo }: Props) {
  return (
    <div className="ev-portfolio-hero">
      {isVideo ? (
        <video
          src={img}
          autoPlay
          loop
          muted
          playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <Image src={img} alt="" fill priority sizes="100vw" style={{ objectFit: 'cover' }} />
      )}
      <div className="ev-portfolio-hero-overlay" />
      <div className="ev-portfolio-hero-content">
        <span className="ev-label">{label}</span>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
}
