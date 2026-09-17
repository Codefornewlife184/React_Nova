import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { getLocalizedPath } from "../../utils/siteRoutes";

const Footer = () => {
  const { i18n } = useTranslation();
  const language = i18n.language === "en" ? "en" : "tr";
  const phoneNumber = "905306226596";

  const content =
    language === "en"
      ? {
          contactTitle: "Contact Information",
          quickLinksTitle: "Quick Links",
          infoLinksTitle: "Information",
          galleryTitle: "License Guides",
          addressLabel: "Address",
          phoneLabel: "Phone",
          emailLabel: "Email",
          copyright: "All Rights Reserved.",
          designBy: "Web Design",
          links: [
            { label: "Home", to: getLocalizedPath("home", language) },
            { label: "About Us", to: getLocalizedPath("about", language) },
            { label: "Contact", to: getLocalizedPath("contact", language) },
            {
              label: "License Classes",
              to: getLocalizedPath("product", language),
            },
          ],
          infoLinks: [
            {
              label: "Registration Documents",
              to: getLocalizedPath("registration", language),
            },
            { label: "FAQ", to: getLocalizedPath("faq", language) },
            {
              label: "Useful Links",
              to: getLocalizedPath("usefulLinks", language),
            },
            {
              label: "Our Vehicles",
              to: getLocalizedPath("vehicles", language),
            },
          ],
          gallery: [
            {
              label: "A1 License",
              to: getLocalizedPath("a1", language),
              image: "/assets/images/A1.webp",
            },
            {
              label: "A2 Automatic",
              to: getLocalizedPath("a2", language),
              image: "/assets/images/A2.webp",
            },
            {
              label: "A2 Manual",
              to: getLocalizedPath("a2Manual", language),
              image: "/assets/images/A2.webp",
            },
            {
              label: "B Manual",
              to: getLocalizedPath("bManual", language),
              image: "/assets/images/B-Manuel.webp",
            },
            {
              label: "B Automatic",
              to: getLocalizedPath("bAutomatic", language),
              image: "/assets/images/B-Otomatik.webp",
            },
          ],
        }
      : {
          contactTitle: "İletişim Bilgileri",
          quickLinksTitle: "Hızlı Linkler",
          infoLinksTitle: "Bilgilendirme",
          galleryTitle: "Ehliyet Rehberleri",
          addressLabel: "Adres",
          phoneLabel: "Telefon",
          emailLabel: "E-posta",
          copyright: "Tüm Hakları Saklıdır.",
          designBy: "Web Tasarım",
          links: [
            { label: "Anasayfa", to: getLocalizedPath("home", language) },
            { label: "Hakkımızda", to: getLocalizedPath("about", language) },
            { label: "İletişim", to: getLocalizedPath("contact", language) },
            {
              label: "Ehliyet Sınıflarımız",
              to: getLocalizedPath("product", language),
            },
          ],
          infoLinks: [
            {
              label: "Kayıt İçin Gerekli Belgeler",
              to: getLocalizedPath("registration", language),
            },
            {
              label: "Sıkça Sorulan Sorular",
              to: getLocalizedPath("faq", language),
            },
            {
              label: "Faydalı Linkler",
              to: getLocalizedPath("usefulLinks", language),
            },
            {
              label: "Araçlarımız",
              to: getLocalizedPath("vehicles", language),
            },
          ],
          gallery: [
            {
              label: "A1 Ehliyet",
              to: getLocalizedPath("a1", language),
              image: "/assets/images/A1.webp",
            },
            {
              label: "A2 Otomatik",
              to: getLocalizedPath("a2", language),
              image: "/assets/images/A2.webp",
            },
            {
              label: "A2 Manuel",
              to: getLocalizedPath("a2Manual", language),
              image: "/assets/images/A2.webp",
            },
            {
              label: "B Manuel",
              to: getLocalizedPath("bManual", language),
              image: "/assets/images/B-Manuel.webp",
            },
            {
              label: "B Otomatik",
              to: getLocalizedPath("bAutomatic", language),
              image: "/assets/images/B-Otomatik.webp",
            },
          ],
        };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const openWhatsApp = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      language === "en"
        ? "Hello, I would like to get information about your driving school."
        : "Merhaba, sürücü kursu hakkında bilgi almak istiyorum.",
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      <style>{`
        .footer .btn.btn-link {
          display: block;
          margin-bottom: 8px;
          padding: 0;
          text-align: left;
          color: #fdf5eb;
          font-weight: 400;
          text-transform: capitalize;
          transition: 0.3s;
          text-decoration: none;
          box-shadow: none;
        }

        .footer .btn.btn-link::before {
          position: relative;
          content: "\\f105";
          font-family: "Font Awesome 5 Free";
          font-weight: 900;
          color: #fdf5eb;
          margin-right: 10px;
        }

        .footer .btn.btn-link:hover,
        .footer .btn.btn-link:focus,
        .footer .btn.btn-link:active {
          color: #beab74;
          letter-spacing: 1px;
          box-shadow: none;
          text-decoration: none;
        }

        .footer-contact-link {
          color: #fdf5eb;
          text-decoration: none;
        }

        .footer-contact-link:hover,
        .footer-contact-link:focus {
          color: #beab74;
          text-decoration: none;
        }

        .footer-guide-card {
          display: block;
          border-radius: 14px;
          overflow: hidden;
          text-decoration: none;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-guide-card span {
          display: block;
          padding: 10px 12px;
          color: #fdf5eb;
          font-size: 0.9rem;
          text-align: center;
        }

        .copyright {
          background: #111111;
        }

        .copyright a {
          color: #fdf5eb;
          text-decoration: none;
        }

        .copyright a:hover,
        .copyright a:focus,
        .copyright a:active {
          color: #beab74;
          text-decoration: none;
        }
      `}</style>

      <div
        className="container-fluid text-light footer my-6 mb-0 py-5 wow fadeIn"
        style={{ backgroundColor: "#231f20" }}
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">{content.contactTitle}</h4>
              <p className="text-light mb-3">
                <i className="fa fa-map-marker-alt me-3"></i>
                <strong>{content.addressLabel} : </strong>
                Arnavutköy Merkez, Eski Edirne Cd. No : 1197 Kat : 1 İç
                Kapı No : 9 <br /> Posta Kodu: 34275 <br />Arnavutköy / İstanbul
              </p>
              <p className="text-light mb-3">
                <i className="fa fa-phone-alt me-3"></i>
                <a href="tel:+905306226596" className="footer-contact-link">
                  <strong>{content.phoneLabel} : </strong> +90 530 622 6596
                </a>
              </p>
              <p className="text-light mb-3">
                <i className="fa fa-envelope me-3"></i>
                <a
                  href="mailto:info@ozelnovasurucukursu.com"
                  className="footer-contact-link"
                >
                  <strong>{content.emailLabel} : </strong>
                  info@ozelnovasurucukursu.com
                </a>
              </p>
              <div className="d-flex pt-2">
                <a
                  className="btn btn-square btn-outline-light rounded-circle me-2"
                  href="https://www.facebook.com/people/Nova-S%C3%BCr%C3%BCc%C3%BC-Kursu/61592311904189/?ref=PROFILE_EDIT_xav_ig_profile_page_web#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-square btn-outline-light rounded-circle me-2"
                  href="https://www.instagram.com/novaarnavutkoy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <h4 className="text-light mb-4">{content.quickLinksTitle}</h4>
              {content.links.map((item) => (
                <Link
                  key={item.label}
                  className="btn btn-link"
                  to={item.to}
                  onClick={scrollToTop}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">{content.infoLinksTitle}</h4>
              {content.infoLinks.map((item) => (
                <Link
                  key={item.label}
                  className="btn btn-link"
                  to={item.to}
                  onClick={scrollToTop}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="col-lg-4 col-md-6">
              <h4 className="text-light mb-4">{content.galleryTitle}</h4>
              <div className="row g-3">
                {content.gallery.map((item) => (
                  <div className="col-4" key={item.label}>
                    <Link
                      className="footer-guide-card"
                      to={item.to}
                      onClick={scrollToTop}
                    >
                      <img
                        className="img-fluid"
                        src={item.image}
                        alt={item.label}
                      />
                      <span>{item.label}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid copyright text-light py-4 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container mb-3 mt-2">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; 2026{" "}
              <Link
                to={getLocalizedPath("home", language)}
                style={{ color: "#beab74" }}
              >
                Özel Nova Sürücü Kursu
              </Link>{" "}
              | {content.copyright}
            </div>
            <div className="col-md-6 text-center text-md-end">
              {content.designBy} :{" "}
              <a
                href="https://webcenter.com.tr/"
                style={{ color: "#beab74" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Web Center
              </a>
            </div>
          </div>
        </div>
      </div>

      <Link
        to="#"
        className="back d-flex align-items-center justify-content-center active"
        onClick={scrollToTop}
      >
        <i className="fas fa-arrow-up"></i>
        <svg
          className="whatsapp-button__circle"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
        </svg>
      </Link>

      <Link
        to="#"
        className="whatsapp-button"
        onClick={openWhatsApp}
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
        <svg
          className="whatsapp-button__circle"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
        </svg>
      </Link>
    </>
  );
};

export default Footer;
