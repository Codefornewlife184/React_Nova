import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaComments, FaRegClock, FaUserShield } from "react-icons/fa";
import PageHeader from "../Components/common/PageHeader";

function DrivingFaqPage({ showPageHeader = true }) {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === "en";

  const content = isEnglish
    ? {
        title: "Frequently Asked Questions",
        introTitle: "The Most Asked Questions Before Registration",
        introText:
          "We gathered the most common questions about registration, lessons, exams and license classes on one page for you.",
        badges: [
          { icon: <FaComments />, text: "Clear Guidance" },
          { icon: <FaRegClock />, text: "Fast Response" },
          { icon: <FaUserShield />, text: "Reliable Process" }
        ],
        questions: [
          {
            title: "Which license class should I choose?",
            text: "A1 and A2 are suitable for motorcycle candidates, while B Manual and B Automatic are suitable for car candidates. Our team helps you choose according to your goal and age."
          },
          {
            title: "Can I drive manual vehicles with B Automatic?",
            text: "No. B Automatic license is valid only for automatic vehicles. B Manual allows you to drive both manual and automatic vehicles."
          },
          {
            title: "How long does the registration process take?",
            text: "Once your documents are complete, registration starts quickly. Lesson and exam planning is shared with you after file approval."
          },
          {
            title: "Can I start if I have never driven before?",
            text: "Yes. We offer a patient and step-by-step training process for candidates with little or no traffic experience."
          },
          {
            title: "How many hours are driver lessons in total?",
            text: "Theoretical training consists of Traffic and Environment, First Aid, Vehicle Technique and Traffic Etiquette lessons. Total hours may vary by class, but the full program is shared clearly during registration."
          },
          {
            title: "How many times can I take the license exams if I fail?",
            text: "Candidates have multiple rights for both e-exam and driving test. If one right is lost, new planning is made according to the official calendar."
          },
          {
            title: "How many questions are asked in the license exam?",
            text: "The e-exam consists of 50 questions prepared from topics such as traffic, first aid, vehicle technique and traffic etiquette."
          },
          {
            title: "How many correct answers are required to pass the exam?",
            text: "You need at least 70 points to pass. This means answering a sufficient number of questions correctly in the 50-question exam."
          },
          {
            title: "Do wrong answers cancel out correct ones in the exam?",
            text: "No. Wrong answers do not deduct points from correct answers in the driver license e-exam."
          },
          {
            title: "How long is the exam?",
            text: "The e-exam duration is generally 45 minutes. Your exact exam information is shown on your entry document."
          },
          {
            title: "What should I do after passing the e-exam and driving exam?",
            text: "After successfully completing both stages, your file process is finalized and you can proceed with official license issuance procedures through the relevant institutions."
          },
          {
            title: "What is the passing score for the e-exam?",
            text: "The passing threshold is 70 points out of 100."
          },
          {
            title: "If I already have a license, do I still take the written exam for another class?",
            text: "Candidates who already hold a license may be exempt from the theoretical exam in class upgrade processes, depending on the class they apply for."
          },
          {
            title: "Is a driver certificate enough without issuing the physical license?",
            text: "No. You must complete the official issuance procedures to gain the legal right to drive with that class."
          },
          {
            title: "Where are the e-exam and driving exams held?",
            text: "E-exams are held in official e-exam centers, while driving exams are conducted on the designated route and traffic area announced for your course."
          },
          {
            title: "Where can I get the driver health report?",
            text: "The report can be obtained from family physicians, public hospitals or authorized health institutions depending on your condition."
          },
          {
            title: "Who are the members of the driving test commission?",
            text: "The commission is formed by qualified instructors and officials appointed by the relevant education authorities."
          },
          {
            title: "Do I have an absence limit in driver lessons?",
            text: "Yes. There is a limited absence right in theoretical lessons. Your attendance status is tracked according to regulations."
          },
          {
            title: "Can primary school graduates get a license?",
            text: "Applicants must meet the minimum education requirement defined for the license process. The current valid graduation condition is checked during registration."
          },
          {
            title: "What is a probationary driver's license?",
            text: "After receiving a new license, drivers are evaluated under the probationary system for a certain period. Serious repeated traffic violations in this period may lead to sanctions."
          },
          {
            title: "Do license prices and fees change every year?",
            text: "Yes. Official fees and some process costs may change yearly. The most current payment information is shared during registration."
          },
          {
            title: "Do I need to pay an extra certificate fee after passing the exam?",
            text: "If the required official payments and course process costs are completed, no unexpected extra payment is requested outside the planned procedure."
          },
          {
            title: "What happens if I arrive late to the driving exam?",
            text: "It is very important to be at the exam point before the announced time. Late arrival may cause the exam right to be lost for that session."
          },
          {
            title: "How is the driving exam scored?",
            text: "The exam is evaluated according to the official assessment form. Critical mistakes, repeated errors and overall vehicle control are all taken into account."
          },
          {
            title: "When can I learn the result of my driving exam?",
            text: "Results are usually clarified on the same day and shared with you by your course after official processing."
          },
          {
            title: "Where can I get my driving exam entry document?",
            text: "Your entry information is provided by your registered driving course."
          },
          {
            title: "How does license renewal work?",
            text: "For renewal, you generally need a new biometric photo, identity card, health report if required, fee payment and an appointment through the relevant official institution. The exact process may vary depending on the reason for renewal."
          }
        ]
      }
    : {
        title: "Sıkça Sorulan Sorular",
        introTitle: "Kayıt Öncesi En Çok Merak Edilen Konular",
        introText:
          "Kayıt, eğitim, sınav ve ehliyet sınıfı seçimiyle ilgili en çok sorulan soruları sizin için tek sayfada topladık.",
        badges: [
          { icon: <FaComments />, text: "Net Bilgilendirme" },
          { icon: <FaRegClock />, text: "Hızlı Yanıt" },
          { icon: <FaUserShield />, text: "Güvenli Süreç" }
        ],
        questions: [
          {
            title: "Hangi ehliyet sınıfını seçmeliyim?",
            text: "Motosiklet kullanmak isteyen adaylar için A1 ve A2, otomobil kullanmak isteyen adaylar için B Manuel ve B Otomatik sınıfları uygundur. Yaşınıza ve hedefinize göre ekibimiz sizi doğru sınıfa yönlendirir."
          },
          {
            title: "B Otomatik ehliyeti ile manuel araç kullanabilir miyim?",
            text: "Hayır. B Otomatik ehliyeti sadece otomatik vitesli araçlar için geçerlidir. B Manuel ehliyeti ise hem manuel hem otomatik araç kullanımına imkan tanır."
          },
          {
            title: "Kayıt süreci ne kadar sürer?",
            text: "Belgeleriniz eksiksiz olduğunda kayıt işlemleri hızlı şekilde başlatılır. Dosya onayı sonrası ders ve sınav planlamanız sizinle paylaşılır."
          },
          {
            title: "Hiç araç kullanmadıysam yine de eğitim alabilir miyim?",
            text: "Evet. Trafik tecrübesi olmayan adaylar için temel seviyeden başlayan, sabırlı ve adım adım ilerleyen bir eğitim süreci sunuyoruz."
          },
          {
            title: "Ehliyet dersleri toplam kaç saattir?",
            text: "Teorik eğitim; trafik, ilk yardım, araç tekniği ve trafik adabı derslerinden oluşur. Toplam ders süresi alınacak ehliyet sınıfına göre planlanır ve kayıt sırasında size net olarak aktarılır."
          },
          {
            title: "Ehliyet sınavlarından başarısız olduğumda kaç kez sınava girebilirim?",
            text: "Hem e-sınav hem de direksiyon sınavı için adaylara birden fazla hak tanınır. Başarısız olunan durumda yeni planlama resmi takvime göre yapılır."
          },
          {
            title: "Ehliyet sınavında toplam kaç soru sorulur?",
            text: "E-sınavda trafik, ilk yardım, araç tekniği ve trafik adabı konularından oluşan toplam 50 soru yer alır."
          },
          {
            title: "Ehliyet sınavında toplamda kaç doğru soru çözmem gerekiyor?",
            text: "Başarılı sayılabilmek için sınavdan en az 70 puan almanız gerekir. Bu da 50 soruluk sınavda yeterli sayıda doğru cevap vermeniz anlamına gelir."
          },
          {
            title: "Ehliyet sınavında yanlış cevaplar doğruları götürür mü?",
            text: "Hayır. Ehliyet e-sınavında yanlış cevaplar doğru cevapları etkilemez."
          },
          {
            title: "Ehliyet sınav süresi ne kadardır?",
            text: "E-sınav süresi genel olarak 45 dakikadır. Kesin süre bilgisi sınav giriş belgenizde yer alır."
          },
          {
            title: "E-sınavı ve direksiyon sınavını geçtim, bundan sonra ne yapmam gerekiyor?",
            text: "Her iki aşamayı da başarıyla tamamladıktan sonra dosya işlemleriniz sonuçlanır ve resmi ehliyet çıkarma sürecine geçebilirsiniz."
          },
          {
            title: "E-Sınav başarı puan barajı kaçtır?",
            text: "Başarı puan barajı 100 üzerinden 70 puandır."
          },
          {
            title: "Ehliyetim var. Başka ehliyet alsam sınava girer miyim?",
            text: "Mevcut ehliyeti olan adaylar, başvurdukları sınıfa göre teorik sınavdan muaf olabilir. Bu durum fark ehliyeti süreçlerinde değişiklik gösterir."
          },
          {
            title: "Ehliyet belgesini almadan sürücü sertifikası yeterli olur mu?",
            text: "Hayır. Yasal olarak araç kullanabilmek için resmi ehliyet çıkarma işleminin tamamlanmış olması gerekir."
          },
          {
            title: "E-Sınav ve direksiyon sınavları nerede yapılır?",
            text: "E-sınavlar resmi e-sınav merkezlerinde, direksiyon sınavları ise kursunuz için belirlenen resmi güzergah ve trafik alanında yapılır."
          },
          {
            title: "Sürücü olur raporu, sağlık raporu nereden alınır?",
            text: "Sağlık raporu aile hekiminden, devlet hastanelerinden veya yetkili sağlık kuruluşlarından alınabilir. Gerekli durumlarda heyet değerlendirmesi istenebilir."
          },
          {
            title: "Direksiyon sınavında komisyon üyeleri kimlerden oluşur?",
            text: "Komisyon, ilgili eğitim otoriteleri tarafından görevlendirilen yeterliliğe sahip öğretmen ve sınav görevlilerinden oluşur."
          },
          {
            title: "Ehliyet derslerinde devamsızlık hakkım var mı?",
            text: "Evet. Teorik eğitimlerde mevzuatın izin verdiği ölçüde sınırlı devamsızlık hakkı bulunur. Devam durumu kurs tarafından takip edilir."
          },
          {
            title: "İlkokul mezunları ehliyet alabilir mi?",
            text: "Başvuru yapan adayların yürürlükteki mevzuatta belirtilen asgari eğitim şartını sağlaması gerekir. Güncel mezuniyet şartı kayıt sırasında kontrol edilir."
          },
          {
            title: "Stajyer ehliyet nedir?",
            text: "Yeni alınan ehliyetlerde sürücüler belirli bir süre stajyer sürücü sistemi kapsamında değerlendirilir. Bu süreçte ciddi ve tekrarlayan ihlaller yaptırım doğurabilir."
          },
          {
            title: "Ehliyet belgesi fiyatları ve harçları her yıl değişir mi?",
            text: "Evet. Resmi harçlar ve bazı işlem bedelleri yıllara göre değişebilir. En güncel ücret bilgisi kayıt sırasında sizinle paylaşılır."
          },
          {
            title: "Ehliyet sınavını kazandım, sürücü kursuna ekstra sertifika parası vermek zorunda mıyım?",
            text: "Planlanan kurs süreci ve resmi ödemeler tamamlandığında, bunun dışında sürpriz bir ek ücret talep edilmez. Güncel ödeme kalemleri baştan açık şekilde belirtilir."
          },
          {
            title: "Direksiyon sınavına geç kalırsam ne olur?",
            text: "Sınav yerinde belirtilen saatten önce hazır bulunmanız gerekir. Gecikme durumunda o oturumdaki sınav hakkınız yanabilir."
          },
          {
            title: "Direksiyon sınavı puanlaması nasıl olur?",
            text: "Direksiyon sınavı resmi değerlendirme formuna göre puanlanır. Kritik hatalar, tekrar eden yanlışlar ve genel araç hakimiyeti birlikte değerlendirilir."
          },
          {
            title: "Ehliyet direksiyon sınav sonuçlarını ne zaman öğrenebilirim?",
            text: "Sonuçlar çoğunlukla aynı gün netleşir ve resmi işlem sonrası kursunuz tarafından size bildirilir."
          },
          {
            title: "Direksiyon sınavı giriş belgesini nereden alabilirim?",
            text: "Sınav giriş bilgileriniz kayıtlı olduğunuz sürücü kursu tarafından size ulaştırılır."
          },
          {
            title: "Ehliyet yenileme nasıl olur?",
            text: "Ehliyet yenileme işlemlerinde genellikle yeni biyometrik fotoğraf, kimlik belgesi, gerekiyorsa sağlık raporu, harç ödemesi ve ilgili kurumdan randevu gerekir. Yenileme nedeni ve belge durumuna göre süreç değişebilir."
          }
        ]
      };

  return (
    <>
      {showPageHeader && <PageHeader title={content.title} />}

      <Container className="faq-page py-5">
        {!showPageHeader && (
          <Row className="mb-5 justify-content-center">
            <Col lg={10}>
              <div className="faq-inline-heading">
                <h2>{content.title}</h2>
                <p>{content.introText}</p>
              </div>
            </Col>
          </Row>
        )}

        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <div className="faq-intro-card">
              <h2>{content.introTitle}</h2>
              <p>{content.introText}</p>
              <div className="faq-badge-list">
                {content.badges.map((badge) => (
                  <div key={badge.text} className="faq-badge-item">
                    <span>{badge.icon}</span>
                    {badge.text}
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={10}>
            <Accordion defaultActiveKey="0" className="faq-accordion">
              {content.questions.map((item, index) => (
                <Accordion.Item eventKey={String(index)} key={item.title}>
                  <Accordion.Header>{item.title}</Accordion.Header>
                  <Accordion.Body>{item.text}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>

      <style>{`
        .faq-inline-heading {
          text-align: center;
        }

        .faq-inline-heading h2 {
          color: #231f20;
          font-size: clamp(2rem, 4vw, 3.05rem);
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .faq-inline-heading p {
          max-width: 820px;
          margin: 0 auto;
          color: #9b9899;
          line-height: 1.8;
          font-size: 1.05rem;
        }

        .faq-intro-card {
          padding: 2rem;
          background: linear-gradient(135deg, #231f20, #beab74);
          border-radius: 24px;
          color: #ffffff;
          box-shadow: 0 18px 45px rgba(35, 31, 32, 0.14);
        }

        .faq-intro-card h2 {
          color: #ffffff;
          margin-bottom: 0.9rem;
        }

        .faq-intro-card p {
          color: rgba(255, 255, 255, 0.82);
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .faq-badge-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.9rem;
        }

        .faq-badge-item {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.75rem 1rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.12);
          font-weight: 600;
        }

        .faq-badge-item span {
          display: inline-flex;
        }

        .faq-accordion .accordion-item {
          overflow: hidden;
          border: 1px solid rgba(35, 31, 32, 0.08);
          border-radius: 18px !important;
          margin-bottom: 1rem;
          box-shadow: 0 10px 28px rgba(35, 31, 32, 0.06);
        }

        .faq-accordion .accordion-button {
          --bs-accordion-btn-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23231f20' stroke-linecap='round' stroke-linejoin='round'%3e%3cpath d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
          --bs-accordion-btn-active-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23231f20' stroke-linecap='round' stroke-linejoin='round'%3e%3cpath d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
          padding: 1.25rem 1.4rem;
          font-weight: 700;
          color: #231f20;
          background: #ffffff;
          box-shadow: none;
        }

        .faq-accordion .accordion-button::after {
          filter: none;
          opacity: 1;
        }

        .faq-accordion .accordion-button:not(.collapsed) {
          color: #231f20;
          background: rgba(35, 31, 32, 0.04);
        }

        .faq-accordion .accordion-body {
          color: #5a5a5a;
          line-height: 1.8;
          padding: 1.25rem 1.4rem 1.5rem;
        }

        @media (max-width: 991px) {
          .faq-inline-heading {
            margin-bottom: -0.25rem;
          }

          .faq-intro-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}

export default DrivingFaqPage;
