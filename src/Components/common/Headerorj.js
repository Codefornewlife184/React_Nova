/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import { Navbar, Nav, Container, Row, Col, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Header() {
  const { t, i18n } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
    setExpanded(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <header className="header-area header-sticky">
        {/* Top Bar */}
        <div className="top-bar py-2" style={{ backgroundColor: '#231f20' }}>
          <Container>
            <Row className="align-items-center">
              <Col xs={12} className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-3">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-button">
                    <FaFacebook size={16} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-button">
                    <FaInstagram size={16} />
                  </a>
                </div>
                <div className="language-selector d-flex align-items-center">
                  <button 
                    onClick={() => changeLanguage('tr')} 
                    style={{
                      backgroundColor: i18n.language === 'tr' ? 'white' : 'transparent',
                      border: '1px solid white',
                      color: i18n.language === 'tr' ? '#231f20' : 'white',
                      padding: '1px 8px',
                      borderRadius: '4px',
                      margin: '0 3px',
                      fontSize: '12px',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    TR
                  </button>
                  <button 
                    onClick={() => changeLanguage('en')} 
                    style={{
                      backgroundColor: i18n.language === 'en' ? 'white' : 'transparent',
                      border: '1px solid white',
                      color: i18n.language === 'en' ? '#231f20' : 'white',
                      padding: '1px 8px',
                      borderRadius: '4px',
                      margin: '0 3px',
                      fontSize: '12px',
                      transition: 'all 0.3s ease'
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
        <div className="main-header" >
          <Container fluid className="main-header-container">
            <Row className="align-items-center">
              {/* Logo - Center */}
              <Col xs={12} className="text-center">
                <Link to="/" className="d-inline-block">
                  <img src="/assets/images/logo-beyaz.png" alt="logo" style={{ maxHeight: '90px' }} />
                </Link>
              </Col>
            </Row>

            {/* Navigation Menu */}
            <Navbar 
              expand="lg" 
              expanded={expanded} 
              onToggle={toggleNav}
              className="main-nav py-2 px-0"
              bg="transparent"
              style={{ '--bs-navbar-toggler-bg': 'transparent' }}
            >
              <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 text-white" />
              <Navbar.Collapse 
                id="basic-navbar-nav" 
                className=" text-center"
              >
                <Nav className="mx-auto">
                  <Nav.Link as={Link} to="/" onClick={handleClick} className="text-white me-4">Anasayfa</Nav.Link>
                  <Nav.Link as={Link} to="/about" onClick={handleClick} className="text-white me-4">Hakkımızda</Nav.Link>
                  <NavDropdown 
                    title="Ürünlerimiz" 
                    id="deals-dropdown"
                    className="text-white me-4 custom-dropdown"
                    titleClassName="text-white"
                  >
                    <NavDropdown.Item as={Link} to="/products/1" className="text-white">Ürün 1</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/products/2" className="text-white">Ürün 2</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/products/3" className="text-white">Ürün 3</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={Link} to="/ProductSimilarGida" onClick={handleClick} className="text-white me-4">
                    Koltuk Takımı
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Bella" onClick={handleClick} className="text-white me-4">
                    Köşe Takımı
                  </Nav.Link>
                  <Nav.Link as={Link} to="/reservation" onClick={handleClick} className="text-white me-4">
                    Yatak Odası
                  </Nav.Link>
                  <Nav.Link as={Link} to="/reservation" onClick={handleClick} className="text-white me-4">
                    Masa Takımları
                  </Nav.Link>
                  <Nav.Link as={Link} to="/reservation" onClick={handleClick} className="text-white me-4">
                    Sehpalar
                  </Nav.Link>
                  <Nav.Link as={Link} to="/reservation" onClick={handleClick} className="text-white me-4">
                    Tv Ünitesi
                  </Nav.Link>
                  <Nav.Link as={Link} to="/contact" onClick={handleClick} className="text-white me-4">İletişim</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Container>
        </div>
      </header>
      {/* Responsive CSS */} 
      <style>{`
        .navbar-collapse .custom-dropdown .dropdown-menu {
          background-color: #231f20 !important;
        }
        .navbar-collapse .custom-dropdown .dropdown-menu .dropdown-item {
          color: white !important;
        }
        .navbar-collapse .custom-dropdown .dropdown-toggle {
          color: white !important;
        }
        .navbar-collapse .custom-dropdown .dropdown-toggle::after {
          color: white !important;
          border-top-color: white !important;
        }
        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
        }
        .navbar-toggler {
          border-color: rgba(255, 255, 255, 0.5) !important;
          margin: 0 auto !important;
          display: block;
        }
        
        /* Social Icon Button Styles (like Language Buttons) */
        .social-icon-button {
          border: 1px solid white;
          color: white;
          padding: 3px 8px; /* Adjust padding as needed */
          border-radius: 4px;
          transition: all 0.3s ease;
          text-decoration: none; /* Remove underline */
          display: inline-flex; /* Align icon and text if any */
          align-items: center;
          justify-content: center;
        }
        .social-icon-button:hover {
          background-color: white;
          color: #231f20;
        }
        
        /* Diğer responsive CSS kuralları burada kalacak */

        /* Örneğin, ürün listeleme sayfası için responsive CSS (önceki konuşmalardan) */
         .content {
             overflow-wrap: break-word;
             word-wrap: break-word;
             word-break: break-word;
         }
         .product-info,
         .product-title,
         .product-list,
         .product-description,
         .product-button {
              overflow-wrap: break-word;
              word-wrap: break-word;
              word-break: break-word;
         }

         .product-title {
           font-size: 1rem; /* Mobil boyut biraz küçültüldü */
         }
         .product-list,
         .product-description,
         .product-info {
           font-size: 0.85rem; /* Mobil boyut biraz küçültüldü */
         }
         .product-button {
             font-size: 0.85rem; /* Mobil boyut biraz küçültüldü */
             padding: 0.4rem 0.8rem; /* Mobil padding ayarlandı */
         }

         /* Small devices (>=576px) */
         @media (min-width: 576px) {
           .product-title {
             font-size: 1.1rem;
           }
           .product-list,
           .product-description,
           .product-info {
             font-size: 0.9rem;
           }
            .product-button {
             font-size: 0.9rem;
             padding: 0.5rem 1rem;
            }
         }

         /* Medium devices (>=768px) */
         @media (min-width: 768px) {
           .product-title {
             font-size: 1.2rem;
           }
            .product-list,
           .product-description,
           .product-info {
             font-size: 0.9rem;
           }
            .product-button {
             font-size: 0.9rem;
             padding: 0.5rem 1rem;
            }
         }

         /* Large devices (>=992px) */
         @media (min-width: 992px) {
           .product-title {
             font-size: 1.3rem;
           }
            .product-list,
           .product-description,
           .product-info {
             font-size: 1rem;
           }
            .product-button {
             font-size: 1rem;
             padding: 0.6rem 1.2rem;
            }
         }

         /* Extra large devices (>=1200px) */
         @media (min-width: 1200px) {
           .product-title {
             font-size: 1.4rem;
           }
            .product-list,
           .product-description,
           .product-info {
             font-size: 1rem;
           }
            .product-button {
             font-size: 1rem;
             padding: 0.6rem 1.2rem;
            }
         }

         @media (max-width: 992px) {
           .navbar-toggler {
             display: block !important;
             margin: 0 auto !important;
             border: 1px solid rgba(255, 255, 255, 0.5) !important;
             padding: 4px 8px !important;
             z-index: 1001;
           }

           .navbar-toggler-icon {
             background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
             width: 1.5em !important;
             height: 1.5em !important;
           }

           .navbar-collapse {
             position: fixed;
             top: 180px;
             left: -100%;
             width: 100%;
             height: calc(100vh - 90px);
             background-color: #231f20;
             transition: left 0.3s ease-in-out;
             z-index: 1000;
             overflow-y: auto;
           }

           .navbar-collapse.show {
             left: 0;
           }

           .navbar-collapse.show::before {
              content: '';
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: rgba(0, 0, 0, 0.5);
              z-index: -1;
            }

           .navbar-collapse .nav {
             flex-direction: column;
             width: 100%;
             padding-top: 20px;
           }

           .navbar-collapse .nav-item {
             width: 100%;
             border-bottom: 1px solid rgba(255, 255, 255, 0.1);
           }

           .navbar-collapse .nav-link,
           .navbar-collapse .dropdown-toggle {
             padding: 15px 20px !important;
             color: white !important;
             text-align: center !important;
           }

           .navbar-collapse .nav-link:hover,
           .navbar-collapse .dropdown-toggle:hover {
             background: rgba(255, 255, 255, 0.77);
           }

           .navbar-collapse .dropdown-menu {
             position: static !important;
             float: none;
             width: 100%;
             margin-top: 0;
             background-color: rgba(0, 0, 0, 0.2);
             border: none;
             border-radius: 0;
           }

           .navbar-collapse .dropdown-item {
              padding: 10px 30px !important;
              color: white !important;
              text-align: center !important;
           }

           .navbar-collapse .dropdown-item:hover {
              background: rgba(255, 255, 255, 0.05);
           }

         }
      `}</style>
    </>
  );
}

export default Header;