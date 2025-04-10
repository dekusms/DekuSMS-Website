import React from 'react';
import { useTranslation } from 'react-i18next';
import "../App.css";

const Gratitude = () => {
  const { t } = useTranslation('dekusms');

  return (
      <section className="gratitude">
        <div className="gratitude-card">
          <h1 className="gratitude-title">{t('gratitude.title')}</h1>
          <p className="gratitude-description">
            {t('gratitude.description')}
          </p>      
        </div>
     </section>
  );
};

export default Gratitude;
