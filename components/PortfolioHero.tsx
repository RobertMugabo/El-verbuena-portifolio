import Image from 'next/image';

type Props = {
  img: string;
  label: string;
  title: string;
  desc: string;
};

export default function PortfolioHero({ img, label, title, desc }: Props) {
  return (
    <div className="ev-portfolio-hero">
      <Image src={img} alt="" fill priority sizes="100vw" style={{ objectFit: 'cover' }} />
      <div className="ev-portfolio-hero-overlay" />
      <div className="ev-portfolio-hero-content">
        <span className="ev-label">{label}</span>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
}
