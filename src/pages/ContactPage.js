import React from "react";
import Contact from "../Components/contact/Contact";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";

function ContactPage() {
  const { i18n } = useTranslation();
  const title = i18n.language === "en" ? "Contact" : "İletişim";

  return (
    <>
      <PageHeader
        title={title}
        backgroundImage="/assets/images/contact/13.webp"
        backgroundPosition="center center"
        className="page-header--contact"
      />
      <Contact />  
    </>
  );
}

export default ContactPage;
