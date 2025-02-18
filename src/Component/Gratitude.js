import React from 'react';
import { useTranslation } from 'react-i18next';
import '../App.css';

const GratitudeSection = () => {
  const { t } = useTranslation();

  return (
    <section className="deku-gratitude-section">
      <div className="deku-gratitude-text">
        <p className="deku-gratitude-title">{t('gratitudeTitle')}</p>
        <p>{t('gratitudeText')}</p>
      </div>
    </section>
  );
};

export default GratitudeSection;
