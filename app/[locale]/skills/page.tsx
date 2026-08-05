'use client';

import { useTranslations } from 'next-intl';

const skills = [
  { name: 'Adobe Photoshop', val: 95 },
  { name: 'Adobe Illustrator', val: 85 },
  { name: 'Adobe XD', val: 80 },
  { name: 'Figma', val: 85 },
  { name: 'Adobe After Effects', val: 70 },
  { name: 'Content Creation', val: 85 },
  { name: 'Social Media Management', val: 70 },
];

export default function SkillsPage() {
  const t = useTranslations('HomePage');

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
