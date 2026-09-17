import React from "react";

function Question() {
  return (
    <section class="faq-one">
      <div
        class="faq-one__bg faq-one__bg--1"
        style={{
          backgroundImage: "url(assets/images/fact.png)",
        }}
      ></div>
      <div
        class="faq-one__bg faq-one__bg--2"
        style={{
          backgroundImage: "url(assets/images/fact.png)",
        }}
      ></div>
      <div
        class="faq-one__bg faq-one__bg--3 active"
        style={{
          backgroundImage: "url(assets/images/fact.png)",
        }}
      ></div>
      <div class="container">
        <div class="row">
          <div
            class="col-lg-4 faq-one__col wow fadeInDown"
            data-wow-duration="1500ms"
            data-wow-delay="00ms"
          >
            <div class="faq-one__item">
              <div class="faq-one__content">
                <div
                  class="faq-one__content__bg"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/faq-shape-bg-1-1.png)",
                  }}
                ></div>
                <h4 class="faq-one__title">İletişim</h4>
                <span class="faq-one__content__icon"></span>
              </div>
              <div class="faq-one__hover">
                <div
                  class="faq-one__hover__bg"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/faq-shape-bg-1-1.png)",
                  }}
                ></div>
                <div class="faq-one__hover__inner">
                  <div class="faq-one__hover__top-icon"></div>
                  <div class="faq-one__hover__icon">
                    <span class="icon-phone-call"></span>
                  </div>
                  <h4 class="faq-one__hover__title faq-one__title">İletişim</h4>
                  <p class="faq-one__hover__text">
                    <a
                      href="tel:+902243601166"
                      class="contact-info__contact-list__link"
                    >
                      (0224) 360 1166
                    </a>
                  </p>
                  <p class="faq-one__hover__text">
                    <a
                      href="tel:+902243611610"
                      class="contact-info__contact-list__link"
                    >
                      (0224) 361 1610
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 faq-one__col wow fadeInDown"
            data-wow-duration="1500ms"
            data-wow-delay="200ms"
          >
            <div class="faq-one__item">
              <div class="faq-one__content">
                <div
                  class="faq-one__content__bg"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/faq-shape-bg-1-1.png)",
                  }}
                ></div>
                <h4 class="faq-one__title">E-Mail</h4>
                <span class="faq-one__content__icon"></span>
              </div>
              <div class="faq-one__hover">
                <div
                  class="faq-one__hover__bg"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/faq-shape-bg-1-1.png)",
                  }}
                ></div>
                <div class="faq-one__hover__inner">
                  <div class="faq-one__hover__top-icon"></div>
                  <div class="faq-one__hover__icon">
                    <span class="icon-paper-plane"></span>
                  </div>
                  <h4 class="faq-one__hover__title faq-one__title">E-Mail</h4>
                  <p class="faq-one__hover__text">
                    <a
                      href="mailto:info@indizayn.com.tr"
                      class="contact-info__contact-list__link"
                      style={{ textTransform: "lowercase" }}
                    >
                      info@indizayn.com.tr
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 faq-one__col wow fadeInDown"
            data-wow-duration="1500ms"
            data-wow-delay="400ms"
          >
            <div class="faq-one__item">
              <div class="faq-one__content">
                <div
                  class="faq-one__content__bg"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/faq-shape-bg-1-1.png)",
                  }}
                ></div>
                <h4 class="faq-one__title">Adres</h4>
                <span class="faq-one__content__icon"></span>
              </div>
              <div class="faq-one__hover">
                <div
                  class="faq-one__hover__bg"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/faq-shape-bg-1-1.png)",
                  }}
                ></div>
                <div class="faq-one__hover__inner">
                  <div class="faq-one__hover__top-icon"></div>
                  <div class="faq-one__hover__icon">
                    <span class="icon-maps-and-flags"></span>
                  </div>
                  <h4 class="faq-one__hover__title faq-one__title">Adres</h4>
                  <p class="faq-one__hover__text">
                    Duaçınarı Mh. Samanlı Cd. <br/> 6. Pınar Sk. No : 1-3/1 Yıldırım / Bursa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Question;
