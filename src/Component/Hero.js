import React from 'react';
import '../App.css';
import '../index.css';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';  
import 'font-awesome/css/font-awesome.min.css';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="hero-container">
      <main className="main">
        <section className="section banner banner-section">
          <Container>
            <Row className="align-items-center">
              <Col md={6} className="banner-column">
                  <h1 className='Main-title'>{t('heroTitle')} <span>{t('span')}</span></h1>
                  <h3 className='subtitle'>{t('heroSubTitle1')}</h3>
                  <p className="banner-description">{t('heroDescription')}</p>

                  {/* ===button ======= */}
                  <div className='row'>    
                  <div className="col-lg-4 col-md-6 col-sm-8 mb-4">
                  <a
              href="https://play.google.com/store/apps/details?id=com.dekusms"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/playstore.png"
                alt="Get it on Google Play"
                className="img-fluid btn-playstore"
              />
            </a>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-8 mb-4">
            <a
              href="https://f-droid.org/packages/com.dekusms"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/fdriod.png"
                alt="Get it on F-Droid"
                className="img-fluid btn-fdroid"
              />
            </a>
          </div>
          </div>
              </Col>
              {/* Right Image */}
              <Col md={6} className="d-flex justify-content-center align-items-center">
                <div className="hero-image">
                  <img src="ss.png" alt="DekuSMS interface" className="img-fluid responsive-img" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </div>
  );
};

export default Hero;
