import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getLocalizedPath } from "../../utils/siteRoutes";

function Product() {
  const { i18n } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const isEnglish = i18n.language === "en";
  const language = isEnglish ? "en" : "tr";

  const content = isEnglish
    ? {
        sectionTitle: "LICENSE CLASSES",
        sectionText:
          "Choose the license class that fits your driving goal and complete your training with modern vehicles and expert instructors.",
        buttonText: "Get Information",
        detailButtonText: "Detailed Information",
        detailTitle: "Nova Driving School - License Class Information",
        detailClosing:
          "At Nova Driving School, you can complete your theory and driving lessons with our experienced instructors and modern vehicle fleet. Contact us for detailed information and registration requirements.",
        cards: [
          {
            id: 1,
            badge: "B",
            icon: "car",
            title: "B Manual License",
            age: "Minimum age: 18",
            description:
              "Manual transmission driving training is provided. Drivers with this license can use both manual and automatic vehicles."
          },
          {
            id: 2,
            badge: "B",
            icon: "car",
            title: "B Automatic License",
            age: "Minimum age: 18",
            description:
              "Ideal for candidates who only want to drive automatic vehicles and prefer an easier practice process."
          },
          {
            id: 3,
            badge: "A1",
            icon: "motorcycle",
            title: "A1 Motorcycle License",
            age: "Minimum age: 16",
            description:
              "Suitable for candidates who are 16 years old and want to ride light motorcycles up to 125 cc."
          },
          {
            id: 4,
            badge: "A2",
            icon: "motorcycle",
            title: "A2 Automatic Motorcycle License",
            age: "Minimum age: 18",
            description:
              "For candidates aged 18 and above who prefer automatic (scooter) use. Covers automatic motorcycles up to 35 kW (47 HP) with an automatic-only restriction."
          },
          {
            id: 5,
            badge: "A2",
            icon: "motorcycle",
            title: "A2 Manual Motorcycle License",
            age: "Minimum age: 18",
            description:
              "For candidates aged 18 and over who want full freedom. Covers all A2 motorcycles (manual + automatic) up to 35 kW, with no gear restriction."
          }
          
        ],
        productCards: [
          {
            id: 1,
            image: "assets/images/B-Manuel.webp",
            info: "*License Class",
            title: "B Manual License",
            link: getLocalizedPath("bManual", language),
          },
          {
            id: 2,
            image: "assets/images/B-Otomatik.webp",
            info: "*License Class",
            title: "B Automatic License",
            link: getLocalizedPath("bAutomatic", language),
          },
          {
            id: 3,
            image: "assets/images/A1.webp",
            info: "*License Class",
            title: "A1 Motorcycle License",
            link: getLocalizedPath("a1", language),
          },
          {
            id: 4,
            image: "assets/images/A2.webp",
            info: "*License Class",
            title: "A2 Automatic Motorcycle License",
            link: getLocalizedPath("a2", language),
          },
          {
            id: 5,
            image: "assets/images/A2.webp",
            info: "*License Class",
            title: "A2 Manual Motorcycle License",
            link: getLocalizedPath("a2Manual", language),
          }
          
        ],
        detailGroups: [
          {
            title: "Motorcycle Licenses (A1, A2 Automatic, A2 Manual)",
            items: [
              "A1 Class: For candidates who are 16 years old. Covers light motorcycles up to 125 cc, within the allowed cylinder volume and power limits.",
              "A2 Automatic Class: For candidates aged 18 and over. Covers automatic transmission (scooter / maxi-scooter) motorcycles up to 35 kW (47 HP) and with a power-to-weight ratio not exceeding 0.2 kW/kg. The automatic transmission restriction code is included on the license.",
              "A2 Manual Class: For candidates aged 18 and over. Covers all A2 motorcycles (both manual and automatic) with a maximum power of 35 kW (47 HP) and a power-to-weight ratio not exceeding 0.2 kW/kg. The full A2 segment is usable without any gear restriction."
            ]
          },
          {
            title: "Car Licenses (B Manual & B Automatic)",
            items: [
              "B Manual: For candidates who are 18 years old. Manual transmission automobile training is provided. Drivers with this license can use both manual and automatic vehicles.",
              "B Automatic: For candidates who are 18 years old. Designed for candidates who only want to drive automatic vehicles. This license is valid only for automatic transmission vehicles."
            ]
          }
        ]
      }
    : {
        sectionTitle: "Ehliyet Sınıflarımız",
        sectionText:
          "Size uygun ehliyet sınıfını seçin, uzman eğitmenlerimiz ve modern araçlarımızla eğitim sürecinizi güvenle tamamlayın.",
        buttonText: "Bilgi Al",
        detailButtonText: "Detaylı Bilgi",
        detailTitle: "Nova Sürücü Kursu - Ehliyet Sınıfları Bilgilendirme Metni",
        detailClosing:
          "Nova Sürücü Kursu bünyesinde uzman eğitmen kadromuz ve modern araç filomuzla teorik ve direksiyon eğitimlerinizi eksiksiz şekilde tamamlayabilirsiniz. Detaylı bilgi ve kayıt koşulları için bizimle iletişime geçin.",
        cards: [
          {
            id: 1,
            badge: "A1",
            icon: "motorcycle",
            title: "A1 Motosiklet Ehliyeti",
            age: "Yaş şartı: 16",
            description:
              "16 yaşını doldurmuş adaylar için uygundur. 125 cc'ye kadar olan hafif motosikletleri kapsar."
          },
          {
            id: 2,
            badge: "A2",
            icon: "motorcycle",
            title: "A2 Otomatik Motosiklet Ehliyeti",
            age: "Yaş şartı: 18",
            description:
              "18 yaşını doldurmuş, otomatik (scooter) kullanımı tercih eden adaylar içindir. 35 kW (47 HP) gücüne kadar otomatik motosikletleri kapsar; ehliyette otomatik vites kısıtlaması yer alır."
          },
          {
            id: 5,
            badge: "A2",
            icon: "motorcycle",
            title: "A2 Manuel Motosiklet Ehliyeti",
            age: "Yaş şartı: 18",
            description:
              "18 yaşını doldurmuş adaylar içindir. 35 kW (47 HP) gücüne kadar hem manuel hem otomatik tüm A2 motosikletlerini kapsar; vites kısıtlaması yoktur."
          },
          {
            id: 3,
            badge: "B",
            icon: "car",
            title: "B Manuel",
            age: "Yaş şartı: 18",
            description:
              "Manuel vitesli otomobil eğitimi verilir. Bu ehliyet ile hem manuel hem otomatik araç kullanılabilir."
          },
          {
            id: 4,
            badge: "B",
            icon: "car",
            title: "B Otomatik",
            age: "Yaş şartı: 18",
            description:
              "Sadece otomatik vitesli araç kullanmak isteyen adaylar için uygun, pratik odaklı bir eğitim seçeneğidir."
          }
        ],
        productCards: [
          {
            id: 1,
            image: "assets/images/B-Manuel.webp",
            info: "*Ehliyet Sınıfı",
            title: "B Manuel Ehliyeti",
            link: getLocalizedPath("bManual", language),
          },
          {
            id: 2,
            image: "assets/images/B-Otomatik.webp",
            info: "*Ehliyet Sınıfı",
            title: "B Otomatik Ehliyeti",
            link: getLocalizedPath("bAutomatic", language),
          },
          {
            id: 3,
            image: "assets/images/A1.webp",
            info: "*Ehliyet Sınıfı",
            title: "A1 Motosiklet Ehliyeti",
            link: getLocalizedPath("a1", language),
          },
          {
            id: 4,
            image: "assets/images/A2.webp",
            info: "*Ehliyet Sınıfı",
            title: "A2 Otomatik Motosiklet Ehliyeti",
            link: getLocalizedPath("a2", language),
          },
          {
            id: 5,
            image: "assets/images/A2.webp",
            info: "*Ehliyet Sınıfı",
            title: "A2 Manuel Motosiklet Ehliyeti",
            link: getLocalizedPath("a2Manual", language),
          }
          
        ],
        detailGroups: [
          {
            title: "Motosiklet Ehliyetleri (A1, A2 Otomatik, A2 Manuel)",
            items: [
              "A1 Sınıfı: 16 yaşını doldurmuş adaylar içindir. 125 cc'ye kadar olan, silindir hacmi ve güç sınırlandırmasına uygun hafif motosikletleri kapsar.",
              "A2 Otomatik Sınıfı: 18 yaşını doldurmuş adaylar içindir. 35 kW (47 HP) gücü ve güç/ağırlık oranı 0,2 kW/kg'yı geçmeyen otomatik vitesli (scooter / maxi-scooter) motosikletleri kapsar. Ehliyet üzerinde otomatik vites kısıtlama kodu yer alır.",
              "A2 Manuel Sınıfı: 18 yaşını doldurmuş adaylar içindir. 35 kW (47 HP) gücü ve güç/ağırlık oranı 0,2 kW/kg'yı geçmeyen hem manuel hem de otomatik tüm A2 motosikletlerini kapsar. Vites kısıtlaması olmadan tüm A2 segmenti kullanılabilir."
            ]
          },
          {
            title: "Otomobil Ehliyetleri (B Manuel & B Otomatik)",
            items: [
              "B Manuel: 18 yaşını doldurmuş adaylar içindir. Manuel (vitesli) otomobil eğitimi verilir. Bu ehliyeti alanlar hem manuel hem de otomatik vitesli araçları kullanabilir.",
              "B Otomatik: 18 yaşını doldurmuş adaylar içindir. Yalnızca otomatik vitesli araç kullanmak isteyen adaylara özel pratik ve kolay bir eğitim sürecidir. Ehliyet belgesi sadece otomatik vitesli araçlar için geçerlidir."
            ]
          }
        ]
      };


  return (
    <>
      <Container fluid className="amazing-deals mb-5 mt-5">
        <Container>
          <Row className="mb-4 justify-content-center">
            <Col lg={12}>
              <div className="section-heading license-section-heading">
                <h2>{content.sectionTitle}</h2>
                <p>{content.sectionText}</p>
              </div>
            </Col>
          </Row>

          <Row>
            {content.productCards.map((product) => (
              <Col lg={6} sm={12} key={product.id} className="mb-4">
                <div className="item h-100">
                  <Row className="h-100 g-0">
                    <Col lg={8} md={8} sm={12} className="p-0">
                      <div className="image h-100">
                        <Link to={product.link} onClick={scrollToTop}>
                          <img 
                            src={product.image} 
                            alt={product.title}
                            className="w-100 h-100 object-fit-cover"
                            style={{ minHeight: '200px' }}
                          />
                        </Link>
                      </div>
                    </Col>
                    <Col lg={4} md={4} sm={12} className="align-self-center">
                      <div className="content px-3 pt-sm-3 ps-md-3">
                        <span className="info">{product.info}</span>
                        <Link to={product.link} onClick={scrollToTop}>
                          <h4>{product.title}</h4>
                        </Link>
                        {product.days && (
                          <Row className="mt-3">
                            <Col xs={6}>
                              <i className="fa fa-clock"></i>
                              <span className="list">{product.days}</span>
                            </Col>
                            <Col xs={6}>
                              <i className="fa fa-map"></i>
                              <span className="list">{product.places}</span>
                            </Col>
                          </Row>
                        )}
                        {product.description && (
                          <p className="mt-3">{product.description}</p>
                        )}
                        <div className="main-button mt-3">
                          <Link to={product.link} onClick={scrollToTop}>
                            {content.detailButtonText}
                          </Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>


      <style>{`
        .license-section-heading {
          text-align: center;
          width: 100%;
          margin-left: auto;
          margin-right: auto;
        }

        .license-section-heading h2,
        .license-section-heading p {
          text-align: center;
        }

        .license-section-heading h2 {
          color: #231f20;
          font-size: clamp(2rem, 4vw, 3.05rem);
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .license-section-heading p {
          max-width: 680px;
          margin: 0.75rem auto 0;
        }

        .license-card {
          display: flex;
          align-items: stretch;
          min-height: 240px;
          background: linear-gradient(135deg, #ffffff 0%, #f4f4f4 100%);
          border: 1px solid rgba(35, 31, 32, 0.08);
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 12px 30px rgba(35, 31, 32, 0.08);
        }

        .license-badge {
          min-width: 120px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          background: #231f20;
          color: #ffffff;
          font-size: 2.5rem;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .license-badge-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.12);
          color: #ffffff;
          font-size: 1.45rem;
        }

        .license-card-body {
          padding: 2rem;
        }

        .license-age {
          display: inline-block;
          margin-bottom: 0.75rem;
          padding: 0.35rem 0.75rem;
          border-radius: 999px;
          background-color: rgba(35, 31, 32, 0.08);
          color: #231f20;
          font-size: 0.95rem;
          font-weight: 600;
        }

        .license-card h4 {
          margin-bottom: 0.9rem;
          color: #231f20;
        }

        .license-card p {
          margin-bottom: 0;
          color: #555555;
          line-height: 1.7;
        }

        .license-detail-box {
          padding: 2rem;
          background-color: #ffffff;
          border-radius: 18px;
          border: 1px solid rgba(35, 31, 32, 0.08);
          box-shadow: 0 12px 30px rgba(35, 31, 32, 0.06);
        }

        .license-detail-box h3 {
          margin-bottom: 1.5rem;
          color: #231f20;
        }

        .license-detail-group + .license-detail-group {
          margin-top: 1.75rem;
        }

        .license-detail-group h4 {
          margin-bottom: 1rem;
          color: #231f20;
        }

        .license-detail-group ul {
          margin: 0;
          padding-left: 1.25rem;
        }

        .license-detail-group li {
          margin-bottom: 0.9rem;
          color: #555555;
          line-height: 1.75;
        }

        .license-detail-closing {
          margin-top: 1.25rem;
          margin-bottom: 0;
          color: #555555;
          line-height: 1.8;
        }

        @media (max-width: 767px) {
          .license-card {
            flex-direction: column;
          }

          .license-badge {
            min-width: 100%;
            min-height: 90px;
            font-size: 2.2rem;
          }

          .license-card-body,
          .license-detail-box {
            padding: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}

export default Product;
