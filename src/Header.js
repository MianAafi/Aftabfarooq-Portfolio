import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'; // Import from react-scroll
import './css/Header.css';
import Intro from './Intro';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import FAQ from './FAQ';

function Header() {
  return (
    <>
      <div className="Header">
        <nav className="navbar navbar-expand-lg navbar-light" id="navbar-bg">
          <Link className="navbar-brand" to="/">
            <img
              className="Logo-image"
              src="./image/aftabLogo.png"
              alt="Logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto text-center">
              <li className="nav-item active">
                <ScrollLink
                  className="nav-link navbtext"
                  id="headerNav"
                  to="introSection"
                  smooth={true}
                  style={{ color: 'var(--white)' }}
                >
                  HOME <span className="sr-only">(current)</span>
                </ScrollLink>
              </li>
              <li className="nav-item active">
                <ScrollLink
                  className="nav-link navbtext"
                  id="headerNav"
                  to="aboutSection"
                  smooth={true}
                  style={{ color: 'var(--white)' }}
                >
                  ABOUT
                </ScrollLink>
              </li>
              <li className="nav-item active">
                <ScrollLink
                  className="nav-link navbtext"
                  id="headerNav"
                  to="servicesSection"
                  smooth={true}
                  style={{ color: 'var(--white)' }}
                >
                  SERVICES
                </ScrollLink>
              </li>
              <li className="nav-item active">
                <ScrollLink
                  className="nav-link navbtext"
                  id="headerNav"
                  to="portfolioSection"
                  smooth={true}
                  style={{ color: 'var(--white)' }}
                >
                  PORTFOLIO
                </ScrollLink>
              </li>
              <li className="nav-item active">
                <ScrollLink
                  className="nav-link navbtext "
                  id="headerNav"
                  to="contactSection"
                  smooth={true}
                  style={{ color: 'var(--white)' }}
                >
                  CONTACT
                </ScrollLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Intro name="introSection" />
      <About name="aboutSection" />
      <Services name="servicesSection" />
      <Portfolio name="portfolioSection" />
      <FAQ />
      <Contact name="contactSection" />
    </>
  );
}

export default Header;
