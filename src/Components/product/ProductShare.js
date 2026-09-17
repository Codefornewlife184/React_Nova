import { t } from "i18next";
import React from "react";

const ProductShare = () => {
  return (
    <>
      <div class="product-details__socials">
        <h3 class="product-details__socials__title">{t("Paylaş")} :</h3>
        <div class="boskery-social">
          <a href="../index-3.htm">
            <i class="fab fa-facebook-f" aria-hidden="true"></i>
            <span class="sr-only">Facebook</span>
          </a>
          <a href="https://twitter.com">
            <i class="fab fa-twitter" aria-hidden="true"></i>
            <span class="sr-only">Twitter</span>
          </a>
          <a href="../index-6.htm">
            <i class="fab fa-linkedin-in" aria-hidden="true"></i>
            <span class="sr-only">Linkedin</span>
          </a>
          <a href="../index-7.htm" aria-hidden="true">
            <i class="fab fa-youtube"></i>
            <span class="sr-only">Youtube</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductShare;
