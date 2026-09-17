import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import ContactMap from "./ContactMap";
import ContactForm from "./ContactForm";

function Contact() {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === "en";

  const content = isEnglish
    ? {
        title: "Contact",
        introBadge: "Special Nova Driving School",
        introTitle: "We are here for your registration and driving school questions!",
        introText:
          "You can contact us for license classes, registration documents, lesson planning and current process details. We would be happy to guide you.",
        cards: [
          {
            icon: <FaPhoneAlt />,
            title: "Phone",
            text: "0530 622 6596",
            href: "tel:+905306226596",
          },
          {
            icon: <FaWhatsapp />,
            title: "WhatsApp",
            text: "0530 622 6596",
            href: "https://wa.me/905306226596?text=Hello%2C%20I%20would%20like%20to%20get%20information%20about%20your%20driving%20school.",
          },
          {
            icon: <FaEnvelope />,
            title: "Email",
            text: "info@ozelnovasurucukursu.com",
            href: "mailto:info@ozelnovasurucukursu.com",
          },
          {
            icon: <FaMapMarkerAlt />,
            title: "Address",
            text: "Arnavutköy Merkez, Eski Edirne Cd. No:1197 Kat : 1 İç Kapı No : 9 , 34275 Arnavutköy/İstanbul",
            href: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3002.9169797348454!2d28.740736792280092!3d41.179977934912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caabe85a30fc7b%3A0xda93904cc2826ce7!2sArnavutk%C3%B6y%20Merkez%2C%20Eski%20Edirne%20Cd.%20No%3A1197%2C%2034275%20Arnavutk%C3%B6y%2F%C4%B0stanbul!5e0!3m2!1sen!2str!4v1789227577095!5m2!1sen!2str"
          },
        ],
        formTitle: "Contact Form",
        mapTitle: "Location Information",
      }
    : {
        title: "İletişim",
        introBadge: "Özel Nova Sürücü Kursu",
        introTitle: "Kayıt ve Sürücü Kursu Sorularınız İçin Buradayız!",
        introText:
          "Ehliyet sınıfları, kayıt belgeleri, ders planlaması ve güncel süreç detayları için bizimle iletişime geçebilirsiniz. Size memnuniyetle yardımcı oluruz.",
        cards: [
          {
            icon: <FaPhoneAlt />,
            title: "Telefon",
            text: "0530 622 6596",
            href: "tel:+905306226596",
          },
          {
            icon: <FaWhatsapp />,
            title: "WhatsApp",
            text: "0530 622 6596",
            href: "https://wa.me/905306226596?text=Merhaba%2C%20s%C3%BCr%C3%BCc%C3%BC%20kursu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.",
          },
          {
            icon: <FaEnvelope />,
            title: "E-posta",
            text: "info@ozelnovasurucukursu.com",
            href: "mailto:info@ozelnovasurucukursu.com",
          },
          {
            icon: <FaMapMarkerAlt />,
            title: "Adres",
            text: "Arnavutköy Merkez, Eski Edirne Cd. No:1197 Kat : 1 İç Kapı No : 9 , 34275 Arnavutköy/İstanbul",
            href: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3002.9169797348454!2d28.740736792280092!3d41.179977934912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caabe85a30fc7b%3A0xda93904cc2826ce7!2sArnavutk%C3%B6y%20Merkez%2C%20Eski%20Edirne%20Cd.%20No%3A1197%2C%2034275%20Arnavutk%C3%B6y%2F%C4%B0stanbul!5e0!3m2!1sen!2str!4v1789227577095!5m2!1sen!2str"
          },
        ],
        formTitle: "İletişim Formu",
        mapTitle: "Konum Bilgisi",
      };

  return (
    <>

      <section className="contact-page-section">
        <Container>
          <div className="contact-intro-card" style={{ marginTop: "-4rem" }}>
            <span>{content.introBadge}</span>
            <h2>{content.introTitle}</h2>
            <p>{content.introText}</p>
          </div>

          <Row className="g-4 mt-1">
            {content.cards.map((item) => (
              <Col lg={3} md={6} key={item.title}>
                <a
                  className="contact-info-card h-100"
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <div className="contact-info-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </a>
              </Col>
            ))}
          </Row>

          <Row className="mt-5 mb-5">
            <Col lg={12}>
              <ContactForm />
            </Col>
          </Row>
        </Container>

        <div className="contact-map-full-section">
          <Container>
            <div className="contact-map-head contact-map-full-head">
              <span>{content.mapTitle}</span>
              <h3>{content.mapTitle}</h3>
            </div>
          </Container>

          <div className="contact-map-full-bleed">
            <ContactMap />
          </div>
        </div>
      </section>

      <style>{`
        .contact-page-section {
          padding: 40px 0 80px;
          background: linear-gradient(180deg, #ffffff 0%, #f7f7f7 100%);
        }

        .contact-intro-card,
        .contact-info-card {
          background: #ffffff;
          border: 1px solid rgba(35, 31, 32, 0.08);
          border-radius: 28px;
          box-shadow: 0 18px 44px #231f2014;
        }

        .contact-intro-card {
          padding: 2rem;
          text-align: center;
        }

        .contact-intro-card span,
        .contact-map-head span {
          display: inline-flex;
          padding: 0.45rem 0.95rem;
          border-radius: 999px;
          background: #beab74;
          color: #231f20;
          font-weight: 600;
        }

        .contact-intro-card h2,
        .contact-map-head h3 {
          color: #231f20;
          margin: 1rem 0 0.85rem;
        }

        .contact-intro-card p {
          color: #676263;
          max-width: 760px;
          margin: 0 auto;
          line-height: 1.8;
        }

        .contact-map-full-section {
          margin-top: 2.25rem;
        }

        .contact-map-full-head {
          text-align: center;
          margin-bottom: 1.25rem;
        }

        .contact-info-card,
        .contact-info-card:visited,
        .contact-info-card:hover,
        .contact-info-card:focus,
        .contact-info-card:active {
          display: block;
          text-decoration: none !important;
          color: #231f20 !important;
          padding: 1.6rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease, color 0.2s ease;
          outline: none;
          box-shadow: none;
          border: 1px solid rgba(35, 31, 32, 0.08);
        }

        .contact-info-card:hover,
        .contact-info-card:focus {
          transform: translateY(-4px);
          box-shadow: 0 20px 48px rgba(35, 31, 32, 0.12) !important;
          text-decoration: none !important;
        }

        .contact-info-icon {
          width: 62px;
          height: 62px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #231f20;
          color: #beab74;
          font-size: 1.3rem;
          margin-bottom: 1rem;
        }

        .contact-info-card h3 {
          color: #231f20;
          font-size: 1.15rem;
          margin-bottom: 0.65rem;
        }

        .contact-info-card p {
          color: #676263;
          line-height: 1.7;
          margin: 0;
        }

        .contact-map-full-bleed {
          width: 100vw;
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
          overflow: hidden;
          background: #ffffff;
          border-top: 1px solid rgba(35, 31, 32, 0.08);
          border-bottom: 1px solid rgba(35, 31, 32, 0.08);
        }

        .contact-map-iframe {
          width: 100%;
          height: 560px;
          display: block;
        }

        @media (max-width: 767px) {
          .contact-page-section {
            padding: 30px 0 60px;
          }

          .contact-intro-card {
            padding: 1.4rem;
          }

          .contact-map-iframe {
            height: 420px;
          }

      }
          .contact-form-head span {
    display: inline-flex;
    padding: 0.45rem 0.95rem;
    border-radius: 999px;
    background: #beab74;
    color: #231f20;
    font-weight: 600;
    margin-bottom: 0.8rem;
}
        
      `}</style>
    </>
  );
}

export default Contact;
