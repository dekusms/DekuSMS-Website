import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "../App.css";

const AboutDekuSMS = () => {
  const { t } = useTranslation("dekusms");

  return (
    <section className="about-dekusms-section">
      <Container>
        <div className="about-section-1">
          <h2 className="about-dekusms-title">{t("about.title")}</h2>
          <p className="about-dekusms-text">
            <strong>{t("about.appName")}</strong> {t("about.description1")}
          </p>
          <p className="about-dekusms-text">{t("about.description2")}</p>
        </div>

        <div className="about-dekusms-grid">
          <div className="about-dekusms-card about-cloud">
            <img src="/landing 2.png" alt="DekuSMS Preview" />
          </div>

          <div className="about-dekusms-card-1 about-logo">
          <div className="about-dekusms-badge">
                <i className="fas fa-cloud"></i>
                Cloud Forwarding
              </div>
            <div className="about-card-description">
              <h2>{t("about.features.cloudForwarding.title")}</h2>
              <p>{t("about.features.cloudForwarding.desc")}</p>
            </div>
          </div>

          <div className="about-dekusms-card about-device">
          <div className="about-dekusms-badge">
                <i className="fas fa-lock"></i>
                End-to-End Encryption
              </div>
            <div className="about-card-description">
              <h2>{t("about.features.endToEnd.title")}</h2>
              <p>{t("about.features.endToEnd.desc")}</p>
            </div>
          </div>

          <div className="about-dekusms-card about-inbox">
          <div className="about-dekusms-badge">
<i className="fas fa-sms"></i>
SMS Gateway
</div>
            <div className="about-card-description">
              <h2>{t("about.features.smsGateway.title")}</h2>
              <p>{t("about.features.smsGateway.desc")}</p>
            </div>
          </div>
        </div>

        <div className="about-credit text-center">
          <a
            href="https://blog.smswithoutborders.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
        </div>
      </Container>
    </section>
  );
};

export default AboutDekuSMS;

