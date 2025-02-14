import React from 'react';
import '../App.css'; 
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation(); 

  return (
    <div className="hero-container">
      <main className="container-fluid d-flex align-items-center justify-content-center px-0">
        <div className="row text-center text-md-start">
          {/* Left Content */}
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h2>{t('heroTitle')}</h2> 
            <h3>
              {t('heroSubTitle1')} <span>{t('heroSubTitle2')}</span>
            </h3>
            <p>{t('heroDescription')}</p>

            {/* Buttons */}
            <div className="dekusms-buttons">
              <Button className="dekusms-button primary">
                {t('playstore')} {/* Translated button text */}
              </Button>
              <Button className="dekusms-button btn-dekusmsd" href="#">
                {t('fdroid')} {/* Translated button text */}
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="__BG">
              <img src="ss.png" alt="DekuSMS" className="img-fluid" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
