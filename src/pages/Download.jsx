import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAndroid,
  faTwitter,
  faGithub,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "../App.css";

const DownloadCard = ({ title, description, icon, link, buttonLabel }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Col xs={12} md={4} className="mb-4 d-flex justify-content-center">
      <div
        style={{ ...styles.card, ...(hovered ? styles.cardHover : {}) }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        tabIndex={0}
        role="group"
        aria-labelledby={`${title}-label`}
      >
        <div>{icon}</div>
        <h3 id={`${title}-label`} style={styles.cardTitle}>
          {title}
        </h3>
        <p style={styles.cardDesc}>{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
          aria-label={`Open ${title} link in a new tab`}
        >
          <Button className="btn-primary w-100 mt-2" style={styles.downloadButton}>
            {buttonLabel}
          </Button>
        </a>
      </div>
    </Col>
  );
};

const Download = () => {
  const { t, i18n } = useTranslation("dekusms");
  const navigate = useNavigate();

  return (
    <div style={styles.page} dir={i18n.dir()} lang={i18n.language}>
      <Button
        onClick={() => navigate("/")}
        style={styles.backButton}
        variant="outline-light"
        aria-label="Go back to home"
      >
        <FontAwesomeIcon icon={faHome} className="me-2" />
      </Button>

      <div style={styles.header}>
        <h1 style={styles.title}>{t("downloadpage.title")}</h1>
        <p style={styles.subtitle}>{t("downloadpage.subtitle")}</p>
      </div>

      <Container style={styles.container}>
        <Row className="justify-content-center">
          <DownloadCard
            title="Google Play"
            description={t("downloadpage.playstore_desc")}
            icon={
              <FontAwesomeIcon
                icon={faAndroid}
                size="3x"
                style={styles.icon}
                aria-hidden="true"
              />
            }
            link="https://play.google.com/store/apps/details?id=com.afkanerd.deku"
            buttonLabel="Get on Play Store"
          />
          <DownloadCard
            title="F-Droid"
            description={t("downloadpage.fdroid_desc")}
            icon={
              <img
                src="/fdroid.png"
                alt="F-Droid Logo"
                style={{ width: "3em", height: "3em", objectFit: "contain" }}
              />
            }
            link="https://f-droid.org/packages/com.afkanerd.deku/"
            buttonLabel="Get on F-Droid"
          />
          <DownloadCard
            title="GitHub"
            description={t("downloadpage.opensource")}
            icon={
              <FontAwesomeIcon
                icon={faGithub}
                size="3x"
                style={styles.icon}
                aria-hidden="true"
              />
            }
            link="https://github.com/dekusms/DekuSMS-Android"
            buttonLabel="View on GitHub"
          />
        </Row>
      </Container>

      <hr
        style={{
          border: "none",
          height: "1px",
          background: "#2ED3B7",
          width: "95%",
        }}
      />

      <Container>
        <Row>
        <div className="col-12 col-md-3 mb-4">
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
        <div className="col-12 col-md-3 mb-4">
  <h3 className="footer-title text-light">{t("footer.navigation.title")}</h3>
  <ul className="list-unstyled footer-links">
    <li>
      <a
        href="https://github.com/dekusms/DekuSMS-Android/blob/master/README.md#-end-to-end-encryption"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t("footer.navigation.about")}
      </a>
    </li>
    <li>
      <a
        href="https://play.google.com/store/apps/details?id=com.afkanerd.deku&pcampaignid=web_share"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t("footer.navigation.download")}
      </a>
    </li>
  </ul>
</div>

<div className="col-12 col-md-3 mb-4">
  <h3 className="footer-title text-light">{t("footer.resources.title")}</h3>
  <ul className="list-unstyled footer-links">
    <li>
      <a href="mailto:developers@smswithoutborders.com">
        {t("footer.navigation.contact")}
      </a>
    </li>
    <li>
      <a
        href="https://docs.smswithoutborders.com/docs/Troubleshooting/DekuSMS"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t("footer.donate.documentation")}
      </a>
    </li>
  </ul>
</div>

                  <div className="col-12 col-md-3 mb-4">
                    <h3 className="footer-title text-light">{t("footer.donate.title") || "Support Our Mission"}</h3>
                    <p className="text-light small">{t("footer.donate.message") || "Help us keep DekuSMS free, secure, and open source for everyone."}</p>
                    <a
                      href="https://www.buymeacoffee.com/dekusms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-light"
                      style={{ fontWeight: "600", padding: "6px 18px", borderRadius: "25px" }}
                    >
                      {t("footer.donate.donate") || "Donate"}
                    </a>
                  </div>
                </Row>
        
                <div className="footer-bottom text-center mt-4">
                  <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
                </div>
                
      </Container>
    </div>
  );
};

const styles = {
  backButton: {
    position: "absolute",
    top: "1rem",
    left: "1rem",
    zIndex: 5,
  },
  header: {
    textAlign: "center",
    marginTop: "4rem",
    marginBottom: "3rem",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#ccc",
  },
  icon: {
    color: "#00D1FF",
    marginBottom: "10px",
  },
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    color: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "100px",
    overflowX: "hidden",
  },
  container: {
    paddingBottom: "80px",
  },
  card: {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(12px)",
    borderRadius: "20px",
    padding: "30px",
    textAlign: "center",
    width: "100%",
    maxWidth: "320px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    userSelect: "none",
  },
  cardHover: {
    transform: "scale(1.05)",
    boxShadow: "0 10px 20px rgba(88, 223, 194, 0.4)",
  },
  cardTitle: {
    fontSize: "1.5rem",
    marginTop: "20px",
    marginBottom: "10px",
  },
  cardDesc: {
    fontSize: "1rem",
    color: "#C0C0C0",
    marginBottom: "20px",
  },
  downloadButton: {
    backgroundColor: "#2ED3B7",
    border: "none",
    padding: "10px 25px",
    fontWeight: "600",
    borderRadius: "10px",
    color: "#fff",
  }
};

export default Download;
