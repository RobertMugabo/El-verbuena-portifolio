import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'HomePage' });
  
  return {
    title: locale === 'fr'
      ? 'Compétences | EL-VERBUENA - Designer Graphique & UI'
      : 'Skills | EL-VERBUENA - Graphic Designer & UI Designer',
    description: locale === 'fr'
      ? 'Découvrez les compétences et outils d\'EL-VERBUENA: Adobe Photoshop, Illustrator, XD, Figma, After Effects, création de contenu et gestion des réseaux sociaux.'
      : 'Discover EL-VERBUENA skills and tools: Adobe Photoshop, Illustrator, XD, Figma, After Effects, content creation, and social media management.',
  };
}

const skills = [
  { name: 'Adobe Photoshop', val: 95 },
  { name: 'Adobe Illustrator', val: 85 },
  { name: 'Adobe XD', val: 80 },
  { name: 'Figma', val: 85 },
  { name: 'Adobe After Effects', val: 70 },
  { name: 'Content Creation', val: 85 },
  { name: 'Social Media Management', val: 70 },
];

export default async function SkillsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'HomePage' });

  return (
    <section className="ev-section">
      <div className="ev-container">
        <div className="ev-section-header">
          <span className="ev-label">{t('skills.eyebrow')}</span>
          <h2>{t('skills.title')}</h2>
          <p>{t('skills.description')}</p>
        </div>
        <div className="ev-skills-grid">
          {skills.map(({ name, val }) => (
            <div key={name} className="ev-skill-item">
              <div className="ev-skill-meta">
                <span>{name}</span>
                <span>{val}%</span>
              </div>
              <div className="ev-skill-track">
                <div className="ev-skill-bar" style={{ width: `${val}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
