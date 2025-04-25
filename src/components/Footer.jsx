import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import "../App.css";

const Footer = () => {
  const { t } = useTranslation("dekusms");

  return (
    <footer className="footer text-white py-5" style={{ background: "#001871" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4">
            <h2 className="footer-logo text-light">{t("footer.branding.logo")}</h2>
            <p className="footer-tagline">{t("footer.branding.tagline")}</p>
            <div className="footer-socials d-flex gap-3 mt-3">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light">
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
              </a>
              <a href="https://github.com/dekusms/DekuSMS-Android" target="_blank" rel="noopener noreferrer" className="text-light">
                <FontAwesomeIcon icon={faGithub} className="social-icon" />
              </a>
              <a href="https://t.me/deku_sms" target="_blank" rel="noopener noreferrer" className="text-light">
                <FontAwesomeIcon icon={faTelegram} className="social-icon" />
              </a>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <h3 className="footer-title text-light">{t("footer.navigation.title")}</h3>
            <ul className="list-unstyled">
              <li><a href="/about">{t("footer.navigation.about")}</a></li>
              <li><a href="/features">{t("footer.navigation.features")}</a></li>
              <li><a href="https://play.google.com/store/apps/details?id=com.afkanerd.deku&pcampaignid=web_share">{t("footer.navigation.download")}</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h3 className="footer-title text-light">{t("footer.resources.title")}</h3>
            <ul className="list-unstyled">
              <li><a href="https://smswithoutborders.com/privacy-policy">{t("footer.resources.privacy")}</a></li>
              <li><a href="mailto:developers@smswithoutborders.com">{t("footer.navigation.contact")}</a></li>
              <li><a href="https://docs.smswithoutborders.com">{t("footer.resources.support")}</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h3 className="footer-title text-light">{t("footer.stayConnected.title")}</h3>
            <p className="text-light">{t("footer.stayConnected.subscribeText")}</p>
            <form className="footer-form mt-2">
              <div className="d-flex flex-column flex-sm-row">
                <input 
                  type="email" 
                  placeholder={t("footer.stayConnected.emailPlaceholder")} 
                  className="form-control me-sm-2 mb-2 mb-sm-0"
                />
                <button type="submit" className="footer-btn">
                  {t("footer.stayConnected.subscribeButton")}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="footer-bottom text-center mt-4">
          <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
