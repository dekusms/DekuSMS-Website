import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { Container, Row, Col, Button, Card, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faGlobe} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';


function App() {
  const { t } = useTranslation();

  return (
    <div className="app">
      {/* ======= Navbar ======= */}
      <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm py-3">
        <Container>
          <Navbar.Brand href="#" className="fw-bold fs-4 text-primary"> <img
          src="/DekuSMS-Blue.png"
          alt="Logo"
          style={{ height: "22px", marginRight: "8px" }}
        /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="align-items-center gap-3">
              <Nav.Link href="#features">{t('navbar.features') || 'Features'}</Nav.Link>
              <Nav.Link href="#offers">{t('navbar.offers') || 'Offers'}</Nav.Link>
              <Nav.Link href="#pricing">{t('navbar.pricing') || 'Pricing'}</Nav.Link>
              <Nav.Link href="#login">{t('navbar.login') || 'Login'}</Nav.Link>
              <NavDropdown
                align="end"
                title={<><FontAwesomeIcon icon={faGlobe} className="me-1" /><span className="d-none d-md-inline">{t('navbar.language') || 'Language'}</span></>}
                id="language-dropdown"
              >
                <NavDropdown.Item onClick={() => i18n.changeLanguage("en")}>English</NavDropdown.Item>
                <NavDropdown.Item onClick={() => i18n.changeLanguage("fr")}>Français</NavDropdown.Item>
                <NavDropdown.Item onClick={() => i18n.changeLanguage("es")}>Español</NavDropdown.Item>
                <NavDropdown.Item onClick={() => i18n.changeLanguage("fa")}>فارسی</NavDropdown.Item>
                <NavDropdown.Item onClick={() => i18n.changeLanguage("de")}>Deutsch</NavDropdown.Item>
                <NavDropdown.Item onClick={() => i18n.changeLanguage("ar")}>العربية</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <section className="hero-section d-flex align-items-center text-white text-center">
        <Container>
          <h1 className="display-4 fw-bold">Your Text Summarizer AI</h1>
          <p className="lead mt-3">Instantly get summaries of long texts using AI.</p>
          <Button variant="light" size="lg" className="mt-4">Try Now</Button>
        </Container>
      </section>

      {/* How it Works */}
      <section className="how-it-works py-5 text-center">
        <Container>
          <h2 className="fw-bold mb-4">How It Works</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  {/* <FaCopy size={40} className="mb-3 text-primary" /> */}
                  <Card.Title>1. Paste Text</Card.Title>
                  <Card.Text>Copy and paste your long content or upload a file.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  {/* <FaBolt size={40} className="mb-3 text-warning" /> */}
                  <Card.Title>2. Click Summarize</Card.Title>
                  <Card.Text>Let our AI crunch the content and extract the key points.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  {/* <FaCheckCircle size={40} className="mb-3 text-success" /> */}
                  <Card.Title>3. Get Results</Card.Title>
                  <Card.Text>Receive a clear, short summary you can instantly use.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Textbee */}
      <section className="why-textbee py-5 bg-light text-center">
        <Container>
          <h2 className="fw-bold mb-4">Why Choose Textbee?</h2>
          <Row className="g-4">
            <Col md={6}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>Fast & Accurate</Card.Title>
                  <Card.Text>Our AI gives you high-quality summaries in seconds.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>Easy to Use</Card.Title>
                  <Card.Text>No learning curve — just paste, click, and go.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5 text-white text-center">
        <Container>
          <h2 className="fw-bold mb-3">Ready to simplify your reading?</h2>
          <p className="lead">Try Textbee now and save your time!</p>
          <Button variant="light" size="lg" className="mt-3">Start Summarizing</Button>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer py-4 text-center text-white">
        <Container>
          <p>&copy; {new Date().getFullYear()} Textbee. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
