import React from "react";
import { useTranslation } from "react-i18next";
import { FaArrowUpRightFromSquare, FaLink } from "react-icons/fa6";
import PageHeader from "../Components/common/PageHeader";

function UsefulLinksPage({ showPageHeader = true }) {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === "en";

  const content = isEnglish
    ? {
        title: "Useful Links",
        intro:
          "To support you better during your driving school process, we have brought together the most useful official and informative links in one place.",
        links: [
          {
            title: "E-Government Login",
            url: "https://www.turkiye.gov.tr/",
          },
          {
            title: "Payment System",
            url: "https://sbos.saglik.gov.tr/",
          },
          {
            title: "Highway Traffic Law",
            url: "https://www.mevzuat.gov.tr/mevzuatmetin/1.5.2918.pdf",
          },
          {
            title: "Driver License Appointment",
            url: "https://randevu.nvi.gov.tr/",
          },
          {
            title: "10 Traffic Rules You Should Know",
            url: "https://www.egm.gov.tr/trafik-kural-ihlalleri",
          },
          {
            title: "Motor Vehicle Exam Results",
            url: "https://esinav.meb.gov.tr/harita",
          },
        ],
      }
    : {
        title: "Faydalı Linkler",
        intro:
          "Özdamla Sürücü Kursları olarak sizlere daha iyi hizmet sunabilmek adına oluşturmuş olduğumuz faydalı linkler bölümü aşağıdaki gibidir.",
        links: [
          {
            title: "E-Devlet Giriş",
            url: "https://www.turkiye.gov.tr/",
          },
          {
            title: "Ödeme Sistemi",
            url: "https://sbos.saglik.gov.tr/",
          },
          {
            title: "Karayolları Trafik Kanunu",
            url: "https://www.mevzuat.gov.tr/mevzuatmetin/1.5.2918.pdf",
          },
          {
            title: "Ehliyet Randevu",
            url: "https://randevu.nvi.gov.tr/",
          },
          {
            title: "Bilmeniz Gereken 10 Trafik Kuralı",
            url: "https://www.egm.gov.tr/trafik-kural-ihlalleri",
          },
          {
            title: "Motorlu Taşıt Sınav Sonuç",
            url: "https://esinav.meb.gov.tr/harita",
          },
        ],
      };

  return (
    <>
      {showPageHeader && <PageHeader title={content.title} />}
      <section className="useful-links-section">
        <div className="container">
          {!showPageHeader && (
            <div className="useful-links-inline-heading">
              <h2>{content.title}</h2>
              <p>{content.intro}</p>
            </div>
          )}

          <div className="useful-links-card">
            <div className="useful-links-heading">
              <span className="useful-links-accent"></span>
              <h2>{content.title}</h2>
            </div>
            <p className="useful-links-intro">{content.intro}</p>

            <div className="useful-links-list">
              {content.links.map((item, index) => (
                <a
                  key={item.title}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="useful-link-item"
                >
                  <div className="useful-link-left">
                    <span className="useful-link-number">{index + 1}</span>
                    <span className="useful-link-icon">
                      <FaLink />
                    </span>
                    <span className="useful-link-title">{item.title}</span>
                  </div>
                  <FaArrowUpRightFromSquare className="useful-link-arrow" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .useful-links-section {
          margin-top: -5px;
          padding: 80px 0 80px;
          background: #f5f5f5;
          position: relative;
          z-index: 2;
        }

        .useful-links-inline-heading {
          text-align: center;
          max-width: 820px;
          margin: 0 auto 2.5rem;
        }

        .useful-links-inline-heading h2 {
          color: #231f20;
          font-size: clamp(2rem, 4vw, 3.05rem);
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .useful-links-inline-heading p {
          margin: 0 auto;
          color: #9b9899;
          line-height: 1.8;
          font-size: 1.05rem;
        }

        .useful-links-card {
          background: #ffffff;
          border: 1px solid rgba(35, 31, 32, 0.08);
          border-radius: 24px;
          padding: 2rem;
          box-shadow: 0 18px 45px rgba(35, 31, 32, 0.08);
          max-width: 900px;
          margin: 0 auto;
        }

        .useful-links-heading {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 1rem;
        }

        .useful-links-accent {
          width: 48px;
          height: 3px;
          border-radius: 999px;
          background: #beab74;
        }

        .useful-links-heading h2 {
          margin: 0;
          color: #beab74;
          font-size: clamp(1.8rem, 3vw, 2.3rem);
        }

        .useful-links-intro {
          color: #7a7a7a;
          font-size: 1.05rem;
          line-height: 1.85;
          margin-bottom: 1.8rem;
        }

        .useful-links-list {
          display: grid;
          gap: 0.9rem;
        }

        .useful-link-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.15rem;
          border-radius: 18px;
          background: #f8fbff;
          border: 1px solid rgba(30, 115, 190, 0.1);
          color: #1686d9;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
        }

        .useful-link-item:hover,
        .useful-link-item:focus {
          background: #eef6ff;
          color: #0f6eb6;
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(22, 134, 217, 0.12);
          text-decoration: none;
        }

        .useful-link-left {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          min-width: 0;
        }

        .useful-link-number {
          min-width: 26px;
          font-weight: 700;
          color: #5d6a75;
        }

        .useful-link-icon {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(22, 134, 217, 0.12);
          color: #1686d9;
          flex-shrink: 0;
        }

        .useful-link-title {
          font-size: 1.05rem;
          font-weight: 500;
        }

        .useful-link-arrow {
          flex-shrink: 0;
          font-size: 0.95rem;
          color: #beab74;
        }

        @media (max-width: 767px) {
          .useful-links-section {
            margin-top: 0;
            padding: 24px 0 60px;
          }

          .useful-links-inline-heading {
            margin-bottom: 2rem;
          }

          .useful-links-card {
            padding: 1.4rem;
          }

          .useful-link-item {
            align-items: flex-start;
          }

          .useful-link-title {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
}

export default UsefulLinksPage;
