import React from "react";
import { Container, Row, Col, Button,  NavDropdown  } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid, faTwitter, faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import "../App.css";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";



const Download = () => {
  const { t } = useTranslation("dekusms");

  return (
    <div style={styles.page}>
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
              <FontAwesomeIcon icon={faAndroid} size="3x" style={styles.icon} />
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
              <FontAwesomeIcon icon={faGithub} size="3x" style={styles.icon} />
            }
            link="https://github.com/dekusms/DekuSMS-Android"
            buttonLabel="View on GitHub"
          />
        </Row>
      </Container>

      <hr style={{
  border: "none",
  height: "1px",
  background: "#00D1FF",
  width: "95%",
}} />

      <footer style={styles.footer}>
      <Container>
          <div className="row">
            <div className="col-md-3 mb-4">
              <h2 className="footer-logo text-light">{t("footer.branding.logo")}</h2>
              <p className="footer-tagline">{t("footer.branding.tagline")}</p>
              <div className="footer-socials d-flex gap-3 mt-3">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light" aria-label="Twitter">
                  <FontAwesomeIcon icon={faTwitter} className="social-icon" />
                </a>
                <a href="https://github.com/dekusms/DekuSMS-Android" target="_blank" rel="noopener noreferrer" className="text-light" aria-label="GitHub">
                  <FontAwesomeIcon icon={faGithub} className="social-icon" />
                </a>
                <a href="https://t.me/deku_sms" target="_blank" rel="noopener noreferrer" className="text-light" aria-label="Telegram">
                  <FontAwesomeIcon icon={faTelegram} className="social-icon" />
                </a>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <h3 className="footer-title text-light">{t("footer.navigation.title")}</h3>
              <ul className="list-unstyled">
                <li><a href="/">{ t("navbar.home")}</a></li>
                <li><a href="https://docs.smswithoutborders.com">{t("navbar.documentation")}</a></li>
              </ul>
            </div>

            <div className="col-md-3 mb-4">
              <h3 className="footer-title text-light">{t("footer.resources.title")}</h3>
              <ul className="list-unstyled">
                <li><a href="mailto:developers@smswithoutborders.com">{t("footer.navigation.contact")}</a></li>
                <li><a href="https://docs.smswithoutborders.com">{t("footer.resources.support")}</a></li>
              </ul>
            </div>

            <div className="col-md-3 mb-4">
            <h3 className="footer-title text-light">{t("footer.stayConnected.Privacy")}</h3>
            <ul className="list-unstyled">
              <li><a href="https://smswithoutborders.com/privacy-policy">{t("footer.resources.privacy")}</a></li>
              </ul>
           <NavDropdown
                        align="end"
                        title={
                          <>
                          <FontAwesomeIcon icon={faGlobe} style={{ color: 'white' }} className="me-2" />
                            <span className="d-none d-md-inline" style={{ color: "white" }}>
                              {t("navbar.language") || "Language"}
                            </span>
                          </>
                        }
                        id="language-dropdown"
                        menuVariant="light"
                      >
                        {[
                          { code: "en", label: "English" },
                          { code: "fr", label: "Français" },
                          { code: "es", label: "Español" },
                          { code: "fa", label: "فارسی" },
                          { code: "de", label: "Deutsch" },
                          { code: "ar", label: "العربية" },
                        ].map((lang) => (
                          <NavDropdown.Item  key={lang.code} onClick={() => i18n.changeLanguage(lang.code)}>
                            {lang.label}
                          </NavDropdown.Item>
                        ))}
                      </NavDropdown>
            </div>
          </div>

          <div className="footer-bottom text-center mt-4">
            <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
          </div>
          </Container>
      </footer>
    </div>
  );
};

const DownloadCard = ({ title, description, icon, link, buttonLabel }) => (
  <Col xs={10} md={6} lg={4} className="d-flex justify-content-center mb-4">
    <div style={styles.card}>
      {icon}
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={styles.cardDesc}>{description}</p>
      <Button
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        variant="primary"
        style={styles.downloadButton}
      >
        {buttonLabel}
      </Button>
    </div>
  </Col>
);

const styles = {
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
  header: {
    textAlign: "center",
    marginBottom: "60px",
    padding: "0 20px",
  },
  title: {
    fontSize: "clamp(2.5rem, 6vw, 5rem)",
    fontWeight: "800",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "clamp(1rem, 2vw, 1.5rem)",
    color: "#B0B0B0",
    maxWidth: "600px",
    margin: "0 auto",
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
  icon: {
    color: "#00D1FF",
    marginBottom: "10px",
  },
  downloadButton: {
    backgroundColor: "#00D1FF",
    border: "none",
    padding: "10px 25px",
    fontWeight: "600",
    borderRadius: "10px",
    color: "#fff",
  },
  footer: {
    marginTop: "auto",
    padding: "30px 0",
    // backgroundColor: "rgb(1, 20, 26)",
    color: "#ffffff",
    width: "100%",
  }
};

export default Download;
