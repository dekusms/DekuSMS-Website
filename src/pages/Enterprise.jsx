import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Card, Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';
import { faChartLine, faShieldAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons";
import "../App.css";

function App() {
  const { t } = useTranslation("enterprise");

  const steps = [
    { icon: faChartLine, title: t('features.analyticsTitle'), desc: t('features.analyticsDesc') },
    { icon: faShieldAlt, title: t('features.securityTitle'), desc: t('features.securityDesc') },
    { icon: faPhoneVolume, title: t('features.supportTitle'), desc: t('features.supportDesc') }
  ];

  const enterpriseFeatures = [
    { span: t('enterprise.features.feature1.span'), title: t('enterprise.features.feature1.title'), desc: t('enterprise.features.feature1.desc') },
    { span: t('enterprise.features.feature2.span'), title: t('enterprise.features.feature2.title'), desc: t('enterprise.features.feature2.desc') },
    { span: t('enterprise.features.feature3.span'), title: t('enterprise.features.feature3.title'), desc: t('enterprise.features.feature3.desc') },
  ];

  const pricingPlans = [
    {
      name: t('pricing.free.name'),
      description: t('pricing.free.description'),
      price: t('pricing.free.price'),
      features: [
        t('pricing.free.features.0'),
        t('pricing.free.features.1'),
        t('pricing.free.features.2'),
        t('pricing.free.features.3'),
        t('pricing.free.features.4'),
      ],
      buttonText: t('pricing.free.buttonText'),
      popular: false,
    },
    {
      name: t('pricing.pro.name'),
      description: t('pricing.pro.description'),
      price: t('pricing.pro.price'),
      features: [
        t('pricing.pro.features.0'),
        t('pricing.pro.features.1'),
        t('pricing.pro.features.2'),
        t('pricing.pro.features.3'),
        t('pricing.pro.features.4'),
        t('pricing.pro.features.5'),
      ],
      buttonText: t('pricing.pro.buttonText'),
      popular: true,
    },
    {
      name: t('pricing.custom.name'),
      description: t('pricing.custom.description'),
      price: t('pricing.custom.price'),
      features: [
        t('pricing.custom.features.0'),
        t('pricing.custom.features.1'),
        t('pricing.custom.features.2'),
        t('pricing.custom.features.3'),
        t('pricing.custom.features.4'),
      ],
      buttonText: t('pricing.custom.buttonText'),
      popular: false,
    },
  ];


  const sectionStyle = {
    backgroundColor: '#0b1d3a',
    padding: '100px 0',
    color: '#fff',
    textAlign: 'center'
  };

  const cardStyle = (isPopular) => ({
    backgroundColor: '#fff',
    color: '#0b1d3a',
    borderRadius: '16px',
    padding: '40px 30px',
    boxShadow: isPopular
      ? '0 0 0 3px rgb(5, 142, 163), 0 20px 60px rgba(10, 76, 142, 0.25)'
      : '0 10px 30px rgba(0, 0, 0, 0.15)',
    transform: isPopular ? 'scale(1.03)' : 'scale(1)',
    zIndex: isPopular ? 2 : 1,
    maxWidth: '360px',
    margin: '0 auto',
    position: 'relative'
  });

  const titleStyle = {
    color: '#E66F00',
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '10px'
  };

  const subTitleStyle = {
    color: '#ccc',
    fontSize: '1.2rem',
    marginBottom: '50px'
  };

  const buttonStyle = {
    backgroundColor: '#E66F00',
    border: 'none',
    color: '#fff',
    fontWeight: '600',
    padding: '12px 30px',
    borderRadius: '8px',
    marginTop: '25px'
  };

  const badgeStyle = {
    position: 'absolute',
    top: '-20px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#0a4c8e',
    color: '#fff',
    fontWeight: '700',
    padding: '5px 15px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    zIndex: 3
  };


  return (
    <div className="app">
      <Navbar
  expand="lg"
  fixed="top"
  className="shadow-sm py-3"
  style={{ backgroundColor: '#000158', color: 'white' }}
>
  <Container>
    <Navbar.Brand href="#" style={{ color: 'white' }} className="fw-bold fs-4">
      <img
        src="/DekuSMS-Dark Theme.png"
        alt="Logo"
        style={{ height: "22px", marginRight: "8px" }}
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav className="align-items-center gap-3">
        <Nav.Link href="#features" style={{ color: 'white' }}>
          {t('navbar.features') || 'Features'}
        </Nav.Link>
        <Nav.Link href="#offers" style={{ color: 'white' }}>
          {t('navbar.offers') || 'Offers'}
        </Nav.Link>
        <Nav.Link href="#pricing" style={{ color: 'white' }}>
          {t('navbar.pricing') || 'Pricing'}
        </Nav.Link>
        <Nav.Link href="#login" style={{ color: 'white' }}>
          {t('navbar.login') || 'Login'}
        </Nav.Link>

<NavDropdown
  align="end"
  title={
    <>
      <span className="me-1" style={{ fontSize: '1.2rem' }}>🌐</span>
      <span className="d-none d-md-inline" style={{ color: 'white' }}>
        {t('navbar.language') || 'Language'}
      </span>
    </>
  }
  id="language-dropdown"
>
  <NavDropdown.Item onClick={() => i18n.changeLanguage("en")}>
    English
  </NavDropdown.Item>
  <NavDropdown.Item onClick={() => i18n.changeLanguage("fr")}>
    Français
  </NavDropdown.Item>
  <NavDropdown.Item onClick={() => i18n.changeLanguage("es")}>
    Español
  </NavDropdown.Item>
  <NavDropdown.Item onClick={() => i18n.changeLanguage("fa")}>
    فارسی
  </NavDropdown.Item>
  <NavDropdown.Item onClick={() => i18n.changeLanguage("de")}>
    Deutsch
  </NavDropdown.Item>
  <NavDropdown.Item onClick={() => i18n.changeLanguage("ar")}>
    العربية
  </NavDropdown.Item>
</NavDropdown>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
{/* ======-----------------------==== landing page==----------------------==== */}
<section
      className="d-flex align-items-center text-white text-center"
      style={{
        height: '100vh',
        background: 'linear-gradient(135deg, #2f2e31, #09187b)',
        padding: '60px 0',
      }}
    >
      <Container>
        <h1 className="display-4 fw-bold">{t('enterprise.heroTitle')}</h1>
        <p className="lead mt-3">{t('enterprise.heroDesc')}</p>
        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-4">
          <Button variant="light" size="lg">
            {t('buttons.requestDemo')}
          </Button>
          <Button variant="light" size="lg">
            {t('buttons.learnMore')}
          </Button>
        </div>
      </Container>
    </section>
      {/* ======================= How it Works================= */}
      <section id="features" className="py-5">
      <Container>
        <h2 className="mb-4 fw-bold fs-1 text-center" style={{ color: '#09187b' }}>
          {t('enterprise.title')}
        </h2>

        <Row className="justify-content-center g-4">
          {enterpriseFeatures.map((feature, index) => (
            <Col key={index} md={6} lg={4}>
              <Card className="h-100 shadow-sm border-0 p-3 rounded" style={{ backgroundColor: '#f5f5f5', color: 'blue' }}>
                <Card.Body className="d-flex flex-column align-items-start">
                  <small className="text-warning fw-bold mb-2">{feature.span}</small>
                  <h5 className="fw-bold text-dark">{feature.title}</h5>
                  <p className="text-muted mt-2">{feature.desc}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="align-items-center justify-content-center mt-5 gx-5 gy-4">
          <Col md={6} className="d-flex justify-content-center">
            <Image
              src="/Dashboard.png"
              alt={t('enterprise.imageAlt')}
              fluid
              rounded
              style={{ maxWidth: '400px', boxShadow: '0 8px 18px rgba(0, 0, 0, 0.07)' }}
            />
          </Col>
          <Col md={6} className="text-start">
            <small className="text-warning fw-bold d-block mb-2">
              {t('enterprise.featureHighlight.span')}
            </small>
            <h4 className="fw-bold text-dark mb-3">
              {t('enterprise.featureHighlight.title')}
            </h4>
            <p className="text-muted lh-lg">
              {t('enterprise.featureHighlight.desc')}
            </p>
          </Col>
        </Row>
      </Container>
    </section>

{/* 🚀 ===================================prcing=============== */}
 <div style={sectionStyle}>
      <Container>
        {/* Intro Section */}
        <div className="mx-auto mb-5" style={{ maxWidth: '900px' }}>
          <small className="text-uppercase fw-bold d-block mb-2" style={{ color: '#E66F00' }}>
            {t('pricing.header')}
          </small>
          <h2 className="fw-bold fs-1" style={{ color: '#E4E4E7' }}>
            {t('pricing.aboutTitle')}
          </h2>
          <p className="fs-6 mt-3" style={{ color: '#D1D1D6' }}>
            <strong>DekuSMS</strong> {t('pricing.aboutLine1')}
          </p>
          <p className="fs-6" style={{ color: '#D1D1D6' }}>
            {t('pricing.aboutLine2')}
          </p>
        </div>

        <h2 style={titleStyle}>{t('pricing.pricingTitle')}</h2>
        <p style={subTitleStyle}>{t('pricing.pricingSubTitle')}</p>

        <Row className="justify-content-center g-4">
          {pricingPlans.map((plan, idx) => (
            <Col key={idx} md={4} sm={12}>
              <div style={cardStyle(plan.popular)}>
                {plan.popular && <div style={badgeStyle}>{t('pricing.mostPopular')}</div>}
                <h4 className="fw-bold">{plan.name}</h4>
                <p className="text-muted">{plan.description}</p>
                <h2 style={{ margin: '20px 0' }}>{plan.price}</h2>

                {plan.originalPrice && (
                  <>
                    <p style={{ fontSize: '0.9rem', textDecoration: 'line-through', color: '#888' }}>
                      {plan.originalPrice} {t('pricing.monthly')}
                    </p>
                    <p style={{ color: '#bfa21f', fontWeight: '600' }}>{plan.savingsMonthly}</p>
                    <p style={{ fontSize: '0.9rem', textDecoration: 'line-through', color: '#888' }}>
                      {plan.yearlyOriginal} {t('pricing.yearly')}
                    </p>
                    <p style={{ color: '#bfa21f', fontWeight: '600' }}>{plan.savingsYearly}</p>
                  </>
                )}

                <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', marginTop: '30px' }}>
                  {plan.features.map((feat, i) => (
                    <li key={i} style={{ marginBottom: '10px' }}>
                      ✔ {feat}
                    </li>
                  ))}
                </ul>

                <Button style={buttonStyle}>{plan.buttonText}</Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>

    {/* ?================================ */}
    <section id="steps" className="py-5" style={{ backgroundColor: '#000824', color: '#fff' }}>
      <Container>
        <h1 className="text-center fw-bold mb-4" style={{ fontSize: '2.5rem' }}>
          {t('features.sectionTitle')}
        </h1>
        <Row className="justify-content-center gy-4">
          {steps.map((step, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <div
                className="d-flex align-items-center p-3 rounded shadow-sm"
                style={{
                  background: 'linear-gradient(135deg, #011f67, #011f67)',
                  gap: '20px',
                  color: '#fff',
                  transition: 'transform 0.3s ease-in-out',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0px)')}
              >
                <div
                  className="d-flex justify-content-center align-items-center rounded-circle"
                  style={{
                    backgroundColor: '#f4a261',
                    width: '50px',
                    height: '50px',
                    flexShrink: 0,
                  }}
                >
                  <FontAwesomeIcon icon={step.icon} style={{ fontSize: '2rem', color: '#010e3d' }} />
                </div>
                <div className="d-flex flex-column">
                  <div className="fw-bold" style={{ fontSize: '1.2rem', textAlign: 'start' }}>
                    {step.title}
                  </div>
                  <div className="opacity-75 mt-1" style={{ fontSize: '1rem', textAlign: 'start' }}>
                    {step.desc}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
      {/* ======================Footer ========================= */}
       <footer className="footer text-white py-5" style={{ background: "#000158" }}>
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
    </div>
  );
}

export default App;

