/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";
import "swiper/css";
import ReactOwlCarousel from "react-owl-carousel";

function ProductCarousel() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <SRLWrapper>
        <ReactOwlCarousel
          className="owl-carousel dots-rounded dots-outside nav-rounded nav-outside margin-top-30 margin-bottom-30"
          items={1}
          margin={20}
          nav
          dots={false}
        >
          <div className="album-list-item">
            <Link
              className="ali-link"
              onClick={handleClick}
              as={Link}
              to="/Armur"
            >
              <div className="ali-img-wrap">
                <div>
                  <img
                    className="img-fluid blur-up lazyload"
                    src="assets/images/1.png"
                    alt="image"
                    title="image"
                  />
                </div>
              </div>
            </Link>
          </div>

          <div className="">
            <Link
              className="ali-link"
              onClick={handleClick}
              as={Link}
              to="/Fonluk"
            >
              <div className="ali-img-wrap">
                <div>
                  <img
                    className="img-fluid blur-up lazyload"
                    src="assets/images/2.png"
                    alt="image"
                    title="image"
                  />
                </div>
              </div>
            </Link>
          </div>

          <div className="album-list-item">
            <Link
              className="ali-link"
              onClick={handleClick}
              as={Link}
              to="/Brode"
            >
              <div className="ali-img-wrap">
                <div>
                  <img
                    className="img-fluid blur-up lazyload"
                    src="assets/images/3.png"
                    alt="image"
                    title="image"
                  />
                </div>
              </div>
            </Link>
          </div>
        </ReactOwlCarousel>
      </SRLWrapper>
    </>
  );
}

export default ProductCarousel;
