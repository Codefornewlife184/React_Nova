import React from "react";

function PageHeader(props) {
const headerStyle = {
  ...(props.backgroundImage
    ? {
        backgroundImage: `url(${props.backgroundImage})`,
      }
    : {}),
  ...(props.backgroundPosition
    ? {
        backgroundPosition: props.backgroundPosition,
      }
    : {}),
};

const headerClassName = ["about-main-content", props.className]
  .filter(Boolean)
  .join(" ");

return (
<>
  <div className={headerClassName} style={headerStyle}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="content">
            <h2 className="page-title">{props.title}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style>{`
    .about-main-content {
      width: 100vw;
      margin-left: calc(50% - 50vw);
      margin-right: calc(50% - 50vw);
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      padding: 200px 0 100px 0;
    }

    .about-main-content .content {
      padding: 48px 28px;
    }

    .about-main-content.page-header--contact {
      padding: 280px 0 170px 0;
    }

    .page-title {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      font-weight: 700;
    }

    .page-subtitle {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    .page-description {
      font-size: clamp(0.8rem, 2.5vw, 1rem);
      margin-bottom: 1.5rem;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
    }

    .page-breadcrumb {
      margin-bottom: 0;
      font-size: 1rem;
    }

    .breadcrumb-link {
      color: white; /* Link rengi */
      text-decoration: none !important;
      outline: none;
      box-shadow: none;
      transition: color 0.3s ease;
    }

    .breadcrumb-link:hover,
    .breadcrumb-link:focus,
    .breadcrumb-link:active {
      color: rgba(255, 255, 255, 0.8); /* Hover rengi */
      text-decoration: none !important;
      outline: none;
      box-shadow: none;
    }

    .breadcrumb-separator {
      color: white; /* Ayraç rengi */
      margin: 0 0.5rem;
    }

    .main-button a {
      font-size: 1rem;
      padding: 0.5rem 1.5rem;
    }

    @media (max-width: 992px) {
      .about-main-content {
        padding: 145px 0 35px 0;
      }

      .about-main-content.page-header--contact {
        padding: 220px 0 90px 0;
      }

      .about-main-content .content {
        padding: 40px 24px;
      }

      .page-title {
        font-size: 2.2rem;
      }
    }

    @media (max-width: 768px) {
      .about-main-content {
        padding: 160px 0 28px 0;
      }

      .about-main-content.page-header--contact {
        padding: 185px 0 70px 0;
      }

      .about-main-content .content {
        padding: 28px 20px;
      }

      .page-title {
        font-size: 2rem;
      }
    }

    @media (max-width: 576px) {
      .page-title {
        font-size: 1.8rem;
      }
    }
  `}</style>
</>
);
}

export default PageHeader;
