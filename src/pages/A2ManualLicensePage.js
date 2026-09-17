import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import {
  FaCheckCircle,
  FaClipboardList,
  FaMotorcycle,
  FaRoad,
} from "react-icons/fa";

function A2ManualLicensePage() {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === "en";

  const content = isEnglish
    ? {
        pageTitle: "A2 Manual Motorcycle License Guide",
        badge: "A2 Manual License",
        title: "A2 Class Manual Motorcycle License (A2 Manual)",
        intro:
          "The A2 Manual license is an ideal choice for driver candidates who want to freely use all A2-class motorcycle types (both manual and automatic).",
        stats: [
          { label: "Minimum age", value: "18" },
          { label: "Maximum power", value: "35 kW" },
          { label: "Power ratio", value: "0.2 kW/kg" },
          { label: "Freedom of use", value: "Manual + Auto" },
        ],
        sideTitle: "Usage Authority & Scope",
        scope: [
          "Covers all A2 motorcycles, both manual (geared) and automatic, with a maximum power of 35 kW (47 HP) and a power-to-weight ratio not exceeding 0.2 kW/kg.",
          "It also grants the right to use M and A1 class vehicles (manual and automatic).",
          "Because the exam is completed with a manual transmission vehicle, the entire A2 segment motorcycles can be used without any gear restriction.",
        ],
        generalTitle: "General Features",
        general: [
          "Age limit: At least 18 years old.",
          "Scope of authority: Covers all A2 motorcycles, both manual and automatic, up to 35 kW (47 HP) and with a power-to-weight ratio of 0.2 kW/kg.",
          "Other classes covered: Provides authorization to use M class and A1 class (manual and automatic) vehicles.",
          "Freedom of use: Since the exam is completed with a manual vehicle, all A2 segment motorcycles can be used without a gear restriction.",
        ],
        requirementsTitle: "Application Requirements",
        requirements: [
          "At least primary school graduation.",
          "A valid driver health report obtained from authorized institutions.",
          "No convictions for crimes that create a legal obstacle for driver licensing.",
          "To be at least 18 years old on the date of the exam.",
        ],
        documentsTitle: "Required Documents",
        documents: [
          "Photocopy of T.C. ID card.",
          "4 biometric photographs.",
          "Sample of education certificate (schooling document).",
          "Driver health report.",
          "Criminal record declaration.",
          "Photocopy of the current driving license, if any.",
        ],
        processTitle: "Exam & Training Process",
        process: [
          "For candidates who will obtain a license from scratch: Theory training and e-Exam process are available (70 points pass line).",
          "Candidates who already have a different license class are exempt from the theoretical exam.",
          "Manual A2 motorcycle training is provided, including clutch and gear control mastery.",
          "The process is completed when the track and flowing traffic practical driving exam is successfully completed.",
        ],
      }
    : {
        pageTitle: "A2 Sınıfı Manuel Motosiklet Ehliyeti Rehberi",
        badge: "A2 Manuel Ehliyet",
        title: "A2 Sınıfı Manuel Motosiklet Ehliyeti (A2 Manuel)",
        intro:
          "A2 Manuel ehliyet, tüm A2 sınıfı motosiklet tiplerini (hem manuel hem otomatik) özgürce kullanmak isteyen sürücü adayları için ideal bir tercihtir.",
        stats: [
          { label: "Yaş şartı", value: "18" },
          { label: "Azami güç", value: "35 kW" },
          { label: "Güç oranı", value: "0,2 kW/kg" },
          { label: "Kullanım özgürlüğü", value: "Manuel + Otomatik" },
        ],
        sideTitle: "Kullanım Yetkisi ve Kapsamı",
        scope: [
          "Gücü azami 35 kW (47 HP) ve güç/ağırlık oranı 0,2 kW/kg'ı aşmayan; hem manuel (vitesli) hem de otomatik tüm A2 motosikletlerini kapsar.",
          "M ve A1 sınıfı (manuel ve otomatik) araçları kullanma yetkisi sağlar.",
          "Sınav manuel vitesli araçla tamamlandığı için vites kısıtlaması olmadan tüm A2 segmenti motosikletler kullanılabilir.",
        ],
        generalTitle: "Genel Özellikler",
        general: [
          "Yaş sınırı: En az 18 yaşını doldurmuş olmak.",
          "Kullanım yetkisi: Gücü azami 35 kW (47 HP) ve güç/ağırlık oranı 0,2 kW/kg'ı aşmayan hem manuel (vitesli) hem de otomatik tüm A2 motosikletleri kapsar.",
          "Kapsadığı diğer sınıflar: M ve A1 sınıfı (manuel ve otomatik) araçları kullanma yetkisi sağlar.",
          "Kullanım özgürlüğü: Sınav manuel vitesli araçla tamamlandığı için vites kısıtlaması olmadan tüm A2 segmenti motosikletler kullanılabilir.",
        ],
        requirementsTitle: "Başvuru Şartları",
        requirements: [
          "En az ilkokul mezuniyeti.",
          "Yetkili kurumlardan alınan sürücü sağlık raporu.",
          "Yasal engel oluşturacak suçlardan hüküm giymemiş olmak.",
          "Sınav tarihinde en az 18 yaşını doldurmuş olmak.",
        ],
        documentsTitle: "Gerekli Belgeler",
        documents: [
          "T.C. kimlik kartı fotokopisi.",
          "4 adet biyometrik fotoğraf.",
          "Öğrenim belgesi örneği.",
          "Sağlık raporu.",
          "Adli sicil kaydı beyanı.",
          "Varsa mevcut sürücü belgesi fotokopisi.",
        ],
        processTitle: "Sınav ve Eğitim Süreci",
        process: [
          "Sıfırdan ehliyet alacaklar için teorik eğitim ve e-Sınav süreci (70 puan sınırı) mevcuttur.",
          "Farklı bir ehliyet sınıfına sahip adaylar teorik sınavdan muaftır.",
          "Debriyaj ve vites hakimiyetini kapsayan manuel A2 motosiklet eğitimi verilir.",
          "Parkur ve akan trafik uygulama sınavı başarıyla tamamlandığında süreç sona erer.",
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
  @media (max-width:991px){ .guide-hero-card{grid-template-columns:1fr;padding:1.5rem}.guide-panel{padding:1.5rem} }
  @media (max-width:767px){ .guide-stats{grid-template-columns:1fr} .license-guide-page{padding:30px 0 60px} }
`;

export default A2ManualLicensePage;
