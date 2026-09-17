/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

function Aboutus() {
  const { t } = useTranslation();

  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
    setExpanded(false);
  };

  const openVideoPopup = () => {
    const content = (
      <div>
        <iframe
          width="100%"
          height= "250"
          src="https://www.youtube.com/embed/Ft1jRmswJ_s"
          title="Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    );

    PopupboxManager.open({ content });
  };

  const popupboxConfig = {
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <section className="about-one section-space-top mt-5" id="about">
      <div className="container">
        <div className="row gutter-y-60">
          <div className="col-lg-6 wow fadeInLeft" data-wow-duration="1500ms">
            <div className="about-one__image">
              <div className="about-one__image__inner">
                <h3 className="about-one__image__text"></h3>
                <img src="assets/images/cities-01.jpg" alt="about image" />
                <Link
                  to="#"
                  className="video-button video-popup"
                  onClick={openVideoPopup}
                >
                  <span className="icon-play"></span>
                  <i className="video-button__ripple"></i>
                </Link>
                <div className="about-one__image__border"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInRight" data-wow-duration="1500ms">
            <div className="about-one__content">
              <div className="sec-title @@extraClassName">
                <img
                  src="assets/images/favicons/favicon-32x32.png"
                  alt="about boskery meat shop"
                  className="sec-title__img"
                />

                <h6 className="sec-title__tagline">İndizayn matbaa</h6>

                <h2 className="sec-title__title">hakkımızda</h2>
              </div>
              <p className="about-one__text">
                İndizayn Matbaa 23 yılı aşkın süredir matbaa sektöründe öncü
                olan firmalardan biridir. <br />
                Yıllar geçtikçe müşteri memnuniyeti bizi farklı matbaa işlerini
                de yapmaya yöneltti.
                <br />
                Müşterilerimizin memnuniyetini bir adım ileri taşıdık ve Karton
                Kutu, Mukavva Kutu, Broşür, Katalog, Kartvizit, Ambalaj Ürünleri
                gibi birçok matbaa ürününde de bu kulvardaki öncü firmalardan
                biri haline geldik.
              </p>
              <div className="about-one__inner">
                <h5 className="about-one__info-title">
                  Matbaa Alanında Lider firmayız
                </h5>
                <ul className="about-one__info">
                  <li>
                    <span className="icon-check-mark"></span>
                    Kaliteli ve Güvenilir Hizmet
                  </li>
                  <li>
                    <span className="icon-check-mark"></span>
                    Zamanında Teslimat
                  </li>
                  <li>
                    <span className="icon-check-mark"></span>
                    yenilikçi Hizmetler
                  </li>
                </ul>
              </div>
              <div className="about-one__bottom">
                <a href="contact.html" className="boskery-btn">
                  <span className="boskery-btn__hover"></span>
                  <span className="boskery-btn__hover"></span>
                  <span className="boskery-btn__hover"></span>
                  <span className="boskery-btn__hover"></span>
                  <span className="boskery-btn__hover"></span>
                  <span className="boskery-btn__hover"></span>
                  <span className="boskery-btn__text">
                    daha fazla detay için tıklayınız !!!
                  </span>
                </a>
                <div className="contact__info">
                  <div className="contact__info__inner">
                    <div className="contact__info__icon">
                      <span className="icon-telephone"></span>
                    </div>
                    <div className="contact__info__right">
                      <h4 className="contact__info__title">
                        TESLİMAT İÇİN ARAYIN
                      </h4>
                      <a
                        href="tel:+2243601166"
                        className="contact__info__number"
                      >
                        (0224) 360 1166
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PopupboxContainer {...popupboxConfig} />
    </section>
  );
}

export default Aboutus;
