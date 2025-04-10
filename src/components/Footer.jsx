import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faTelegram, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import "../App.css";

const Footer = () => {
  const { t } = useTranslation('dekusms'); // Specify 'dekusms' as the namespace

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Column 1: Branding */}
        <div className="footer-column">
          <h2 className="footer-logo">{t('footer.branding.logo')}</h2>
          <p className="footer-tagline">{t('footer.branding.tagline')}</p>
          <div className="footer-socials">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="social-icon" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="social-icon" />
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTelegram} className="social-icon" />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faDiscord} className="social-icon" />
            </a>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className="footer-column">
          <h3 className="footer-title">{t('footer.navigation.title')}</h3>
          <ul>
            <li><a href="/about">{t('footer.navigation.about')}</a></li>
            <li><a href="/features">{t('footer.navigation.features')}</a></li>
            <li><a href="/download">{t('footer.navigation.download')}</a></li>
            <li><a href="/contact">{t('footer.navigation.contact')}</a></li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div className="footer-column">
          <h3 className="footer-title">{t('footer.resources.title')}</h3>
          <ul>
            <li><a href="/privacy">{t('footer.resources.privacy')}</a></li>
            <li><a href="/terms">{t('footer.resources.terms')}</a></li>
            <li><a href="/support">{t('footer.resources.support')}</a></li>
            <li><a href="/faq">{t('footer.resources.faq')}</a></li>
          </ul>
        </div>

        {/* Column 4: Stay Connected */}
        <div className="footer-column">
          <h3 className="footer-title">{t('footer.stayConnected.title')}</h3>
          <p>{t('footer.stayConnected.subscribeText')}</p>
          <form className="footer-form">
            <input type="email" placeholder={t('footer.stayConnected.emailPlaceholder')} className="footer-input" />
            <button type="submit" className="footer-btn">{t('footer.stayConnected.subscribeButton')}</button>
          </form>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
      </div>
    </footer>
  );
};

export default Footer;
