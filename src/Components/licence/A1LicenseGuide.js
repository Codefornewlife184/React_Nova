import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaCheckCircle,
  FaClipboardList,
  FaFileAlt,
  FaGraduationCap,
  FaHeartbeat,
  FaIdCard,
  FaMotorcycle,
  FaRoad,
  FaUserShield,
} from "react-icons/fa";
import { Col, Row } from "react-bootstrap";

function A1LicenseGuide() {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === "en";

  const content = isEnglish
    ? {
        eyebrow: "A1 License Guide",
        title: "Comprehensive Guide to the A1 Class Driving License",
        intro:
          "The A1 license is the first official driving license category created for light motorcycle users with two or three wheels. It is an important starting point for young drivers who want to gain independent mobility at an early age.",
        stats: [
          { label: "Minimum age", value: "16" },
          { label: "Maximum engine volume", value: "125 cc" },
          { label: "Maximum power", value: "11 kW" },
          { label: "Additional class", value: "M class included" },
        ],
        scopeTitle: "A1 License Scope and Technical Limits",
        scopeItems: [
          {
            title: "Two-Wheel Motorcycles",
            text: "Vehicles up to 125 cc, with a maximum power of 11 kW and a power-to-weight ratio not exceeding 0.1 kW/kg.",
          },
          {
            title: "Three-Wheel Motorcycles",
            text: "Three-wheel motorcycle models with a maximum motor power of 15 kW.",
          },
          {
            title: "M Class Coverage",
            text: "Drivers with an A1 license may also use M class mopeds without any extra application.",
          },
        ],
        requirementsTitle: "Application Requirements",
        requirements: [
          "Be at least 16 years old.",
          "Have completed at least primary school education.",
          'Obtain a "fit to drive" health report for A1 class drivers from an authorized health institution.',
          "Not have convictions for the disqualifying offenses defined in traffic legislation.",
        ],
        processTitle: "Training and Exam Process",
        processSteps: [
          {
            title: "Theory Training and e-Exam",
            text: "First-time applicants attend traffic, first aid, vehicle knowledge and driving ethics lessons. After training, they must score at least 70 in the e-exam. Drivers who already hold another license class may be exempt from the theory exam.",
          },
          {
            title: "Practical Riding Training and Test",
            text: "Candidates who pass the theory stage continue with closed-course and live-traffic motorcycle training. Skills such as slalom, figure-eight, balance line riding, obstacle avoidance and emergency braking are evaluated in the riding exam.",
          },
        ],
        documentsTitle: "Required Documents",
        documents: [
          {
            icon: <FaIdCard />,
            title: "ID Card Copy",
            text: "Photocopy of Turkish identity card.",
          },
          {
            icon: <FaFileAlt />,
            title: "Biometric Photos",
            text: "4 biometric photos taken within the last 6 months.",
          },
          {
            icon: <FaGraduationCap />,
            title: "Education Document",
            text: "Diploma or an equivalent document showing education status.",
          },
          {
            icon: <FaHeartbeat />,
            title: "Health Report",
            text: "Valid driver medical report for A1 class applications.",
          },
          {
            icon: <FaUserShield />,
            title: "Criminal Record Declaration",
            text: "Can be obtained through e-Government if needed.",
          },
          {
            icon: <FaClipboardList />,
            title: "Parental Consent",
            text: "Required for applicants under the age of 18.",
          },
        ],
        advantagesTitle: "Advantages of the A1 License",
        advantages: [
          {
            title: "Early Traffic Experience",
            text: "It helps young drivers enter traffic with discipline and develop safe driving habits at an early age.",
          },
          {
            title: "Easy Transition to Higher Classes",
            text: "Moving on to A2 or A class becomes easier thanks to gained riding experience and familiarity with the process.",
          },
          {
            title: "Practical Urban Mobility",
            text: "Light and economical motorcycles up to 125 cc offer fuel efficiency and agility in city transportation.",
          },
        ],
        ctaTitle: "Ready to Start Your A1 License Journey?",
        ctaText:
          "Contact us to get up-to-date registration details, course planning and information about the required documents.",
        ctaButton: "Contact Us",
      }
    : {
        eyebrow: "A1 Ehliyet Rehberi",
        title: "A1 Sınıfı Sürücü Belgesi Kapsamlı Rehberi",
        intro:
          "A1 sınıfı ehliyet, iki ve üç tekerlekli hafif motosiklet kullanıcılarına yönelik düzenlenen, özellikle genç yaştaki sürücü adayları için ulaşımda bağımsızlık sağlayan ilk resmi sürücü belgesi kademesidir.",
        stats: [
          { label: "Yaş şartı", value: "16" },
          { label: "Maksimum silindir hacmi", value: "125 cc" },
          { label: "Azami motor gücü", value: "11 kW" },
          { label: "Ek yetki", value: "M sınıfı dahil" },
        ],
        scopeTitle: "A1 Ehliyet Kapsamı ve Teknik Sınırlar",
        scopeItems: [
          {
            title: "İki Tekerlekli Motosikletler",
            text: "Silindir hacmi en fazla 125 cc, motor gücü azami 11 kW ve güç/ağırlık oranı 0,1 kW/kg değerini aşmayan motosikletler.",
          },
          {
            title: "Üç Tekerlekli Motosikletler",
            text: "Motor gücü azami 15 kW olan üç tekerlekli motosiklet modelleri.",
          },
          {
            title: "M Sınıfı Kapsamı",
            text: "A1 ehliyet sahipleri, ek bir işleme gerek kalmaksızın M sınıfına giren moped araçları da kullanabilir.",
          },
        ],
        requirementsTitle: "Başvuru ve Müracaat Şartları",
        requirements: [
          "En az 16 yaşını doldurmuş olmak.",
          "En az ilkokul mezunu olmak veya ilköğretim/ortaokul öğrenimini tamamlamış olmak.",
          'Yetkili sağlık kuruluşlarından "Sürücü Olur" ibareli A1 sınıfı sağlık raporu almak.',
          "Karayolları Trafik Yönetmeliği'nde belirtilen engel teşkil eden suçlardan hüküm giymemiş olmak.",
        ],
        processTitle: "Ehliyet Alma Süreci ve Sınav Aşamaları",
        processSteps: [
          {
            title: "Teorik Eğitim ve e-Sınav",
            text: "İlk kez ehliyet alacak adaylar trafik, ilk yardım, araç tekniği ve trafik adabı derslerinden oluşan teorik eğitime katılır. Eğitim sonunda e-sınavdan en az 70 puan almak gerekir. Başka bir ehliyet sınıfına sahip olanlar teorik sınavdan muaf olabilir.",
          },
          {
            title: "Direksiyon Eğitimi ve Uygulama Sınavı",
            text: "Teorik sınavı geçen adaylar özel parkur ve akan trafikte motosiklet eğitimine alınır. Slalom, sekiz çizme, denge çizgisinden geçme, engelden kaçma ve ani fren gibi teknik beceriler sınavda değerlendirilir.",
          },
        ],
        documentsTitle: "Gerekli Belgeler",
        documents: [
          {
            icon: <FaIdCard />,
            title: "T.C. Kimlik Fotokopisi",
            text: "Geçerli kimlik kartı veya nüfus cüzdanı fotokopisi.",
          },
          {
            icon: <FaFileAlt />,
            title: "Biyometrik Fotoğraf",
            text: "Son 6 ay içinde çekilmiş 4 adet biyometrik fotoğraf.",
          },
          {
            icon: <FaGraduationCap />,
            title: "Öğrenim Belgesi",
            text: "Öğrenim durumunu gösteren belge veya diploma örneği.",
          },
          {
            icon: <FaHeartbeat />,
            title: "Sağlık Raporu",
            text: "Sürücü adayları için geçerli A1 sınıfı sağlık raporu.",
          },
          {
            icon: <FaUserShield />,
            title: "Adli Sicil Beyanı",
            text: "Gerekli durumlarda E-Devlet üzerinden temin edilebilir.",
          },
          {
            icon: <FaClipboardList />,
            title: "Veli/Vasi Muvafakatnamesi",
            text: "18 yaşını doldurmamış adaylar için gereklidir.",
          },
        ],
        advantagesTitle: "A1 Sınıfından Sağlanan Avantajlar",
        advantages: [
          {
            title: "Erken Yaşta Trafik Deneyimi",
            text: "16 yaşında alınabilen bu belge, genç sürücülerin trafik kültürünü erken yaşta edinmesine katkı sağlar.",
          },
          {
            title: "Kademeli Geçiş Kolaylığı",
            text: "İlerleyen dönemde A2 veya A sınıfına geçmek isteyen adaylar için sürüş alışkanlığı ve sınav deneyimi önemli avantaj sunar.",
          },
          {
            title: "Şehir İçi Pratiklik",
            text: "125 cc altındaki hafif motosikletlerle şehir içinde zaman ve yakıt tasarrufu sağlanabilir.",
          },
        ],
        ctaTitle: "A1 Ehliyet Sürecine Hazır mısınız?",
        ctaText:
          "Kayıt koşulları, belge kontrolü ve güncel eğitim planlaması için bizimle hemen iletişime geçin.",
        ctaButton: "Hızlı İletişim",
      };

  return (
    <>
      <section className="a1-guide-page" style={{ marginTop: "0px" }}>
        <Row>
          <Col lg={6} className="offset-lg-3">
            <div className="section-heading text-center">
              <h2>A1 EHLİYET REHBERİ</h2>
            </div>
          </Col>
        </Row>
        <div className="auto-container">
          <div className="a1-guide-hero">
            <div className="row g-4 align-items-stretch">
              <div className="col-lg-7">
                <div className="a1-guide-main-card h-100">
                  <span className="a1-guide-eyebrow">{content.eyebrow}</span>
                  <h2>{content.title}</h2>
                  <p>{content.intro}</p>

                  <div className="a1-guide-stats">
                    {content.stats.map((item) => (
                      <div key={item.label} className="a1-guide-stat-card">
                        <span>{item.label}</span>
                        <strong>{item.value}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="a1-guide-side-card h-100">
                  <div className="a1-guide-side-icon">
                    <FaMotorcycle />
                  </div>
                  <h3>{content.scopeTitle}</h3>

                  <div className="a1-guide-mini-list">
                    {content.scopeItems.map((item) => (
                      <div key={item.title} className="a1-guide-mini-item">
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4 mt-3">
            <div className="col-lg-6">
              <div className="a1-guide-panel h-100">
                <div className="a1-guide-panel-title">
                  <FaCheckCircle />
                  <h3>{content.requirementsTitle}</h3>
                </div>

                <div className="a1-guide-check-list">
                  {content.requirements.map((item) => (
                    <div key={item} className="a1-guide-check-item">
                      <FaCheckCircle />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="a1-guide-panel h-100">
                <div className="a1-guide-panel-title">
                  <FaRoad />
                  <h3>{content.processTitle}</h3>
                </div>

                <div className="a1-guide-process-list">
                  {content.processSteps.map((step, index) => (
                    <div key={step.title} className="a1-guide-process-item">
                      <span className="a1-guide-step-number">{index + 1}</span>
                      <div>
                        <h4>{step.title}</h4>
                        <p>{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="a1-guide-section">
            <div className="a1-guide-section-heading">
              <span>{content.documentsTitle}</span>
              <h3>{content.documentsTitle}</h3>
            </div>

            <div className="row g-4">
              {content.documents.map((item) => (
                <div className="col-lg-4 col-md-6" key={item.title}>
                  <div className="a1-guide-doc-card h-100">
                    <div className="a1-guide-doc-icon">{item.icon}</div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="a1-guide-section">
            <div className="a1-guide-section-heading">
              <span>{content.advantagesTitle}</span>
              <h3>{content.advantagesTitle}</h3>
            </div>

            <div className="row g-4">
              {content.advantages.map((item) => (
                <div className="col-lg-4" key={item.title}>
                  <div className="a1-guide-advantage-card h-100">
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="a1-guide-cta-card">
            <h3>{content.ctaTitle}</h3>
            <p>{content.ctaText}</p>
            <Link className="theme-btn btn-style-one" to="/contact">
              <i className="btn-curve"></i>
              <span className="btn-title">{content.ctaButton}</span>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .a1-guide-page {
          padding: 40px 0 80px;
          background: linear-gradient(180deg, #ffffff 0%, #f7f7f7 100%);
        }

        .a1-guide-main-card,
        .a1-guide-side-card,
        .a1-guide-panel,
        .a1-guide-doc-card,
        .a1-guide-advantage-card,
        .a1-guide-cta-card {
          background: #ffffff;
          border: 1px solid rgba(35, 31, 32, 0.08);
          border-radius: 24px;
          box-shadow: 0 18px 45px rgba(35, 31, 32, 0.08);
        }

        .a1-guide-main-card,
        .a1-guide-side-card,
        .a1-guide-panel,
        .a1-guide-cta-card {
          padding: 2rem;
        }

        .a1-guide-eyebrow,
        .a1-guide-section-heading span {
          display: inline-flex;
          align-items: center;
          padding: 0.45rem 0.95rem;
          border-radius: 999px;
          background: #beab74;
          color: #231f20;
          font-weight: 600;
          font-size: 0.95rem;
        }

        .a1-guide-main-card h2,
        .a1-guide-side-card h3,
        .a1-guide-panel h3,
        .a1-guide-section-heading h3,
        .a1-guide-cta-card h3,
        .a1-guide-doc-card h4,
        .a1-guide-advantage-card h4,
        .a1-guide-mini-item h4,
        .a1-guide-process-item h4 {
          color: #231f20;
        }

        .a1-guide-main-card h2 {
          margin: 1rem 0 1rem;
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.15;
        }

        .a1-guide-main-card p,
        .a1-guide-side-card p,
        .a1-guide-panel p,
        .a1-guide-doc-card p,
        .a1-guide-advantage-card p,
        .a1-guide-cta-card p {
          color: #5f5a5b;
          line-height: 1.8;
          margin-bottom: 0;
        }

        .a1-guide-stats {
          margin-top: 1.5rem;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem;
        }

        .a1-guide-stat-card {
          padding: 1rem 1.1rem;
          border-radius: 18px;
          background: #beab74;
          border: 1px solid rgba(35, 31, 32, 0.06);
        }

        .a1-guide-stat-card span {
          display: block;
          color: #fff;
          font-size: 0.95rem;
          margin-bottom: 0.35rem;
        }

        .a1-guide-stat-card strong {
          color: #231f20;
          font-size: 1.25rem;
        }

        .a1-guide-side-card {
          background: linear-gradient(0deg, #231f20 0%, #beab74 100%);
        }

        .a1-guide-side-card h3,
        .a1-guide-side-card p,
        .a1-guide-side-card h4 {
          color: #ffffff;
        }

        .a1-guide-side-icon,
        .a1-guide-doc-icon {
          width: 62px;
          height: 62px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }

        .a1-guide-side-icon {
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .a1-guide-mini-list,
        .a1-guide-check-list,
        .a1-guide-process-list {
          margin-top: 1.5rem;
          display: grid;
          gap: 1rem;
        }

        .a1-guide-mini-item {
          padding: 1rem 1rem;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.08);
        }

        .a1-guide-mini-item h4,
        .a1-guide-process-item h4 {
          margin-bottom: 0.45rem;
          font-size: 1.15rem;
        }

        .a1-guide-panel-title {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .a1-guide-panel-title svg {
          color: #231f20;
          font-size: 1.35rem;
        }

        .a1-guide-check-item,
        .a1-guide-process-item {
          display: flex;
          gap: 0.9rem;
          align-items: flex-start;
          padding: 1rem 1rem;
          border-radius: 18px;
          background: #f7f7f7;
        }

        .a1-guide-check-item svg {
          margin-top: 0.2rem;
          color:#beab74;
          flex-shrink: 0;
        }

        .a1-guide-step-number {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #beab74;
          color: #000;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          flex-shrink: 0;
        }

        .a1-guide-section {
          margin-top: 7rem;
        }

        .a1-guide-section-heading {
          text-align: center;
          margin-bottom: 1.75rem;
        }

        .a1-guide-section-heading h3 {
          margin-top: 0.9rem;
          font-size: clamp(1.8rem, 3vw, 2.4rem);
        }

        .a1-guide-doc-card,
        .a1-guide-advantage-card {
          padding: 1.6rem;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .a1-guide-doc-card:hover,
        .a1-guide-advantage-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 45px rgba(35, 31, 32, 0.12);
        }

        .a1-guide-doc-icon {
          background: #231f20;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .a1-guide-doc-card h4,
        .a1-guide-advantage-card h4 {
          margin-bottom: 0.75rem;
          font-size: 1.3rem;
        }

        .a1-guide-cta-card {
          margin-top: 3rem;
          text-align: center;
        }

        .a1-guide-cta-card p {
          max-width: 760px;
          margin: 0.85rem auto 1.5rem;
        }

        @media (max-width: 991px) {
          .a1-guide-page {
            padding: 30px 0 60px;
          }

          .a1-guide-main-card,
          .a1-guide-side-card,
          .a1-guide-panel,
          .a1-guide-cta-card {
            padding: 1.5rem;
          }
        }

        @media (max-width: 767px) {
          .a1-guide-stats {
            grid-template-columns: 1fr;
          }

          .a1-guide-check-item,
          .a1-guide-process-item {
            padding: 0.9rem;
          }
        }
      `}</style>
    </>
  );
}

export default A1LicenseGuide;
