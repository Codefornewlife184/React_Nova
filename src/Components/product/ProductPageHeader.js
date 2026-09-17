import React from "react";

const ProductPageHeader = (props) => {
  return (
    <>
      <div className="page-heading product-page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>{props.title}</h2>
            </div>
          </div>
        </div>
      </div>
      <style>{`
    .product-page-heading {
      position: relative;
      width: 100vw;
      margin-left: calc(50% - 50vw);
      margin-right: calc(50% - 50vw);
      padding: 290px 0 100px 0;
      background-position: center center;
      background-size: cover;
      background-repeat: no-repeat;
      overflow: hidden;
      margin-bottom: 100px;
    }

    .product-page-heading::before {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(
        180deg,
        rgba(35, 31, 32, 0.32) 0%,
        rgba(35, 31, 32, 0.22) 45%,
        rgba(35, 31, 32, 0.4) 100%
      );
      z-index: 0;
    }

    .product-page-heading .container,
    .product-page-heading .row,
    .product-page-heading .col-lg-12,
    .product-page-heading h2 {
      position: relative;
      z-index: 1;
    }

    .product-page-heading h4 {
      margin-bottom: 12px;
      font-size: 1rem;
    }

    .product-page-heading h2 {
      margin-bottom: 18px;
      font-size: 2.8rem;
    }

    .product-page-heading .border-button a {
      padding: 10px 26px;
    }

    @media (max-width: 992px) {
      .product-page-heading {
        padding: 205px 0 82px 0;
      }

      .product-page-heading h2 {
        font-size: 2.4rem;
      }
    }

    @media (max-width: 768px) {
      .product-page-heading {
        padding: 195px 0 68px 0;
      }

      .product-page-heading h2 {
        font-size: 1.9rem;
      }
    }
  `}</style>
    </>
  );
};

export default ProductPageHeader;
