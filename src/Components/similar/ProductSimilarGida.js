import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SRLWrapper } from 'simple-react-lightbox';

const ProductSimilarGida = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <SRLWrapper>
      <div className="weekly-offers py-5">
        <Container>
          <Row>
            <Col lg={6} className="offset-lg-3">
              <div className="section-heading text-center">
                <h2>Best Weekly Offers In Each City</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row className="g-4">
            <Col lg={4} md={4} sm={6} xs={12}>
              <div className="item">
                <div className="thumb">
                  <Link to="/reservation" onClick={scrollToTop}>
                    <img src="assets/images/casa-1.webp" alt="" />
                  </Link>
                  <div className="text">
                    <h4>Havana<br /><span><i className="fa fa-users"></i> 234 Check Ins</span></h4>
                    <h6>$420<br /><span>/person</span></h6>
                    <div className="line-dec"></div>
                    <ul>
                      <li>Deal Includes:</li>
                      <li><i className="fa fa-taxi"></i> 5 Days Trip &gt; Hotel Included</li>
                      <li><i className="fa fa-plane"></i> Airplane Bill Included</li>
                      <li><i className="fa fa-building"></i> Daily Places Visit</li>
                    </ul>
                    <div className="main-button">
                      <Link to="/reservation" onClick={scrollToTop}>Make a Reservation</Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={4} sm={6} xs={12}>
              <div className="item">
                <div className="thumb">
                  <Link to="/reservation" onClick={scrollToTop}>
                    <img src="assets/images/offers-02.jpg" alt="" />
                  </Link>
                  <div className="text">
                    <h4>Kingston<br /><span><i className="fa fa-users"></i> 234 Check Ins</span></h4>
                    <h6>$420<br /><span>/person</span></h6>
                    <div className="line-dec"></div>
                    <ul>
                      <li>Deal Includes:</li>
                      <li><i className="fa fa-taxi"></i> 5 Days Trip &gt; Hotel Included</li>
                      <li><i className="fa fa-plane"></i> Airplane Bill Included</li>
                      <li><i className="fa fa-building"></i> Daily Places Visit</li>
                    </ul>
                    <div className="main-button">
                      <Link to="/reservation" onClick={scrollToTop}>Make a Reservation</Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={4} sm={6} xs={12}>
              <div className="item">
                <div className="thumb">
                  <Link to="/reservation" onClick={scrollToTop}>
                    <img src="assets/images/offers-03.jpg" alt="" />
                  </Link>
                  <div className="text">
                    <h4>George Town<br /><span><i className="fa fa-users"></i> 234 Check Ins</span></h4>
                    <h6>$420<br /><span>/person</span></h6>
                    <div className="line-dec"></div>
                    <ul>
                      <li>Deal Includes:</li>
                      <li><i className="fa fa-taxi"></i> 5 Days Trip &gt; Hotel Included</li>
                      <li><i className="fa fa-plane"></i> Airplane Bill Included</li>
                      <li><i className="fa fa-building"></i> Daily Places Visit</li>
                    </ul>
                    <div className="main-button">
                      <Link to="/reservation" onClick={scrollToTop}>Make a Reservation</Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={4} sm={6} xs={12}>
              <div className="item">
                <div className="thumb">
                  <Link to="/reservation" onClick={scrollToTop}>
                    <img src="assets/images/offers-01.jpg" alt="" />
                  </Link>
                  <div className="text">
                    <h4>Havana<br /><span><i className="fa fa-users"></i> 234 Check Ins</span></h4>
                    <h6>$420<br /><span>/person</span></h6>
                    <div className="line-dec"></div>
                    <ul>
                      <li>Deal Includes:</li>
                      <li><i className="fa fa-taxi"></i> 5 Days Trip &gt; Hotel Included</li>
                      <li><i className="fa fa-plane"></i> Airplane Bill Included</li>
                      <li><i className="fa fa-building"></i> Daily Places Visit</li>
                    </ul>
                    <div className="main-button">
                      <Link to="/reservation" onClick={scrollToTop}>Make a Reservation</Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={4} sm={6} xs={12}>
              <div className="item">
                <div className="thumb">
                  <Link to="/reservation" onClick={scrollToTop}>
                    <img src="assets/images/offers-02.jpg" alt="" />
                  </Link>
                  <div className="text">
                    <h4>Kingston<br /><span><i className="fa fa-users"></i> 234 Check Ins</span></h4>
                    <h6>$420<br /><span>/person</span></h6>
                    <div className="line-dec"></div>
                    <ul>
                      <li>Deal Includes:</li>
                      <li><i className="fa fa-taxi"></i> 5 Days Trip &gt; Hotel Included</li>
                      <li><i className="fa fa-plane"></i> Airplane Bill Included</li>
                      <li><i className="fa fa-building"></i> Daily Places Visit</li>
                    </ul>
                    <div className="main-button">
                      <Link to="/reservation" onClick={scrollToTop}>Make a Reservation</Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={4} sm={6} xs={12}>
              <div className="item">
                <div className="thumb">
                  <Link to="/reservation" onClick={scrollToTop}>
                    <img src="assets/images/offers-03.jpg" alt="" />
                  </Link>
                  <div className="text">
                    <h4>George Town<br /><span><i className="fa fa-users"></i> 234 Check Ins</span></h4>
                    <h6>$420<br /><span>/person</span></h6>
                    <div className="line-dec"></div>
                    <ul>
                      <li>Deal Includes:</li>
                      <li><i className="fa fa-taxi"></i> 5 Days Trip &gt; Hotel Included</li>
                      <li><i className="fa fa-plane"></i> Airplane Bill Included</li>
                      <li><i className="fa fa-building"></i> Daily Places Visit</li>
                    </ul>
                    <div className="main-button">
                      <Link to="/reservation" onClick={scrollToTop}>Make a Reservation</Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </SRLWrapper>
  );
};

export default ProductSimilarGida;