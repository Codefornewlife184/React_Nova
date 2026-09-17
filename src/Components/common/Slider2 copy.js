/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
// SliderComponent.js

import React from "react";
import { Carousel, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const openVideoPopup = () => {
  const content = (
    <div>
      <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/Ft1jRmswJ_s"
        title="Boskery Meat Shop Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );

  PopupboxManager.open({ content });
};

const popupboxConfig = {
  fadeIn: true,
  fadeInSpeed: 1000,
};

const Slider2 = () => {
  return (
    <Container fluid>
      <Carousel className="mt--120">
        <Carousel.Item>
          {/* Videoyu eklemek için video etiketini kullanabilirsiniz */}
          <video className="d-block w-100 resimSlider" autoPlay muted loop>
            <source src="/assets/İndizayn Map.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="assets/images/slider-4.jpg"
            className="d-block w-100 resimSlider"
            alt="Slide 3"
          />
          {/* <Carousel.Caption>
            <h3>Third Slide</h3>
            <p>This is the third slide with an image.</p>
          </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="assets/images/slider-5.jpg"
            className="d-block w-100 resimSlider"
            alt="Slide 3"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Slider2;
