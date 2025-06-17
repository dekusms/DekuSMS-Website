import React, {useState}from 'react';
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap';
import { FaCheckCircle } from "react-icons/fa";
import { Trans, useTranslation } from "react-i18next";
import { FaDownload, FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "../App.css";

const HeroSection = () => {
  const { t } = useTranslation('dekusms');
  const [hover, setHover] = useState(false);

const features = [
  t('landing.features.feature1'),
  t('landing.features.feature2'),
  t('landing.features.feature3'),
  t('landing.features.feature4'),
];

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0f2027, #203a43, #0f2027)",
        boxShadow: "0 8px 24px #203a43",
        color: 'white',
        paddingTop: '80px',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container fluid>
        <Row className="align-items-center text-center text-md-start flex-wrap">

          <Col
            xs={12}
            md={5}
            className="px-4 text-md-start text-center d-flex flex-column justify-content-center"
          >
            <h1 className="fw-bold text-white mb-3 display-4 display-md-2">
              {t('landing.title')}
            </h1>

            <p className="fs-5 text-light mb-2">
              {t('landing.title2')}
            </p>

            <p className="text-light fs-5 lh-lg mb-4" style={{ textAlign: "justify" }}>
              {t('landing.description')}
            </p>

<div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3 mt-3 mb-5">
<Link
  to="/download"
  onMouseEnter={() => setHover(true)}
  onMouseLeave={() => setHover(false)}
  className="btn d-flex align-items-center justify-content-center px-4 py-2"
  style={{
    minWidth: '140px',
    fontWeight: 600,
    background: hover ? '#20b7a0' : '#2ED3B7',
    color: hover ? '#ffffff' : '#203a43',
    transition: 'all 0.3s ease',
    boxShadow: hover ? '0 4px 12px rgba(0, 0, 0, 0.15)' : 'none',
    transform: hover ? 'translateY(-2px)' : 'none',
  }}
>
  <FaDownload className="me-2" /> {t('landing.download')}
</Link>


  <a
    href="https://opencollective.com/dekusms"
    target="_blank"
    rel="noreferrer"
    className="btn btn-outline-light px-4 py-2"
    style={{ minWidth: '140px', fontWeight: '600', color:'#2ED3B7'  }}
  >
    {t('landing.donate')}
  </a>
</div>
            <p className="mb-2">
              {t('landing.join')}{" "}
              <a
                href="https://t.me/dekusms"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                style={{ color: "#2ED3B7", textDecoration: "none", fontWeight: "500" }}
                onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
                onMouseOut={(e) => (e.target.style.textDecoration = "none")}
              >
                Telegram
              </a>{" "}
              &{" "}
              <a
                href="https://t.me/dekusms"
                target="_blank"
                rel="noreferrer"
                aria-label="Reddit"
                style={{ color: "#2ED3B7", textDecoration: "none", fontWeight: "500" }}
                onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
                onMouseOut={(e) => (e.target.style.textDecoration = "none")}
              >
                Reddit
              </a>{" "}
              {t('landing.forUpdates')}{" "}
            </p>
          </Col>

          <Col xs={12} md={4} className="d-flex justify-content-center mb-4 mb-md-0 mt-md-0 mt-4">
            <Image
              src="/Home.png"
              alt="Illustration of DekuSMS mobile interface"
              fluid
              className="img-responsive"
              style={{
                width: '100%',
                maxWidth: '300px',
                height: 'auto',
                maxHeight: '65vh',
                objectFit: 'contain',
                transform: 'rotate(-10deg)',
                pointerEvents: 'none',
              }}
            />
          </Col>

          <Col xs={12} md={3} className="pt-md-5 px-4">
            <h5 className="text-uppercase fw-semibold text-light mb-3">
              {t('landing.featuresTitle')}
            </h5>

      <ListGroup variant="flush" className="text-white">
  {features.map((feature, idx) => (
    <ListGroup.Item
      key={idx}
      className="bg-transparent border-0 d-flex align-items-center text-white px-0 py-2"
    >
      <FaCheckCircle className="me-2" style={{ color: '#2ED3B7' }} />
      {feature}
    </ListGroup.Item>
  ))}
</ListGroup>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
