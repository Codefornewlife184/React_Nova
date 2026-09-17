/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useRef, useState } from "react";
import { Navbar, Nav, Container, Row, Col, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { getLocalizedPath } from "../../utils/siteRoutes";

function Header() {
  const { t, i18n } = useTranslation();
  const language = i18n.language === "en" ? "en" : "tr";
  const [expanded, setExpanded] = useState(false);
  const [infoDropdownOpen, setInfoDropdownOpen] = useState(false);
  const [isMobileNav, setIsMobileNav] = useState(false);
  const dropdownCloseTimeoutRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const navLabels =
    language === "en"
      ? {
          home: "Home",
          about: "About Us",
          product: "License Classes",
          info: "Information",
          registration: "Registration Documents",
          faq: "FAQ",
          usefulLinks: "Useful Links",
          vehicles: "Our Vehicles",
          contact: "Contact",
          reachUs: "Contact Us",
        }
      : {
          home: "Anasayfa",
          about: "Hakkımızda",
          product: "Ehliyet Sınıfları",
          info: "Bilgilendirme",
          registration: "Kayıt İçin Gerekli Belgeler",
          faq: "Sıkça Sorulan Sorular",
          usefulLinks: "Faydalı Linkler",
          vehicles: "Araçlarımız",
          contact: "İletişim",
          reachUs: "Bize Ulaşın",
        };

  const toggleNav = (nextExpanded) => {
    const resolvedExpanded =
      typeof nextExpanded === "boolean" ? nextExpanded : !expanded;

    setExpanded(resolvedExpanded);

    if (!resolvedExpanded) {
      setInfoDropdownOpen(false);
    }
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
    setExpanded(false);
    setInfoDropdownOpen(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const openInfoDropdown = () => {
    if (isMobileNav) {
      return;
    }

    if (dropdownCloseTimeoutRef.current) {
      clearTimeout(dropdownCloseTimeoutRef.current);
    }
    setInfoDropdownOpen(true);
  };

  const closeInfoDropdown = () => {
    if (isMobileNav) {
      return;
    }

    dropdownCloseTimeoutRef.current = setTimeout(() => {
      setInfoDropdownOpen(false);
    }, 140);
  };

  useEffect(() => {
    const syncViewportState = () => {
      setIsMobileNav(window.innerWidth <= 1200);
    };

    syncViewportState();
    window.addEventListener("resize", syncViewportState);

    return () => {
      window.removeEventListener("resize", syncViewportState);
    };
  }, []);

  useEffect(() => {
    if (!expanded) {
      setInfoDropdownOpen(false);
    }
  }, [expanded]);

  useEffect(() => {
    if (!isMobileNav) {
      setInfoDropdownOpen(false);
    }
  }, [isMobileNav]);

  useEffect(() => {
    if (!expanded) {
      return undefined;
    }

    const handleOutsideClick = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setExpanded(false);
        setInfoDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [expanded]);

  useEffect(() => {
    return () => {
      if (dropdownCloseTimeoutRef.current) {
        clearTimeout(dropdownCloseTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <header className="header-area header-sticky">
        {/* Top Bar */}
        <div className="top-bar py-3" style={{ backgroundColor: "#363535ff" }}>
          <Container>
            <Row className="align-items-center">
              <Col
                xs={12}
                className="d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center gap-3">
                  <a
                    href="mailto:info@ozelnovasurucukursu.com"
                    className="d-flex align-items-center gap-2"
                    style={{ color: "#beab74" }}
                  >
                    <FaEnvelope size={16} />
                    <span style={{ fontSize: "15px", fontFamily:"Poppins, sans-serif" }}>info@ozelnovasurucukursu.com</span>
                  </a>
                </div>
                <div className="language-selector d-flex align-items-center">
                  <button
                    onClick={() => changeLanguage("tr")}
                    style={{
                      backgroundColor:
                        i18n.language === "tr" ? "#beab74" : "transparent",
                      border: "1px solid #beab74",
                      color: i18n.language === "tr" ? "#231f20" : "#beab74",
                      padding: "1px 8px",
                      borderRadius: "4px",
                      margin: "0 3px",
                      fontSize: "15px",
                      fontFamily:"Poppins, sans-serif",
                      transition: "all 0.3s ease",
                    }}
                  >
                    TR
                  </button>
                  <button
                    onClick={() => changeLanguage("en")}
                    style={{
                      backgroundColor:
                        i18n.language === "en" ? "#beab74" : "transparent",
                      border: "1px solid #beab74",
                      color: i18n.language === "en" ? "#231f20" : "#beab74",
                      padding: "1px 8px",
                      borderRadius: "4px",
                      margin: "0 3px",
                      fontSize: "15px",
                      fontFamily:"Poppins, sans-serif",
                      transition: "all 0.3s ease",
                    }}
                  >
                    EN
                  </button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Main Header */}
        <div className="main-header">
          <Container className="main-header-container">
            <Row className="align-items-center">
              <Col xs={12}>
                <div className="header-main-row align-items-center">
                  {/* Logo */}
                  <Link
                    to="/"
                    onClick={handleClick}
                    className="d-inline-block header-logo-link"
                  >
                    <img
                      src="/assets/images/nova-logo.webp"
                      alt="logo"
                      style={{ maxHeight: "100px", padding: "5px" }}
                    />
                  </Link>

                  {/* Navigation Menu */}
                  <Navbar
                    ref={mobileMenuRef}
                    expand="xl"
                    expanded={expanded}
                    onToggle={toggleNav}
                    className="main-nav py-2 px-0"
                    bg="transparent"
                    style={{ "--bs-navbar-toggler-bg": "transparent" }}
                  >
                    <Navbar.Toggle
                      aria-controls="basic-navbar-nav"
                      className="border-0 text-dark"
                    />
                    <Navbar.Collapse
                      id="basic-navbar-nav"
                      className="text-center"
                    >
                      <Nav className="mx-auto">
                        <Nav.Link
                          as={Link}
                          to={getLocalizedPath("home", language)}
                          onClick={handleClick}
                          className="text-dark me-3"
                        >
                          {navLabels.home}
                        </Nav.Link>
                        <Nav.Link
                          as={Link}
                          to={getLocalizedPath("about", language)}
                          onClick={handleClick}
                          className="text-dark me-3"
                        >
                          {navLabels.about}
                        </Nav.Link>
                        <Nav.Link
                          as={Link}
                          to={getLocalizedPath("product", language)}
                          onClick={handleClick}
                          className="text-dark me-3"
                        >
                          {navLabels.product}
                        </Nav.Link>
                        <NavDropdown
                          title={navLabels.info}
                          id="bilgilendirme-dropdown"
                          className="custom-dropdown me-3"
                          show={infoDropdownOpen}
                          onMouseEnter={openInfoDropdown}
                          onMouseLeave={closeInfoDropdown}
                          onToggle={(isOpen) => {
                            setInfoDropdownOpen(isOpen);
                          }}
                        >
                          <NavDropdown.Item
                            as={Link}
                            to={getLocalizedPath("registration", language)}
                            onClick={handleClick}
                          >
                            {navLabels.registration}
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            as={Link}
                            to={getLocalizedPath("faq", language)}
                            onClick={handleClick}
                          >
                            {navLabels.faq}
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            as={Link}
                            to={getLocalizedPath("usefulLinks", language)}
                            onClick={handleClick}
                          >
                            {navLabels.usefulLinks}
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            as={Link}
                            to={getLocalizedPath("vehicles", language)}
                            onClick={handleClick}
                          >
                            {navLabels.vehicles}
                          </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link
                          as={Link}
                          to={getLocalizedPath("contact", language)}
                          onClick={handleClick}
                          className="text-dark me-3"
                        >
                          {navLabels.contact}
                        </Nav.Link>
                      </Nav>
                      <div className="mobile-contact-panel d-xl-none">
                        <a href="tel:+902242672424" className="mobile-call-btn">
                          <FaPhone />
                          <span>+90 530 622 6596</span>
                        </a>
                        <a
                          href="https://wa.me/905306226596?text=Merhaba%2C%20bilgi%20almak%20istiyorum."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mobile-whatsapp-btn"
                        >
                          <FaWhatsapp />
                          <span>{navLabels.reachUs}</span>
                        </a>
                      </div>
                    </Navbar.Collapse>
                  </Navbar>

                  {/* Phone Number */}
                  <div className="phone-actions d-none d-xl-flex align-items-center">
                    <a
                      href="tel:+905306226596"
                      className="phone-icon-button"
                      aria-label="Telefon ile ara"
                    >
                      <FaPhone />
                    </a>
                    <a
                      href="https://wa.me/905306226596?text=Merhaba%2C%20bilgi%20almak%20istiyorum."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-whatsapp-btn"
                    >
                      <FaWhatsapp className="me-2" />
                      <span>{navLabels.reachUs}</span>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
      {/* Responsive CSS */}
      <style>{`
        .header-area {
          background-color: #363535;
        }

        .top-bar {
          background-color: #363535 !important;
        }

        .main-header {
          background-color: #ffffff;
          border-bottom: 1px solid rgba(35, 31, 32, 0.12);
        }

        .header-main-row {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          width: 100%;
        }

        .header-logo-link {
          justify-self: start;
        }

        .main-nav {
          justify-self: center;
          margin: 0 auto;
        }

        .phone-actions {
          justify-self: end;
          gap: 14px;
        }

        .phone-icon-button {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: #beab74;
          color: #231f20;
          font-size: 1.05rem;
          text-decoration: none;
          transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
          border: 1px solid #beab74;
        }

        .phone-icon-button:hover,
        .phone-icon-button:focus,
        .phone-icon-button:active {
          background-color: #231f20;
          color: #beab74;
          text-decoration: none;
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(35, 31, 32, 0.18);
        }

        .contact-whatsapp-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 18px;
          border-radius: 999px;
          background-color: #beab74;
          color: #231f20;
          font-size: 1.15rem;
          font-weight: 600;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
          box-shadow: 0 10px 24px rgba(190, 171, 116, 0.24);
          white-space: nowrap;
          border: 1px solid #beab74;
        }

        .contact-whatsapp-btn:hover,
        .contact-whatsapp-btn:focus,
        .contact-whatsapp-btn:active {
          background-color: #231f20;
          color: #beab74;
          text-decoration: none;
          transform: translateY(-1px);
          box-shadow: 0 12px 26px rgba(35, 31, 32, 0.22);
        }

        .main-nav .nav-link {
          color: #231f20 !important;
        }

        .main-nav .dropdown-toggle {
          color: #231f20 !important;
        }

        .main-nav .nav-link:hover,
        .main-nav .nav-link:focus,
        .main-nav .dropdown-toggle:hover,
        .main-nav .dropdown-toggle:focus {
          color: rgba(35, 31, 32, 0.75) !important;
        }

        .main-nav .dropdown-menu {
          --bs-dropdown-spacer: 0;
          border: 1px solid rgba(35, 31, 32, 0.12);
          border-radius: 12px;
          margin-top: 12px;
          padding: 0.5rem 0;
          box-shadow: 0 10px 24px rgba(35, 31, 32, 0.08);
        }

        .main-nav .custom-dropdown {
          position: relative;
        }

        .main-nav .custom-dropdown::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -16px;
          height: 16px;
        }

        .main-nav .dropdown-item {
          color: #231f20;
          padding: 0.6rem 1rem;
        }

        .main-nav .dropdown-item:hover,
        .main-nav .dropdown-item:focus {
          background-color: rgba(35, 31, 32, 0.06);
          color: #231f20;
        }

        .navbar-toggler {
          display: none;
        }

        @media (max-width: 1200px) {
          .header-main-row {
            display: flex;
            justify-content: space-between;
          }

          .navbar-toggler {
            display: block !important;
            margin: 0 !important;
            border: 1px solid rgba(35, 31, 32, 0.35) !important;
            padding: 4px 8px !important;
            z-index: 1001;
          }

          .navbar-collapse {
            position: fixed;
            top: 160px;
            left: 12px;
            right: 12px;
            width: auto;
            height: auto;
            max-height: calc(100vh - 172px);
            background-color: #ffffff !important;
            transition: opacity 0.25s ease, visibility 0.25s ease, transform 0.25s ease;
            z-index: 2000;
            overflow-y: auto;
            opacity: 0;
            visibility: hidden;
            transform: translateY(-8px);
            box-shadow: 0 16px 32px rgba(35, 31, 32, 0.18);
            border: 1px solid rgba(35, 31, 32, 0.12);
            border-radius: 22px;
            pointer-events: none;
            display: block !important;
          }

          .navbar-collapse.show {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
            pointer-events: auto;
          }

          .navbar-collapse .nav {
            flex-direction: column;
            width: 100%;
            padding: 8px 0 0;
            background-color: #ffffff !important;
          }

          .navbar-collapse .nav-item {
            width: 100%;
            border-bottom: 1px solid rgba(35, 31, 32, 0.1);
            background-color: #ffffff !important;
          }

          .navbar-collapse .nav-link,
          .navbar-collapse .dropdown-toggle {
            display: block;
            width: 100%;
            padding: 16px 20px !important;
            color: #231f20 !important;
            background-color: #ffffff !important;
            text-align: center !important;
            margin-right: 0 !important;
            font-weight: 600;
            opacity: 1 !important;
          }

          .phone-number {
            display: none !important;
          }

          .navbar-collapse .dropdown-menu {
            position: static !important;
            float: none !important;
            width: 100%;
            margin: 0;
            border: 0;
            border-radius: 0;
            box-shadow: none;
            background-color: #f7f7f7 !important;
          }

          .navbar-collapse .dropdown-menu.show {
            display: block;
          }

          .navbar-collapse .dropdown-item {
            text-align: center;
            padding: 13px 20px !important;
            color: #231f20 !important;
            border-top: 1px solid rgba(35, 31, 32, 0.06);
            background-color: #f7f7f7 !important;
          }

          .mobile-contact-panel {
            display: flex;
            flex-direction: column;
            gap: 12px;
            padding: 16px;
            background-color: #ffffff;
          }

          .mobile-call-btn,
          .mobile-whatsapp-btn {
            width: 100%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            border-radius: 999px;
            padding: 13px 16px;
            font-size: 1rem;
            font-weight: 600;
            text-decoration: none;
          }

          .mobile-call-btn {
            background-color: #231f20;
            color: #beab74;
            border: 1px solid rgba(190, 171, 116, 0.35);
            box-shadow: 0 10px 24px rgba(35, 31, 32, 0.12);
          }

          .mobile-call-btn span,
          .mobile-whatsapp-btn span {
            color: inherit;
          }

          .mobile-call-btn svg,
          .mobile-whatsapp-btn svg {
            color: inherit;
          }

          .mobile-whatsapp-btn {
            background-color: #beab74;
            color: #231f20;
            box-shadow: 0 10px 24px rgba(190, 171, 116, 0.24);
            border: 1px solid #beab74;
          }

          .mobile-call-btn:hover,
          .mobile-call-btn:focus,
          .mobile-whatsapp-btn:hover,
          .mobile-whatsapp-btn:focus {
            background-color: #231f20;
            color: #beab74;
            text-decoration: none;
          }

          .navbar-collapse .nav-link:hover,
          .navbar-collapse .nav-link:focus,
          .navbar-collapse .dropdown-toggle:hover,
          .navbar-collapse .dropdown-toggle:focus {
            background-color: #f7f7f7 !important;
            color: #231f20 !important;
          }

          .navbar-collapse .custom-dropdown.show > .dropdown-toggle {
            background-color: #f7f7f7 !important;
          }
        }

        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(35, 31, 32, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
        }

        .navbar-collapse .custom-dropdown .dropdown-menu {
          background-color: #ffffff !important;
          border: 1px solid rgba(35, 31, 32, 0.12) !important;
        }
        .navbar-collapse .custom-dropdown .dropdown-menu .dropdown-item {
          color: #231f20 !important;
        }
        .navbar-collapse .custom-dropdown .dropdown-toggle {
          color: #231f20 !important;
        }
        .navbar-collapse .custom-dropdown .dropdown-toggle::after {
          color: #231f20 !important;
          border-top-color: #231f20 !important;
        }
        
        /* Social Icon Button Styles */
        .social-icon-button {
          border: 1px solid #beab74;
          color: #beab74;
          padding: 3px 8px;
          border-radius: 4px;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .social-icon-button:hover {
          background-color: #beab74;
          color: #231f20;
        }

        .phone-number {
          margin-left: 2rem;
          padding: 0.5rem 1rem;
          border-left: 1px solid rgba(35, 31, 32, 0.2);
        }

        .phone-number a {
          transition: all 0.3s ease;
        }

        .phone-number a:hover {
          color: rgba(35, 31, 32, 0.75) !important;
        }

      `}</style>
    </>
  );
}

export default Header;
