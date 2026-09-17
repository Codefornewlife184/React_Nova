import React from "react";
import { useTranslation } from "react-i18next";
import { FaBullseye, FaEye, FaShieldAlt, FaUsers } from "react-icons/fa";

function About() {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === "en";
  const aboutImage = isEnglish
    ? "/assets/images/hakkimizda-2.webp"
    : "/assets/images/hakkimizda-1.webp";

  const content = isEnglish
    ? {
        eyebrow: "About Nova",
        title: "A Safe, Modern and Human-Centered Driving Education Experience",
        aboutTitle: "About Us",
        aboutText1:
          "At Nova Driving School, we started with an innovative, safe and human-centered approach to driver education. With our new-generation training model, we teach our candidates not only how to pass the exam, but also how to become confident, conscious and respectful drivers in real traffic.",
        aboutText2:
          "With our wide vehicle fleet, expert instructors and technology-supported theory classrooms, we transform the license process from a complicated obligation into an enjoyable learning experience. We believe traffic safety begins with individual responsibility, and we train every student who joins Nova Driving School as one of the conscious drivers of the future.",
        missionTitle: "Our Mission",
        missionText:
          "To provide our driver candidates with complete theoretical and practical education at international standards; and to raise fully equipped drivers who obey traffic rules, respect the environment and other road users, master defensive driving techniques and stay calm in traffic.",
        visionTitle: "Our Vision",
        visionText:
          "To become a symbol of trust and modernity in the driver education sector through our training quality, technological infrastructure and student satisfaction; and to lead the transportation culture of the future by spreading the awareness of zero accidents in traffic.",
        highlights: [
          "Expert instructor team",
          "Modern training vehicles",
          "Technology-supported classrooms",
          "Human-centered learning process",
        ],
      }
    : {
        eyebrow: "Nova Sürücü Kursu",
        title: "Güvenli, Modern ve İnsan Odaklı Sürücü Eğitimi",
        aboutTitle: "Hakkımızda",
        aboutText1:
          "Nova Sürücü Kursu olarak, sürücü eğitiminde yenilikçi, güvenli ve insan odaklı bir yaklaşım benimseyerek yola çıktık. Yeni nesil eğitim anlayışımızla, adaylarımıza yalnızca sınavı geçmeyi değil; trafikte özgüvenli, bilinçli ve saygılı birer sürücü olabilmeyi öğretiyoruz.",
        aboutText2:
          "Geniş araç filomuz, alanında uzman eğitmen kadromuz ve teknolojiyle desteklenmiş teorik eğitim sınıflarımızla, ehliyet alma sürecini karmaşık bir zorunluluk olmaktan çıkarıp keyifli bir öğrenme deneyimine dönüştürüyoruz. Trafik güvenliğinin bireysel sorumlulukla başladığına inanıyor, Nova Sürücü Kursu çatısı altında eğitime adım atan her kursiyerimizi geleceğin bilinçli sürücüleri olarak yetiştiriyoruz.",
        missionTitle: "Misyonumuz",
        missionText:
          "Sürücü adaylarımıza uluslararası standartlarda, teorik ve pratik açıdan eksiksiz bir eğitim sunarak; trafik kurallarına uyan, çevreye ve diğer sürücülere saygılı, defansif sürüş tekniklerine hakim ve trafikte kaygıdan uzak, tam donanımlı sürücüler kazandırmaktır.",
        visionTitle: "Vizyonumuz",
        visionText:
          "Eğitim kalitemiz, teknolojik altyapımız ve yüksek kursiyer memnuniyetimiz ile sürücü eğitimi sektöründe güvenin ve modernizmin simgesi haline gelmek; trafikte sıfır kaza bilincini yaygınlaştırarak geleceğin ulaşım kültürüne yön veren öncü bir kurum olmaktır.",
        highlights: [
          "Uzman eğitmen kadrosu",
          "Geniş araç filosu",
          "Teknoloji destekli sınıflar",
          "İnsan odaklı eğitim süreci",
        ],
      };

  return (
    <>
      <section className="nova-about-section">
        <div className="container">
          <div className="nova-about-heading">
            <h2>{content.aboutTitle}</h2>
          </div>

          <div className="row g-4 align-items-stretch">
            <div className="col-lg-6">
              <div className="nova-about-visual h-100">
                <img
                  className="img-fluid"
                  src={aboutImage}
                  alt={content.aboutTitle}
                />
                
              </div>
            </div>

            <div className="col-lg-6">
              <div className="nova-about-main-card h-100">
                <span className="nova-about-tag">{content.aboutTitle}</span>
                <h2>{content.aboutTitle}</h2>
                <p>{content.aboutText1}</p>
                <p>{content.aboutText2}</p>

                <div className="nova-about-highlight-list">
                  {content.highlights.map((item) => (
                    <div key={item} className="nova-about-highlight-item">
                      <FaShieldAlt />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4 mt-2">
            <div className="col-lg-6">
              <div className="nova-about-info-card h-100">
                <div className="nova-about-info-icon">
                  <FaBullseye />
                </div>
                <h3>{content.missionTitle}</h3>
                <p>{content.missionText}</p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="nova-about-info-card h-100">
                <div className="nova-about-info-icon">
                  <FaEye />
                </div>
                <h3>{content.visionTitle}</h3>
                <p>{content.visionText}</p>
              </div>
            </div>
          </div>

          <div className="nova-about-bottom-card mt-4">
            <div className="nova-about-bottom-icon">
              <FaUsers />
            </div>
            <div>
              <h3>{isEnglish ? "Why Nova Driving School?" : "Neden Nova Sürücü Kursu?"}</h3>
              <p>
                {isEnglish
                  ? "We combine modern training standards, strong communication and practical road preparation so that our students complete the process with confidence."
                  : "Modern eğitim standartlarını, güçlü iletişimi ve gerçek trafik hazırlığını bir araya getirerek kursiyerlerimizin süreci güvenle tamamlamasını sağlıyoruz."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .nova-about-section {
          padding: 0px 0 80px;
          background: linear-gradient(180deg, #ffffff 0%, #f7f7f7 100%);
        }

        .nova-about-heading {
          text-align: center;
          max-width: 860px;
          margin: 0 auto 2rem;
        }

        .nova-about-heading span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.45rem 0.95rem;
          border-radius: 999px;
          background: rgba(35, 31, 32, 0.08);
          color: #231f20;
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .nova-about-heading h2 {
          color: #231f20;
          font-size: clamp(2rem, 4vw, 3.05rem);
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .nova-about-heading p {
          color: #7a7576;
          line-height: 1.8;
          margin: 0;
          font-size: 1.05rem;
        }

        .nova-about-visual,
        .nova-about-main-card,
        .nova-about-info-card,
        .nova-about-bottom-card {
          background: #ffffff;
          border: 1px solid rgba(35, 31, 32, 0.08);
          border-radius: 24px;
          box-shadow: 0 18px 45px rgba(35, 31, 32, 0.08);
          overflow: hidden;
        }

        .nova-about-visual {
          position: relative;
          min-height: 100%;
        }

        .nova-about-visual img {
          width: 100%;
          height: 100%;
          min-height: 520px;
          object-fit: cover;
        }

        .nova-about-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 2rem;
          background: linear-gradient(180deg, rgba(35, 31, 32, 0.08) 0%, rgba(35, 31, 32, 0.72) 100%);
        }

        .nova-about-eyebrow,
        .nova-about-tag {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          padding: 0.45rem 0.95rem;
          border-radius: 999px;
          font-size: 0.95rem;
          font-weight: 600;
        }

        .nova-about-eyebrow {
          background: rgba(255, 255, 255, 0.14);
          color: #ffffff;
          margin-bottom: 0.9rem;
        }

        .nova-about-overlay h3 {
          color: #ffffff;
          font-size: clamp(1.9rem, 3vw, 2.7rem);
          line-height: 1.2;
          margin-bottom: 0;
        }

        .nova-about-main-card,
        .nova-about-info-card {
          padding: 2rem;
        }

        .nova-about-tag {
          background: #beab74;
          color: #231f20;
          margin-bottom: 1rem;
        }

        .nova-about-main-card h2,
        .nova-about-info-card h3,
        .nova-about-bottom-card h3 {
          color: #231f20;
          margin-bottom: 1rem;
        }

        .nova-about-main-card p,
        .nova-about-info-card p,
        .nova-about-bottom-card p {
          color: #5f5a5b;
          line-height: 1.85;
          margin-bottom: 0;
        }

        .nova-about-main-card p + p {
          margin-top: 1rem;
        }

        .nova-about-highlight-list {
          margin-top: 1.5rem;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem;
        }

        .nova-about-highlight-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1rem;
          border-radius: 18px;
          background: #beab74;
          border: 1px solid #beab74;
          color: #231f20;
          font-weight: 500;
        }

        .nova-about-highlight-item svg,
        .nova-about-info-icon,
        .nova-about-bottom-icon {
          color: #231f20;
        }

        .nova-about-info-icon,
        .nova-about-bottom-icon {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #beab74;
          font-size: 1.4rem;
          margin-bottom: 1rem;
        }

        .nova-about-bottom-card {
          padding: 1.5rem 1.75rem;
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .nova-about-bottom-icon {
          margin-bottom: 0;
          flex-shrink: 0;
        }

        @media (max-width: 991px) {
          .nova-about-section {
            padding: 10px 0 60px;
          }

          .nova-about-main-card,
          .nova-about-info-card {
            padding: 1.5rem;
          }

          .nova-about-visual img {
            min-height: 420px;
          }
        }

        @media (max-width: 767px) {
          .nova-about-highlight-list {
            grid-template-columns: 1fr;
          }

          .nova-about-bottom-card {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}

export default About;
