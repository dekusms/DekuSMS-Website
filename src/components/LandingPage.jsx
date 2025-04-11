import React from 'react';
import { useTranslation } from "react-i18next";
import "../App.css";

const LandingPage = () => {
    const { t } = useTranslation('dekusms');
  
  return (
      <section className="landing">
        <div className="landing-content">
          <h1>{t('landing.title')} </h1> <br />
          <h1>{t('landing.title2')}</h1>
          <p>{t('landing.description')}</p>
          <div className="landing-buttons">
          <button className="landing-btn-primary">{t('landing.getStarted')}</button>
          <button className="landing-btn-secondary">{t('landing.learnMore')}</button>
          </div>
        </div>
        <div className="landing-image">
          <img src="/landing 2.png" alt="DekuSMS Preview" />
        </div>
      </section>
  );
};

export default LandingPage;
