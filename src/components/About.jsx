import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt, faCloud, faLock } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import "../App.css";

const About = () => {
  const { t } = useTranslation("dekusms");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const features = [
    {
      icon: faShieldAlt,
      title: t("about.features.endToEnd.title"),
      desc: t("about.features.endToEnd.desc"),
      more: t("about.features.endToEnd.more"),
    },
    {
      icon: faCloud,
      title: t("about.features.cloudForwarding.title"),
      desc: t("about.features.cloudForwarding.desc"),
      more: t("about.features.cloudForwarding.more"),
    },
    {
      icon: faLock,
      title: t("about.features.smsGateway.title"),
      desc: t("about.features.smsGateway.desc"),
      more: t("about.features.smsGateway.more"),
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="about-page">
      <div className="about-container">
        <div className="about-description">
          <h2 className="about-title">{t("about.title")}</h2>
          <p className="about-p">
            <strong>{t("about.appName")}</strong> {t("about.description1")}
          </p>
          <p className="about-p">{t("about.description2")}</p>
        </div>

        <div className="about-content">
          <div className="about-features">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <FontAwesomeIcon className="feature-icon" icon={feature.icon} />
                <div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-desc">{feature.desc}</p>
                  {expandedIndex === index && (
                    <p className="feature-more">{feature.more}</p>
                  )}
                  <button
                    className="read-more-btn"
                    onClick={() => toggleExpand(index)}
                  >
                    {expandedIndex === index ? "Show Less" : "Read More"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="about-image">
          <img src="landing 2.png" alt="DekuSMS Security" />
        </div>
      </div>
    </section>
  );
};

export default About;
