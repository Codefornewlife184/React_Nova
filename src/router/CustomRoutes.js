import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import AboutusPage from "../pages/AboutusPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import QuestionPage from "../pages/QuestionPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import ProductSimilarPage from "../pages/ProductSimilarPage";
import ContactusPage from "../pages/ContactusPage";
import ProductSimilarGidaPage from "../pages/ProductSimilarGidaPage";
import SidebarPage from "../pages/SidebarPage";
import A1LicensePage from "../pages/A1LicensePage";
import A2LicensePage from "../pages/A2LicensePage";
import A2ManualLicensePage from "../pages/A2ManualLicensePage";
import BManualLicensePage from "../pages/BManualLicensePage";
import BAutomaticLicensePage from "../pages/BAutomaticLicensePage";
import RegistrationDocumentsPage from "../pages/RegistrationDocumentsPage";
import DrivingFaqPage from "../pages/DrivingFaqPage";
import VehiclesPage from "../pages/VehiclesPage";
import UsefulLinksPage from "../pages/UsefulLinksPage";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/faydali-linkler" element={<UsefulLinksPage />} />
      <Route path="/useful-links" element={<UsefulLinksPage />} />
      <Route path="/a1-ehliyet" element={<A1LicensePage />} />
      <Route path="/a1-ehliyet-rehberi" element={<A1LicensePage />} />
      <Route path="/a1-license" element={<A1LicensePage />} />
      <Route path="/a2-ehliyet" element={<A2LicensePage />} />
      <Route path="/a2-ehliyet-rehberi" element={<A2LicensePage />} />
      <Route path="/a2-license" element={<A2LicensePage />} />
      <Route path="/a2-manuel" element={<A2ManualLicensePage />} />
      <Route path="/a2-manuel-ehliyet-rehberi" element={<A2ManualLicensePage />} />
      <Route path="/manual-a2-license" element={<A2ManualLicensePage />} />
      <Route path="/b-manuel" element={<BManualLicensePage />} />
      <Route path="/b-manuel-ehliyet-rehberi" element={<BManualLicensePage />} />
      <Route path="/manual-b-license" element={<BManualLicensePage />} />
      <Route path="/b-otomatik" element={<BAutomaticLicensePage />} />
      <Route path="/b-otomatik-ehliyet-rehberi" element={<BAutomaticLicensePage />} />
      <Route path="/automatic-b-license" element={<BAutomaticLicensePage />} />
      <Route exact path="/Sidebar" element={<SidebarPage />} />
      
      <Route path="/Contactus" element={<ContactusPage />} />

      <Route
        exact
        path="/ProductSimilarGida"
        element={<ProductSimilarGidaPage />}
      />
      <Route exact path="/ProductSimilar" element={<ProductSimilarPage />} />
      <Route exact path="/ProductDetails" element={<ProductDetailsPage />} />
      <Route exact path="/Question" element={<QuestionPage />} />
      <Route path="/kayit-belgeleri" element={<RegistrationDocumentsPage />} />
      <Route path="/registration-documents" element={<RegistrationDocumentsPage />} />
      <Route path="/sss" element={<DrivingFaqPage />} />
      <Route path="/faq" element={<DrivingFaqPage />} />
      <Route path="/araclarimiz" element={<VehiclesPage />} />
      <Route path="/vehicles" element={<VehiclesPage />} />
      {/* <Route exact path="/TopBar" element={<TopBarPage />} /> */}
      <Route exact path="/ehliyet-siniflarimiz" element={<ProductPage />} />
      <Route exact path="/license-classes" element={<ProductPage />} />
      <Route path="/iletisim" element={<ContactPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/Aboutus" element={<AboutusPage />} />
      <Route path="/hakkimizda" element={<AboutPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default CustomRoutes;
