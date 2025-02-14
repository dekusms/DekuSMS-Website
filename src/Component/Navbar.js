import React from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import '../translations'; // Import the translation setup

const NavbarComponent = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header>
      <Navbar expand="lg" className="navbar-custom">
        <Container>
          <Navbar.Brand href="#">
            <img
              src="DekuSMS-Default.png"
              alt="Logo"
              className="img-fluid"
              style={{ height: "30px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto nav-end">
              <Nav.Link href="#" className="nav-link">{t('home')}</Nav.Link>
              <Nav.Link href="#" className="nav-link">{t('about')}</Nav.Link>
              <Nav.Link href="#" className="nav-link">{t('contact')}</Nav.Link>
              {/* Language Switcher */}
              <Dropdown>
                <Dropdown.Toggle variant="secondary" className="language-toggle">
                  {t('language')}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => changeLanguage('en')}>English</Dropdown.Item>
                  <Dropdown.Item onClick={() => changeLanguage('fr')}>Français</Dropdown.Item>
                  <Dropdown.Item onClick={() => changeLanguage('fa')}>فارسی</Dropdown.Item>
                  <Dropdown.Item onClick={() => changeLanguage('es')}>Español</Dropdown.Item>
                  <Dropdown.Item onClick={() => changeLanguage('de')}>Deutsch</Dropdown.Item>
                  <Dropdown.Item onClick={() => changeLanguage('ar')}>العربية</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavbarComponent;
