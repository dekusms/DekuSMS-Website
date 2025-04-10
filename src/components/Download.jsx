import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faGithub, faAndroid } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import "../App.css";

const Download = () => {
  const { t } = useTranslation('dekusms');  // Specify 'dekusms' as the namespace

  return (
    <section id="download" className="download-section">
      <div className="download-container">
        {/* Left Side - Title & Description */}
        <div className="download-text">
          <h2 className="download-title">{t('download.title')}</h2>
          <p className="download-subtitle">
            {t('download.subtitle')}
          </p>
        </div>

        {/* Right Side - Download Options */}
        <div className="download-grid">
          <a href="https://play.google.com/store/apps/details?id=com.dekusms" target="_blank" rel="noopener noreferrer" className="download-card google-play">
            <FontAwesomeIcon icon={faGooglePlay} className="download-icon" />
            <div>
              <h3>{t('download.googlePlay.title')}</h3>
              <p>{t('download.googlePlay.desc')}</p>
            </div>
          </a>

          <a href="https://f-droid.org/packages/com.dekusms" target="_blank" rel="noopener noreferrer" className="download-card fdroid">
            <FontAwesomeIcon icon={faAndroid} className="download-icon" />
            <div>
              <h3>{t('download.fdroid.title')}</h3>
              <p>{t('download.fdroid.desc')}</p>
            </div>
          </a>

          <a href="https://github.com/dekusms" target="_blank" rel="noopener noreferrer" className="download-card github">
            <FontAwesomeIcon icon={faGithub} className="download-icon" />
            <div>
              <h3>{t('download.github.title')}</h3>
              <p>{t('download.github.desc')}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Download;
