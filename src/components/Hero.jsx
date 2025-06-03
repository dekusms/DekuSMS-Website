import React from 'react';
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap';
import { FaCheckCircle } from "react-icons/fa";
import "../App.css";

const HeroSection = () => {
  return (
    <div
      style={{
        background: "#000824",
        boxShadow: "5px 5px 15px rgba(37, 63, 78, 0.97)",
        color: 'white',
        paddingTop: '80px',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container fluid>
        <Row className="align-items-center text-center text-md-start flex-wrap">

          {/* Left Text */}
          <Col
            xs={12}
            md={5}
            className="px-4 text-md-start text-center d-flex flex-column justify-content-center"
          >
            <h1 className="fw-bold text-white mb-3 display-4 display-md-2">
              DekuSMS
            </h1>

            <p className="fs-4 text-secondary mb-2">
              Empowering Offline Communication
            </p>

            <p className="text-light fs-6 lh-lg mb-4">
              <span className="text-white fw-semibold">DekuSMS</span> is an Android SMS app developed as a proof-of-concept for secure SMS messaging, image transmission,
              and SMS-cloud communications. Though not fully user-friendly yet, the aim is to remain highly customizable,
              allowing users to configure their own cloud servers rather than rely on specific providers.
            </p>

<p className="mb-2">
  Join our{" "}
  <a
    href="https://t.me/dekusms"
    target="_blank"
    rel="noreferrer"
    aria-label="Join our Telegram community for DekuSMS updates"
    style={{
      color: "#2ED3B7",
      textDecoration: "none",
      fontWeight: "500"
    }}
    onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
    onMouseOut={(e) => (e.target.style.textDecoration = "none")}
  >
    Telegram
  </a>{" "}
  for release announcements or discussions.
</p>


         <p className="fst-italic text-secondary mb-3">Credits for the logo: <strong>Erenye4g3r</strong></p>
          </Col>

          {/* Middle Image */}
          <Col xs={12} md={4} className="d-flex justify-content-center mb-4 mb-md-0">
            <Image
              src="/Home.png"
              alt="Illustration of DekuSMS mobile interface"
              fluid
              className="w-100"
              style={{
                maxHeight: '65vh',
                objectFit: 'contain',
                transform: 'rotate(-10deg)',
                pointerEvents: 'none',
              }}
            />
          </Col>

          {/* Right Features List */}
          <Col xs={12} md={3} className="pt-md-5 px-4">
            <h5 className="text-uppercase fw-semibold text-light mb-3">Key Features</h5>
         <ListGroup variant="flush" className="text-white">
  {[
    'End-to-End Encryption',
    'Use your phone as an SMS Gateway',
    'Cloud Forwarding',
    'Forward incoming messages to a cloud server',
  ].map((feature, idx) => (
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
