import React from "react";
import ProductDetails from "../Components/product/ProductDetails";
import PageHeader from "../Components/common/PageHeader";
import { t } from "i18next";

function ProductDetailsPage() {
  return (
    <>
    <PageHeader title={t("Matbaa")} />
      <ProductDetails />  
    </>
  );
}

export default ProductDetailsPage;
