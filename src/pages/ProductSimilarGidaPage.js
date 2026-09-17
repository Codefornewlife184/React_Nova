import React from "react";
import PageHeader from "../Components/common/PageHeader";
import ProductSimilarGida from "../Components/similar/ProductSimilarGida";
import { useTranslation } from "react-i18next";

function ProductSimilarGidaPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("BENZER ÜRÜNLER")} />
      <ProductSimilarGida />
    </>
  );
}

export default ProductSimilarGidaPage;
