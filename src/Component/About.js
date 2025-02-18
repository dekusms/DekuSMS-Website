import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";

const AboutSection = () => {
  const { t } = useTranslation();

  const features = [
    { title: t("feature1Title"), desc: t("feature1Desc") },
    { title: t("feature2Title"), desc: t("feature2Desc") },
    { title: t("feature3Title"), desc: t("feature3Desc") },
    { title: t("feature4Title"), desc: t("feature4Desc") },
  ];

  return (
    <section className="about-section" id="about">
      <Container>
        <div className="about-text">
          <h2 className="section-title">{t("aboutTitle")}</h2>
          <p className="about-text">
            <strong>DekuSMS</strong> {t("aboutDescription1")}
          </p>
          <p className="about-text">
            {t("aboutDescription2")}
          </p>
        </div>

        <h3 className="section-subtitle">{t("keyFeatures")}</h3>
        <div className="features-grid">
          <div className="features-column">
            {features.map((feature, index) => (
              <div className="features-card" key={index}>
                <FontAwesomeIcon className="icon" icon={faAnglesRight} />
                <div>
                  <h3 className="title">{feature.title}</h3>
                  <p className="text">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="features-column image-container col-md-6 d-flex justify-content-center align-items-center">
            <img src="ss.png" alt={t("featuresImageAlt")} className="banner-animation" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
