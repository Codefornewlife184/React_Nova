import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import { FaCheckCircle, FaClipboardList, FaCog, FaRoad } from "react-icons/fa";

function BAutomaticLicensePage() {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === "en";

  const content = isEnglish
    ? {
        pageTitle: "Automatic B License Guide",
        badge: "Automatic B License Guide",
        title: "Comprehensive Guide to the Automatic B Class Driving License",
        intro:
          "The automatic B license is designed for candidates who want a more comfortable learning process and plan to drive only automatic transmission cars.",
        sideTitle: "Scope and Rights",
        scope: [
          "Automatic transmission cars and light commercial vehicles up to 3,500 kg.",
          "Manual vehicles cannot be used with this license class.",
          "Automatic vehicles with light trailers up to 750 kg can be driven.",
          "It also covers M and B1 class vehicles without an extra exam.",
        ],
        requirementsTitle: "Application Requirements",
        requirements: [
          "Be at least 18 years old.",
          "Have completed at least primary school education.",
          "Obtain a valid B class driver health report.",
          "Not have convictions that create a legal obstacle for licensing.",
        ],
        processTitle: "Exam Process",
        process: [
          "First-time applicants attend theory training and must score at least 70 on the e-exam.",
          "Practical training and the driving test are completed with an automatic transmission vehicle.",
          "Parallel parking, reverse driving, L park, emergency braking and hill start are evaluated.",
          "Candidates who already hold classes such as A1 or A2 may be exempt from the theory exam.",
        ],
        documentsTitle: "Required Documents",
        documents: [
          "Photocopy of identity card",
          "4 biometric photos",
          "Education certificate or graduation document",
          "Health report",
          "Criminal record declaration",
          "Copy of current license, if any",
        ],
      }
    : {
        pageTitle: "B Otomatik Ehliyet Rehberi",
        badge: "B Otomatik Ehliyet Rehberi",
        title: "B Sınıfı (Otomatik) Sürücü Belgesi Kapsamlı Rehberi",
        intro:
          "B sınıfı otomatik ehliyet, daha konforlu bir öğrenme süreci isteyen ve yalnızca otomatik vitesli araç kullanmayı planlayan adaylar için hazırlanmıştır.",
        sideTitle: "Kapsam ve Yetkiler",
        scope: [
          "Azami yüklü ağırlığı 3.500 kg'ı geçmeyen otomatik vitesli otomobil ve hafif ticari araçlar.",
          "Bu ehliyet sınıfı ile manuel araç kullanılamaz.",
          "750 kg'ı geçmeyen hafif römork takılı otomatik araçlar kullanılabilir.",
          "Ek sınav olmadan M ve B1 sınıfı araçları da kapsar.",
        ],
        requirementsTitle: "Başvuru Şartları",
        requirements: [
          "En az 18 yaşını doldurmuş olmak.",
          "En az ilkokul mezunu olmak.",
          "B sınıfı sürücü sağlık raporuna sahip olmak.",
          "Yasal engel oluşturan suçlardan hüküm giymemiş olmak.",
        ],
        processTitle: "Sınav Süreci",
        process: [
          "İlk kez ehliyet alacak adaylar teorik eğitime katılır ve e-Sınavdan en az 70 puan alır.",
          "Direksiyon eğitimi ve sınav tamamen otomatik vitesli araçla yapılır.",
          "Paralel park, geri gitme, L park, ani fren ve yokuşta kalkış aşamaları uygulanır.",
          "A1 veya A2 gibi ehliyet sahipleri teorik sınavdan muaf olabilir.",
        ],
        documentsTitle: "Gerekli Belgeler",
        documents: [
          "T.C. kimlik kartı fotokopisi",
          "4 adet biyometrik fotoğraf",
          "Öğrenim belgesi veya mezuniyet belgesi",
          "Sağlık raporu",
          "Adli sicil kaydı beyanı",
          "Varsa mevcut sürücü belgesi fotokopisi",
        ],
      };

  return (
    <>
      <PageHeader title={content.pageTitle} />
      <section className="license-guide-page">
        <div className="container">
          <div className="guide-hero-card">
            <div className="guide-hero-main">
              <span className="guide-badge">{content.badge}</span>
              <h2>{content.title}</h2>
              <p>{content.intro}</p>
            </div>
            <div className="guide-hero-side">
              <div className="guide-side-icon"><FaCog /></div>
              <h3>{content.sideTitle}</h3>
              {content.scope.map((item) => (
                <div key={item} className="guide-side-item">{item}</div>
              ))}
            </div>
          </div>
          <div className="row g-4 mt-1">
            <div className="col-lg-6">
              <div className="guide-panel h-100">
                <div className="guide-panel-title"><FaCheckCircle /><h3>{content.requirementsTitle}</h3></div>
                {content.requirements.map((item) => (
                  <div key={item} className="guide-list-item"><FaCheckCircle /><span>{item}</span></div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="guide-panel h-100">
                <div className="guide-panel-title"><FaRoad /><h3>{content.processTitle}</h3></div>
                {content.process.map((item, index) => (
                  <div key={item} className="guide-process-item"><span className="guide-step">{index + 1}</span><span>{item}</span></div>
                ))}
              </div>
            </div>
          </div>
          <div className="guide-section">
            <div className="guide-section-heading"><span>{content.documentsTitle}</span><h3>{content.documentsTitle}</h3></div>
            <div className="row g-4">
              {content.documents.map((item) => (
                <div className="col-lg-4 col-md-6" key={item}>
                  <div className="guide-doc-card h-100"><div className="guide-doc-icon"><FaClipboardList /></div><p>{item}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <style>{sharedStyles}</style>
    </>
  );
}

const sharedStyles = `
  .license-guide-page { padding: 40px 0 80px; background: linear-gradient(180deg,#fff 0%,#f7f7f7 100%); }
  .guide-hero-card,.guide-panel,.guide-doc-card { background:#fff; border:1px solid rgba(35,31,32,.08); border-radius:24px; box-shadow:0 18px 45px rgba(35,31,32,.08); }
  .guide-hero-card { display:grid; grid-template-columns: minmax(0,1.4fr) minmax(320px,1fr); gap:1.5rem; padding:2rem; }
  .guide-badge,.guide-section-heading span { display:inline-flex; width:fit-content; padding:.45rem .95rem; border-radius:999px; background:#beab74; color:#231f20; font-weight:600; }
  .guide-hero-main h2,.guide-section-heading h3,.guide-panel h3 { color:#231f20; }
  .guide-hero-main h2 { margin:1rem 0; font-size:clamp(2rem,4vw,3rem); line-height:1.15; }
  .guide-hero-main p,.guide-panel p,.guide-doc-card p,.guide-side-item { color:#5f5a5b; line-height:1.8; margin:0; }
  .guide-hero-side { padding:2rem; border-radius:24px; background:linear-gradient(0deg,#231f20 0%,#beab74 100%); color:#fff; }
  .guide-hero-side h3 { color:#fff; margin:1rem 0; }
  .guide-side-icon,.guide-doc-icon { width:62px; height:62px; display:inline-flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem; }
  .guide-side-icon { background:rgba(255,255,255,.12); }
  .guide-side-item { margin-top:1rem; padding:1rem; border-radius:18px; background:rgba(255,255,255,.08); color:#fff; }
  .guide-panel { padding:2rem; }
  .guide-panel-title { display:flex; align-items:center; gap:.85rem; margin-bottom:1rem; }
  .guide-list-item,.guide-process-item { display:flex; gap:.9rem; align-items:flex-start; padding:1rem; border-radius:18px; background:#f7f7f7; margin-top:1rem; }
  .guide-list-item svg { margin-top:.2rem; color:#beab74; flex-shrink:0; }
  .guide-step { width:38px; height:38px; border-radius:50%; background:#beab74; color:#000; display:inline-flex; align-items:center; justify-content:center; font-weight:700; flex-shrink:0; }
  .guide-section { margin-top:7rem; }
  .guide-section-heading { text-align:center; margin-bottom:1.75rem; }
  .guide-section-heading h3 { margin-top:.9rem; font-size:clamp(1.8rem,3vw,2.4rem); }
  .guide-section-heading span {background:#beab74;}
  .guide-doc-card { padding:1.6rem; }
  .guide-doc-icon { background:#231f20; color:#fff; margin-bottom:1rem; }
  @media (max-width:991px){ .guide-hero-card{grid-template-columns:1fr;padding:1.5rem}.guide-panel{padding:1.5rem} }
  @media (max-width:767px){ .license-guide-page{padding:30px 0 60px} }
`;

export default BAutomaticLicensePage;

