import React from "react";
import Product from "../Components/product/Product";
import { useTranslation } from "react-i18next";
import ProductPageHeader from "../Components/product/ProductPageHeader";

function ProductPage() {
  const { i18n } = useTranslation();
  const title = i18n.language === "en" ? "License Classes" : "Ehliyet Sınıflarımız";

  return (
    <>
      <ProductPageHeader title={title} />
      <Product />
    </>
  );
}

export default ProductPage;
