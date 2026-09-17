/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Contact from "../Components/contact/Contact";
import Slider2 from "../Components/common/Slider2";
import Product from "../Components/product/Product";
import About from "../Components/about/About";
import Spacer2 from "../Components/common/Spacer2";
import RegistrationDocumentsPage from "./RegistrationDocumentsPage";
import DrivingFaqPage from "./DrivingFaqPage";
import UsefulLinksPage from "./UsefulLinksPage";

function HomePage() {
  return (
    <>
      <Slider2 />
      <Spacer2 size={8} />
      <About />
      <Product />
      <div>
        <img
          src="../assets/images/banner.webp"
          alt="İletişim Banner"
          style={{
            width: "100%",
            maxHeight: "550px",
            height: "auto",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>
      <RegistrationDocumentsPage showPageHeader={false} />
      <DrivingFaqPage showPageHeader={false} />
      <UsefulLinksPage showPageHeader={false} />
      <div>
        <img
          src="../assets/images/contact/13.webp"
          alt="İletişim Banner"
          style={{
            width: "100%",
            maxHeight: "450px",
            height: "auto",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>
      <Contact />
    </>
  );
}

export default HomePage;
