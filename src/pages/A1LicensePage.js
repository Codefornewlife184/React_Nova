import React from "react";
import A1LicenseGuide from "../Components/licence/A1LicenseGuide";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";

function A1LicensePage() {
  const { i18n } = useTranslation();
  const title = i18n.language === "en" ? "A1 License Guide" : "A1 Ehliyet Rehberi";

  return (
    <>
      <PageHeader title={title} />
      <A1LicenseGuide />
    </>
  );
}

export default A1LicensePage;
