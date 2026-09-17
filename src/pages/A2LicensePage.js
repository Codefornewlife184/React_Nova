import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import {
  FaCheckCircle,
  FaClipboardList,
  FaExclamationTriangle,
  FaMotorcycle,
  FaRoad,
} from "react-icons/fa";

function A2LicensePage() {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === "en";

  const content = isEnglish
    ? {
        pageTitle: "A2 Automatic Motorcycle License Guide",
        badge: "A2 Automatic License",
        title: "A2 Class Automatic Motorcycle License (A2 Automatic)",
        intro:
          "The A2 Automatic license is designed for driver candidates who want a practical and comfortable driving experience without the obligation to shift gears.",
        stats: [
          { label: "Minimum age", value: "18" },
          { label: "Maximum power", value: "35 kW" },
          { label: "Power ratio", value: "0.2 kW/kg" },
          { label: "Restriction", value: "Automatic only" },
        ],
        sideTitle: "Usage Authority & Scope",
        scope: [
          "Covers only automatic transmission (scooter / maxi-scooter) motorcycles with a maximum power of 35 kW (47 HP) and a power-to-weight ratio not exceeding 0.2 kW/kg.",
          "It does not include manual-shift motorcycles. The automatic transmission restriction code appears on the driver's license.",
          "It allows the use of automatic M and A1 class vehicles.",
        ],
        generalTitle: "General Features",
        general: [
          "Age limit: At least 18 years old.",
          "Scope of authority: Automatic-shift motorcycles up to 35 kW (47 HP) and 0.2 kW/kg power-to-weight ratio (scooter / maxi-scooter).",
          "Includes automatic M class and automatic A1 class vehicles.",
          "License restriction: Since the exam is taken with an automatic vehicle, an automatic restriction code appears on your license. It does not cover manual motorcycles.",
        ],
        requirementsTitle: "Application Requirements",
        requirements: [
          "Be at least a primary school graduate.",
          "Obtain a valid driver fitness (health) report.",
          "Meet the criminal record / judicial registry requirements.",
          "Be at least 18 years old on the exam date.",
        ],
        documentsTitle: "Required Documents",
        documents: [
          "Photocopy of the T.C. ID card.",
          "4 biometric photographs.",
          "Education certificate or diploma sample.",
          "Driver health report.",
          "Criminal record declaration.",
          "Photocopy of the current driving license, if any.",
        ],
        processTitle: "Exam & Training Process",
        process: [
          "Candidates who will obtain a license for the first time participate in the e-Exam and must score at least 70 points.",
          "Candidates who already hold other license classes such as B or A1 are exempt from the theoretical exam.",
          "Track training and flowing traffic training are provided with the automatic A2 class motorcycle.",
          "The license is completed by passing only the practical driving test on the automatic vehicle.",
        ],
        warningTitle: "Important Note",
        warning:
          "This license class is valid only for automatic (scooter-style) motorcycles. If you also want to use manual-shift motorcycles, you can choose the standard A2 class license training with a manual motorcycle.",
      }
    : {
        pageTitle: "A2 Sınıfı Otomatik Motosiklet Ehliyeti Rehberi",
        badge: "A2 Otomatik Ehliyet",
        title: "A2 Sınıfı Otomatik Motosiklet Ehliyeti (A2 Otomatik)",
        intro:
          "A2 Otomatik ehliyet, vites değiştirme zorunluluğu olmadan, pratik ve konforlu bir sürüş deneyimi arayan sürücü adayları için tasarlanmış bir ehliyet sınıfıdır.",
        stats: [
          { label: "Yaş şartı", value: "18" },
          { label: "Azami güç", value: "35 kW" },
          { label: "Güç oranı", value: "0,2 kW/kg" },
          { label: "Kısıtlama", value: "Otomatik" },
        ],
        sideTitle: "Kullanım Yetkisi ve Kapsamı",
        scope: [
          "35 kW (47 HP) gücünü ve 0,2 kW/kg güç/ağırlık oranını geçmeyen; yalnızca otomatik vitesli (scooter / maxi-scooter) motosikletleri kapsar.",
          "Manuel vitesli motosikletleri kapsamaz. Ehliyet üzerinde otomatik vites kısıtlama kodu yer alır.",
          "Otomatik vitesli M sınıfı ve otomatik A1 sınıfı araçları kullanma imkanı sunar.",
        ],
        generalTitle: "Genel Özellikler",
        general: [
          "Yaş sınırı: En az 18 yaşını doldurmuş olmak.",
          "Kullanım yetkisi: 35 kW (47 HP) gücü ve 0,2 kW/kg güç/ağırlık oranını geçmeyen otomatik vitesli (scooter / maxi-scooter) motosikletler.",
          "Kapsadığı diğer sınıflar: Otomatik vitesli M ve otomatik A1 sınıfı araçlar.",
          "Ehliyet kısıtlaması: Sınava otomatik vitesli araçla girildiği için ehliyetinizde otomatik vites kısıtlama kodu yer alır; manuel vitesli motosikletleri kapsamaz.",
        ],
        requirementsTitle: "Başvuru Şartları",
        requirements: [
          "En az ilkokul mezunu olmak.",
          "Sürücü olur sağlık raporu almak.",
          "Adli sicil kaydı şartlarını taşımak.",
          "Sınav tarihinde 18 yaşını doldurmuş olmak.",
        ],
        documentsTitle: "Gerekli Belgeler",
        documents: [
          "T.C. kimlik kartı fotokopisi.",
          "4 adet biyometrik fotoğraf.",
          "Öğrenim belgesi veya diploma örneği.",
          "Sağlık raporu.",
          "Adli sicil kaydı beyanı.",
          "Varsa mevcut sürücü belgesi fotokopisi.",
        ],
        processTitle: "Sınav ve Eğitim Süreci",
        process: [
          "İlk kez ehliyet alacak adaylar e-Sınava katılarak en az 70 puan almalıdır.",
          "B veya A1 gibi başka sınıf ehliyeti olan adaylar teorik sınavdan muaftır.",
          "Otomatik vitesli A2 sınıfı motosiklet ile parkur ve akan trafik eğitimi verilir.",
          "Sadece direksiyon uygulama sınavı otomatik araçla tamamlanarak ehliyet alınır.",
        ],
        warningTitle: "Önemli Not",
        warning:
          "Bu ehliyet sınıfı yalnızca otomatik (scooter tipi) motosikletler için geçerlidir. Manuel vitesli motosikletleri de kullanmak istiyorsanız standart A2 sınıfı manuel motosiklet ehliyeti eğitimini tercih edebilirsiniz.",
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
              <div className="guide-stats">
                {content.stats.map((item) => (
                  <div key={item.label} className="guide-stat-card">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="guide-hero-side">
              <div className="guide-side-icon">
                <FaMotorcycle />
              </div>
              <h3>{content.sideTitle}</h3>
              {content.scope.map((item) => (
                <div key={item} className="guide-side-item">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="row g-4 mt-4">
            <div className="col-lg-6">
              <div className="guide-panel h-100">
                <div className="guide-panel-title">
                  <FaCheckCircle />
                  <h3>{content.generalTitle}</h3>
                </div>
                {content.general.map((item) => (
                  <div key={item} className="guide-list-item">
                    <FaCheckCircle />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="guide-panel h-100">
                <div className="guide-panel-title">
                  <FaCheckCircle />
                  <h3>{content.requirementsTitle}</h3>
                </div>
                {content.requirements.map((item) => (
                  <div key={item} className="guide-list-item">
                    <FaCheckCircle />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="row g-4 mt-4">
            <div className="col-lg-6">
              <div className="guide-panel h-100">
                <div className="guide-panel-title">
                  <FaRoad />
                  <h3>{content.processTitle}</h3>
                </div>
                {content.process.map((item, index) => (
                  <div key={item} className="guide-process-item">
                    <span className="guide-step">{index + 1}</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="guide-panel h-100">
                <div className="guide-panel-title">
                  <FaClipboardList />
                  <h3>{content.documentsTitle}</h3>
                </div>
                {content.documents.map((item) => (
                  <div key={item} className="guide-list-item">
                    <FaClipboardList />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="guide-warning-card">
            <div className="guide-warning-icon">
              <FaExclamationTriangle />
            </div>
            <div>
              <h3>{content.warningTitle}</h3>
              <p>{content.warning}</p>
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
  .guide-hero-card,.guide-panel,.guide-doc-card,.guide-warning-card { background:#fff; border:1px solid rgba(35,31,32,.08); border-radius:24px; box-shadow:0 18px 45px rgba(35,31,32,.08); }
  .guide-hero-card { display:grid; grid-template-columns: minmax(0,1.4fr) minmax(320px,1fr); gap:1.5rem; padding:2rem; }
  .guide-badge,.guide-section-heading span { display:inline-flex; width:fit-content; padding:.45rem .95rem; border-radius:999px; background:#beab74; color:#231f20; font-weight:600; }
  .guide-hero-main h2,.guide-section-heading h3,.guide-panel h3,.guide-warning-card h3 { color:#231f20; }
  .guide-hero-main h2 { margin:1rem 0; font-size:clamp(2rem,4vw,3rem); line-height:1.15; }
  .guide-hero-main p,.guide-panel p,.guide-doc-card p,.guide-side-item,.guide-warning-card p { color:#5f5a5b; line-height:1.8; margin:0; }
  .guide-stats { margin-top:1.5rem; display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:1rem; }
  .guide-stat-card { padding:1rem 1.1rem; border-radius:18px; background:#beab74; }
  .guide-stat-card span { display:block; color:#fff; margin-bottom:.35rem; }
  .guide-stat-card strong { color:#231f20; font-size:1.2rem; }
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
  .guide-section { margin-top:5rem; }
  .guide-section-heading { text-align:center; margin-bottom:1.75rem; }
  .guide-section-heading h3 { margin-top:.9rem; font-size:clamp(1.8rem,3vw,2.4rem); }
  .guide-doc-card { padding:1.6rem; }
  .guide-doc-icon { background:#231f20; color:#fff; margin-bottom:1rem; }
  .guide-warning-card { margin-top:2.5rem; padding:1.6rem; display:flex; gap:1.25rem; align-items:flex-start; background:linear-gradient(135deg,#fff8ea 0%,#fff 100%); border-color:rgba(190,171,116,.45); }
  .guide-warning-card h3 { margin:0 0 .45rem; font-size:1.35rem; }
  .guide-warning-icon { width:58px; height:58px; flex-shrink:0; border-radius:50%; background:#beab74; color:#231f20; display:inline-flex; align-items:center; justify-content:center; font-size:1.4rem; }
  @media (max-width:991px){ .guide-hero-card{grid-template-columns:1fr;padding:1.5rem}.guide-panel{padding:1.5rem} }
  @media (max-width:767px){ .guide-stats{grid-template-columns:1fr} .license-guide-page{padding:30px 0 60px} .guide-warning-card{flex-direction:column} }
`;

export default A2LicensePage;
