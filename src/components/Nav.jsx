import React from 'react';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Nav as BootstrapNav, Container } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" variant="light" className="shadow-sm">
      <Container>
        <img
          src="/DekuSMS-Blue.png"
          height="30"
          className="d-inline-block align-top me-2"
          alt="Logo"
        />

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <BootstrapNav>
            <BootstrapNav.Link href="/" className="text-black">Home</BootstrapNav.Link>
            <BootstrapNav.Link href="#features" className="text-black">Features</BootstrapNav.Link>
            <BootstrapNav.Link href="#pricing" className="text-black">Pricing</BootstrapNav.Link>
            <BootstrapNav.Link href="/support" className="text-black">Support</BootstrapNav.Link>
            <BootstrapNav.Link as="span">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black py-2 px-2 hover:text-blue-600 transition"
              >
                <FontAwesomeIcon icon={faGithub} className="text-xl" />
              </a>
            </BootstrapNav.Link>
          </BootstrapNav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
