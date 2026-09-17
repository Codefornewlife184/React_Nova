import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaCarSide, FaCheckCircle, FaMotorcycle } from "react-icons/fa";
import PageHeader from "../Components/common/PageHeader";

function VehiclesPage() {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === "en";

  const content = isEnglish
    ? {
        title: "Our Vehicles",
        introTitle: "Modern and class-appropriate training fleet",
        introText:
          "Our vehicles are selected according to the license class and lesson comfort, so every candidate can train in a controlled and confidence-building environment.",
        fleet: [
          {
            icon: <FaMotorcycle />,
            title: "A1 Training Motorcycle",
            badge: "A1",
            items: ["Light motorcycle class", "Ideal for beginner balance training", "Easy maneuver practice"]
          },
          {
            icon: <FaMotorcycle />,
            title: "A2 Automatic Training Motorcycle",
            badge: "A2 Automatic",
            items: ["Automatic scooter / maxi-scooter class", "Comfortable city and exam practice", "Automatic transmission practical training"]
          },
          {
            icon: <FaMotorcycle />,
            title: "A2 Manual Training Motorcycle",
            badge: "A2 Manual",
            items: ["Manual geared mid-segment motorcycle", "Clutch and gear mastery training", "Full A2 segment freedom preparation"]
          },
          {
            icon: <FaCarSide />,
            title: "B Manual Training Car",
            badge: "B Manuel",
            items: ["Manual transmission training", "Clutch and gear coordination practice", "Step-by-step city driving preparation"]
          },
          {
            icon: <FaCarSide />,
            title: "B Automatic Training Car",
            badge: "B Automatic",
            items: ["Automatic transmission comfort", "Suitable for beginner drivers", "Calmer and practical adaptation process"]
          }
        ]
      }
    : {
        title: "Araçlarımız",
        introTitle: "Modern ve sınıfa uygun eğitim filomuz",
        introText:
          "Araçlarımız, ehliyet sınıfına ve ders konforuna göre özenle seçilir. Böylece her aday kontrollü, güven veren ve öğrenmeyi kolaylaştıran bir ortamda eğitim alır.",
        fleet: [
          {
            icon: <FaMotorcycle />,
            title: "A1 Eğitim Motosikleti",
            badge: "A1",
            items: ["Hafif motosiklet sınıfına uygundur", "Başlangıç seviyesi denge eğitimleri için idealdir", "Temel manevra çalışmalarına elverişlidir"]
          },
          {
            icon: <FaMotorcycle />,
            title: "A2 Otomatik Eğitim Motosikleti",
            badge: "A2 Otomatik",
            items: ["Otomatik scooter / maxi-scooter sınıfı", "Konforlu şehir ve sınav pratiği", "Otomatik şanzıman pratik eğitimi"]
          },
          {
            icon: <FaMotorcycle />,
            title: "A2 Manuel Eğitim Motosikleti",
            badge: "A2 Manuel",
            items: ["Manuel vitesli orta segment motosiklet", "Debriyaj ve vites hakimiyeti eğitimi", "Tam A2 segmenti özgürlüğü hazırlığı"]
          },
          {
            icon: <FaCarSide />,
            title: "B Manuel Eğitim Aracı",
            badge: "B Manuel",
            items: ["Manuel vites eğitimi için kullanılır", "Debriyaj ve vites koordinasyonu çalışmaları yapılır", "Şehir içi sürüş pratiğine adım adım hazırlık sağlar"]
          },
          {
            icon: <FaCarSide />,
            title: "B Otomatik Eğitim Aracı",
            badge: "B Otomatik",
            items: ["Otomatik vites konforu sunar", "İlk kez araç kullanacak adaylar için uygundur", "Daha sakin ve pratik bir uyum süreci sağlar"]
          }
        ]
      };

  return (
    <>
      <PageHeader title={content.title} />

      <Container className="vehicles-page py-5">
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <div className="vehicles-intro">
              <h2>{content.introTitle}</h2>
              <p>{content.introText}</p>
            </div>
          </Col>
        </Row>

        <Row className="g-4">
          {content.fleet.map((vehicle) => (
            <Col lg={6} key={vehicle.title}>
              <div className="vehicle-card h-100">
                <div className="vehicle-card-top">
                  <div className="vehicle-icon">{vehicle.icon}</div>
                  <span className="vehicle-badge">{vehicle.badge}</span>
                </div>
                <h3>{vehicle.title}</h3>
                <div className="vehicle-feature-list">
                  {vehicle.items.map((item) => (
                    <div key={item} className="vehicle-feature-item">
                      <FaCheckCircle />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <style>{`
        .vehicles-intro {
          padding: 2rem;
          text-align: center;
          border-radius: 24px;
          background: linear-gradient(135deg, rgba(35, 31, 32, 0.04), rgba(35, 31, 32, 0.01));
          border: 1px solid rgba(35, 31, 32, 0.08);
        }

        .vehicles-intro h2 {
          color: #231f20;
          margin-bottom: 0.9rem;
        }

        .vehicles-intro p {
          max-width: 760px;
          margin: 0 auto;
          color: #5a5a5a;
          line-height: 1.8;
        }

        .vehicle-card {
          padding: 2rem;
          border-radius: 24px;
          background: #ffffff;
          border: 1px solid rgba(35, 31, 32, 0.08);
          box-shadow: 0 16px 38px rgba(35, 31, 32, 0.06);
        }

        .vehicle-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .vehicle-icon {
          width: 64px;
          height: 64px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 18px;
          background: #231f20;
          color: #ffffff;
          font-size: 1.7rem;
        }

        .vehicle-badge {
          display: inline-flex;
          align-items: center;
          padding: 0.5rem 0.95rem;
          border-radius: 999px;
          background: rgba(35, 31, 32, 0.08);
          color: #231f20;
          font-weight: 700;
        }

        .vehicle-card h3 {
          color: #231f20;
          margin-bottom: 1.1rem;
        }

        .vehicle-feature-list {
          display: grid;
          gap: 0.9rem;
        }

        .vehicle-feature-item {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
          color: #5a5a5a;
          line-height: 1.7;
        }

        .vehicle-feature-item svg {
          color: #231f20;
          margin-top: 0.2rem;
          flex-shrink: 0;
        }
      `}</style>
    </>
  );
}

export default VehiclesPage;
