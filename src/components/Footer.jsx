import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faTelegram, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import "../App.css";

const Footer = () => {
  const { t } = useTranslation('dekusms');

  return (
    <footer className="footer bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4">
            <h2 className="footer-logo text-light">{t('footer.branding.logo')}</h2>
            <p className="footer-tagline">{t('footer.branding.tagline')}</p>
            <div className="footer-socials">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
              </a>
              <a href="https://github.com/dekusms/DekuSMS-Android" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                <FontAwesomeIcon icon={faGithub} className="social-icon" />
              </a>
              <a href=" https://t.me/deku_sms" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                <FontAwesomeIcon icon={faTelegram} className="social-icon" />
              </a>
            </div>
          </div>

          <div className="col-md-3 mb-4">
          <h3 className="footer-title text-light">{t('footer.navigation.title')}</h3>
          <ul className="list-unstyled">
            <li><a href="/about" className="text-white">{t('footer.navigation.about')}</a></li>
            <li><a href="/features" className="text-white">{t('footer.navigation.features')}</a></li>
            <li><a href="/download" className="text-white">{t('footer.navigation.download')}</a></li>
            <li><a href="/contact" className="text-white">{t('footer.navigation.contact')}</a></li>
          </ul>
        </div>

        <div className="col-md-3 mb-4">
          <h3 className="footer-title text-light">{t('footer.resources.title')}</h3>
          <ul className="list-unstyled">
            <li><a href="/privacy" className="text-white">{t('footer.resources.privacy')}</a></li>
            <li><a href="/terms" className="text-white">{t('footer.resources.terms')}</a></li>
            <li><a href="/support" className="text-white">{t('footer.resources.support')}</a></li>
            <li><a href="/faq" className="text-white">{t('footer.resources.faq')}</a></li>
          </ul>
        </div>


          <div className="col-md-3 mb-4">
          <h3 className="footer-title text-light">{t('footer.stayConnected.title')}</h3>
          <p className="text-light">{t('footer.stayConnected.subscribeText')}</p>
          <form className="footer-form">
            <div className="d-flex">
              <input 
                type="email" 
                placeholder={t('footer.stayConnected.emailPlaceholder')} 
                className="form-control me-2 flex-grow-1" 
              />
              <button type="submit" className="footer-btn">
                {t('footer.stayConnected.subscribeButton')}
              </button>
            </div>
          </form>
        </div>

        </div>

        <div className="footer-bottom text-center mt-4">
          <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
