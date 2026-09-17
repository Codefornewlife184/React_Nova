import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  FaCamera,
  FaFileAlt,
  FaHeartbeat,
  FaMoneyCheckAlt,
  FaPhoneAlt,
  FaRegCheckCircle
} from "react-icons/fa";
import PageHeader from "../Components/common/PageHeader";

function RegistrationDocumentsPage({ showPageHeader = true }) {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === "en";

  const content = isEnglish
    ? {
        title: "Documents Required for Registration",
        introTitle: "Which documents are required for driving school registration?",
        introText:
          "These are the documents requested during driving school registration. Once these are ready, you can complete your registration process smoothly.",
        sectionTitle: "Required Documents",
        cards: [
          {
            icon: <FaCamera />,
            title: "1 Biometric Photo",
            text: "A recent biometric photo suitable for official application and registration procedures."
          },
          {
            icon: <FaFileAlt />,
            title: "Original Diploma or Student Certificate",
            text: "Student certificate can also be obtained via e-Government."
          },
          {
            icon: <FaHeartbeat />,
            title: "Health Report",
            text: "A paid driving health report obtained through your family physician."
          },
          {
            icon: <FaMoneyCheckAlt />,
            title: "Payment and Application",
            text: "After the examination, you can complete the payment online through e-Government or sbos.saglik.gov.tr."
          }
        ],
        checklistTitle: "Required list",
        checklist: [
          "1 biometric photo",
          "Original diploma or student certificate",
          "Paid driving health report"
        ],
        summaryText:
          "With these documents, you can register at our course.",
        stepsTitle: "Health Report Payment Information",
        steps: [
          "Since the driving health report from the family physician is now paid, you should first go to your family physician and fill in the Personal Health Information Form via e-Government.",
          "After that, your family physician examines you and gives you a payment code.",
          "You can pay online through e-Government or at https://sbos.saglik.gov.tr by entering your card details. If you prefer not to pay by card, you can also make the payment via EFT/Bank Transfer using the Ministry of Health IBAN details."
        ],
        noteTitle: "Registration Reminder",
        noteText:
          "For the most up-to-date process, you can contact us before registration and confirm the requested documents.",
        cta: "Contact for Registration"
      }
    : {
        title: "Kayıt İçin Gerekli Belgeler",
        introTitle: "Sürücü Kursuna Kayıt Olmak İçin Gerekli Belgeler Nelerdir?",
        introText:
          "İşte sürücü kursuna kayıt olurken sizden istenen belgeler. Bu belgeleri hazırladığınızda kayıt işleminizi hızlıca tamamlayabilirsiniz.",
        sectionTitle: "Gerekli Evraklar",
        cards: [
          {
            icon: <FaCamera />,
            title: "1 Adet Biyometrik Fotoğraf",
            text: "Resmi başvuru ve kayıt işlemlerinde kullanılmak üzere güncel biyometrik fotoğraf."
          },
          {
            icon: <FaFileAlt />,
            title: "Diploma (Asıl) veya Öğrenci Belgesi",
            text: "Öğrenci belgesi E-Devlet üzerinden alınabilir."
          },
          {
            icon: <FaHeartbeat />,
            title: "Ehliyet İçin Sağlık Raporu",
            text: "Aile hekiminizden alınan, ücretli sürücü sağlık raporu."
          },
          {
            icon: <FaMoneyCheckAlt />,
            title: "Ödeme ve Başvuru",
            text: "Muayene sonrası verilen kod ile E-Devlet veya sbos.saglik.gov.tr üzerinden ödemenizi tamamlayabilirsiniz."
          }
        ],
        checklistTitle: "İstenen Belgeler",
        checklist: [
          "1 adet biyometrik fotoğraf",
          "Diploma (asıl) veya öğrenci belgesi",
          "Ehliyet için sağlık raporu"
        ],
        summaryText:
          "Bu belgeler ile kursumuza kayıt yaptırabilirsiniz.",
        stepsTitle: "Sağlık Raporu Ödeme Bilgisi",
        steps: [
          "Aile hekiminden ehliyet için sağlık raporu almak artık ücretli. İlk olarak aile hekiminize giderek E-Devlet üzerinden Kişisel Sağlık Bilgi Formunu doldurmanız gerekiyor.",
          "Ardından aile hekiminiz sizi muayene ederek size ödeme için bir kod verecek.",
          "Bu kod ile E-Devlet üzerinden veya https://sbos.saglik.gov.tr adresinden kart bilgilerinizle online ödeme yapabilirsiniz. Kart ile ödeme yapmak istemiyorsanız Sağlık Bakanlığının IBAN adresleri üzerinden EFT/Havale ile de ödeme yapabilirsiniz."
        ],
        noteTitle: "Kayıt Hatırlatması",
        noteText:
          "Güncel belge listesi ve kayıt detayları için başvuru öncesinde bizimle iletişime geçebilirsiniz.",
        cta: "Kayıt İçin İletişime Geç"
      };

  return (
    <>
      {showPageHeader && <PageHeader title={content.title} />}

      <Container className="info-page py-5">
        {!showPageHeader && (
          <Row className="mb-5 justify-content-center">
            <Col lg={10}>
              <div className="info-inline-heading">
                <h2>{content.title}</h2>
                <p>{content.introText}</p>
              </div>
            </Col>
          </Row>
        )}

        <Row className="g-4 align-items-stretch">
          <Col lg={7}>
            <div className="info-hero-card h-100">
              <span className="info-eyebrow">{content.sectionTitle}</span>
              <h2>{content.introTitle}</h2><br/>
              <p>{content.introText}</p>
              <div className="info-checklist-box">
                <h3>{content.checklistTitle}</h3>
                <div className="info-checklist-list">
                  {content.checklist.map((item) => (
                    <div key={item} className="info-checklist-item">
                      <FaRegCheckCircle />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="info-summary-text">{content.summaryText}</p>
              <div className="info-note-box">
                <div className="note-icon">
                  <FaRegCheckCircle />
                </div>
                <div>
                  <h4>{content.noteTitle}</h4>
                  <p>{content.noteText}</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="info-process-card h-100">
              <h3>{content.stepsTitle}</h3>
              
              <div className="info-process-list">
                {content.steps.map((step, index) => (
                  <div key={step} className="info-process-item">
                    <span>{index + 1}</span>
                    <p>
                      {index === 2 && !isEnglish ? (
                        <>
                          Bu kod ile E-Devlet üzerinden veya{" "}
                          <a
                            href="https://sbos.saglik.gov.tr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-external-link"
                          >
                            https://sbos.saglik.gov.tr
                          </a>{" "}
                          adresinden kart bilgilerinizle online ödeme yapabilirsiniz.
                          Kart ile ödeme yapmak istemiyorsanız Sağlık Bakanlığının
                          IBAN adresleri üzerinden EFT/Havale ile de ödeme
                          yapabilirsiniz.
                        </>
                      ) : (
                        step
                      )}
                    </p>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="info-cta-button">
                <FaPhoneAlt />
                {content.cta}
              </Link>
            </div>
          </Col>
        </Row>

        <Row className="g-4 mt-1">
          {content.cards.map((card) => (
            <Col lg={3} md={6} key={card.title}>
              <div className="info-doc-card h-100">
                <div className="info-doc-icon">{card.icon}</div>
                <h4>{card.title}</h4>
                <p>{card.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <style>{`
        .info-page {
          color: #231f20;
        }

        .info-inline-heading {
          text-align: center;
        }

        .info-inline-heading h2 {
          color: #231f20;
          font-size: clamp(2rem, 4vw, 3.05rem);
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .info-inline-heading p {
          max-width: 820px;
          margin: 0 auto;
          color: #9b9899;
          line-height: 1.8;
          font-size: 1.05rem;
        }

        .info-hero-card,
        .info-process-card,
        .info-doc-card {
          background: #ffffff;
          border: 1px solid rgba(35, 31, 32, 0.08);
          border-radius: 24px;
          box-shadow: 0 16px 40px rgba(35, 31, 32, 0.07);
        }

        .info-hero-card,
        .info-process-card {
          padding: 2rem;
        }

        .info-eyebrow {
          display: inline-block;
          margin-bottom: 1rem;
          padding: 0.4rem 0.85rem;
          background: rgba(35, 31, 32, 0.08);
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.95rem;
        }

        .info-hero-card h2,
        .info-process-card h3,
        .info-doc-card h4 {
          color: #231f20;
        }

        .info-hero-card p,
        .info-process-card p,
        .info-doc-card p {
          color: #5a5a5a;
          line-height: 1.75;
          margin-bottom: 0;
        }

        .info-note-box {
          margin-top: 1.25rem;
          display: flex;
          gap: 1rem;
          padding: 1.25rem;
          border-radius: 18px;
          background: linear-gradient(135deg, rgba(35, 31, 32, 0.05), rgba(35, 31, 32, 0.02));
        }

        .info-checklist-box {
          margin-top: 1.5rem;
          padding: 1.25rem;
          border-radius: 18px;
          background: #f7f7f7;
        }

        .info-checklist-box h3 {
          margin-bottom: 1rem;
          color: #231f20;
          font-size: 1.2rem;
        }

        .info-checklist-list {
          display: grid;
          gap: 0.85rem;
        }

        .info-checklist-item {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
          color: #231f20;
          font-weight: 500;
          line-height: 1.6;
        }

        .info-checklist-item svg {
          color: #231f20;
          margin-top: 0.2rem;
          flex-shrink: 0;
        }

        .info-summary-text {
          margin-top: 1rem;
          font-weight: 600;
          color: #231f20 !important;
        }

        .note-icon,
        .info-doc-icon {
          width: 56px;
          height: 56px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #231f20;
          color: #ffffff;
          font-size: 1.35rem;
          flex-shrink: 0;
        }

        .info-note-box h4 {
          margin-bottom: 0.5rem;
        }

        .info-process-list {
          display: grid;
          gap: 1rem;
          margin-top: 1.25rem;
        }

        .info-process-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          padding: 1rem;
          border-radius: 18px;
          background: #f7f7f7;
        }

        .info-process-item span {
          width: 34px;
          height: 34px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #231f20;
          color: #ffffff;
          font-weight: 700;
          flex-shrink: 0;
        }

        .inline-external-link {
          display: inline-block;
          color: #0d6efd;
          font-weight: 700;
          text-decoration: none !important;
          border-bottom: 0 !important;
          box-shadow: none !important;
          outline: none !important;
          word-break: break-all;
        }

        .inline-external-link:hover {
          color: #0a58ca;
          text-decoration: none !important;
          border-bottom: 0 !important;
          box-shadow: none !important;
        }

        .info-cta-button {
          margin-top: 2.5rem;
          display: flex;
          width: fit-content;
          align-items: center;
          gap: 0.7rem;
          padding: 0.95rem 1.25rem;
          border-radius: 999px;
          background: #231f20;
          color: #ffffff;
          text-decoration: none;
          font-weight: 600;
        }

        .info-link-button {
          margin-top: 1rem;
          margin-bottom: 1.5rem;
          display: inline-flex;
          align-items: center;
          gap: 0.85rem;
          width: 100%;
          padding: 1rem 1.1rem;
          border: 2px solid rgba(35, 31, 32, 0.12);
          border-radius: 20px;
          background: linear-gradient(135deg, #231f20 0%, #3a3335 100%);
          box-shadow: 0 14px 30px rgba(35, 31, 32, 0.14);
          color: #ffffff;
          text-decoration: none;
          font-weight: 600;
          transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
        }

        .info-link-icon {
          width: 46px;
          height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.14);
          color: #ffffff;
          flex-shrink: 0;
        }

        .info-link-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          line-height: 1.2;
        }

        .info-link-content strong {
          color: #ffffff;
          font-size: 1.05rem;
        }

        .info-link-content small {
          margin-top: 0.2rem;
          color: rgba(255, 255, 255, 0.74);
          font-size: 0.82rem;
        }

        .info-link-button:hover,
        .info-cta-button:hover {
          color: #ffffff;
          opacity: 0.96;
        }

        .info-link-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 34px rgba(35, 31, 32, 0.2);
        }

        .info-cta-button {
          margin-left: auto;
          margin-right: auto;
          justify-content: center;
        }

        .info-doc-card {
          padding: 1.75rem;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .info-doc-icon {
          margin-bottom: 1rem;
        }

        .info-doc-card h4 {
          margin-bottom: 0.75rem;
        }

        .info-doc-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(35, 31, 32, 0.1);
        }

        @media (max-width: 991px) {
          .info-inline-heading {
            margin-bottom: -0.25rem;
          }

          .info-link-button,
          .info-cta-button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}

export default RegistrationDocumentsPage;
