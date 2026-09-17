/* eslint-disable no-unused-vars */
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";

function ProductOne(props) {
  const { t } = useTranslation();
  const { picture, title, price, nav } = props;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const options = {
    settings: {
      overlayColor: "rgba(0, 0, 0, 0.9)",
      autoplaySpeed: 3000,
      transitionSpeed: 1000,
      disablePanzoom: false,
      closeButton: true, // Kapatma düğmesini göster
    },
    buttons: {
      showDownloadButton: false,
      showThumbnailsButton: false,
    },
  };

  return (
    <>
      <SRLWrapper options={options}>
        <div
          class="product__item wow fadeInUp"
          data-wow-duration="1500ms"
          data-wow-delay="00ms"
        >
          <div class="product__item__image">
            <img src={picture} alt={title} />
          </div>
          <div class="product__item__content">
            <div class="boskery-ratings">
              <span class="icon-star"></span>
              <span class="icon-star"></span>
              <span class="icon-star"></span>
              <span class="icon-star"></span>
              <span class="icon-star"></span>
            </div>
            <h4 class="product__item__title">
              <Link as={Link} to={nav} onClick={scrollToTop}>
                {t(title)}
              </Link>
            </h4>
            <a href="cart.html" class="boskery-btn">
              <span class="boskery-btn__hover"></span>
              <span class="boskery-btn__hover"></span>
              <span class="boskery-btn__hover"></span>
              <span class="boskery-btn__hover"></span>
              <span class="boskery-btn__hover"></span>
              <span class="boskery-btn__hover"></span>
              <span class="boskery-btn__text">{t(price)}</span>
            </a>
          </div>
        </div>
      </SRLWrapper>
    </>
  );
}

export default ProductOne;
