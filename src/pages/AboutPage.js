import React from "react";
import About from "../Components/about/About";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";

function AboutPage() {
  const { i18n } = useTranslation();
  const title = i18n.language === "en" ? "About Us" : "Hakkımızda";

  return (
    <>
      <PageHeader title={title} />
      <About />
    </>
  );
}

export default AboutPage;
