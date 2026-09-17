import React from "react";

const ProductTitleVideo = (props) => {
  const { title, video } = props;
  
  return (
    <>
      <div class="product-details__top">
        <div class="product-details__top__left">
          <h3 class="product-details__name">{title}</h3>
        </div>
        <a href={video} class="product-details__video video-button video-popup">
          <span class="icon-play"></span>
          <i class="video-button__ripple"></i>
        </a>
      </div>
      <div class="product-details__review">
        <div class="boskery-ratings">
          <span class="icon-star"></span>
          <span class="icon-star"></span>
          <span class="icon-star"></span>
          <span class="icon-star"></span>
          <span class="icon-star"></span>
        </div>
      </div>
    </>
  );
};

export default ProductTitleVideo;
