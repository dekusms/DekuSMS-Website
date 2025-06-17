import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import "../App.css";

const Footer = () => {
  const { t } = useTranslation("dekusms");

  return (
    <footer className="footer text-white py-5" style={{ backgroundColor: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
      boxShadow: "5px 5px 15px rgba(37, 63, 78, 0.97)",}}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
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

          <div className="col-md-4 mb-4">
            <h3 className="footer-title text-light">{t("footer.navigation.title")}</h3>
            <ul className="list-unstyled">
              <li><a href="https://github.com/dekusms/DekuSMS-Android/blob/master/README.md#-end-to-end-encryption">{t("footer.navigation.about")}</a></li>
              <li><a href="https://play.google.com/store/apps/details?id=com.afkanerd.deku&pcampaignid=web_share">{t("footer.navigation.download")}</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h3 className="footer-title text-light">{t("footer.resources.title")}</h3>
            <ul className="list-unstyled">
              <li><a href="mailto:developers@smswithoutborders.com">{t("footer.navigation.contact")}</a></li>
              <li><a href="https://opencollective.com/dekusms">{t("footer.resources.support")}</a></li>
            </ul>
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
