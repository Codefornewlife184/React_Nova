/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

const ContactMap = () => {
  return (
    <iframe
      className="contact-map-iframe"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3002.9183851769335!2d28.743193873758212!3d41.17994728174834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caabe85a30fc7b%3A0xda93904cc2826ce7!2sArnavutk%C3%B6y%20Merkez%2C%20Eski%20Edirne%20Cd.%20No%3A1197%2C%2034275%20Arnavutk%C3%B6y%2F%C4%B0stanbul!5e0!3m2!1sen!2str!4v1789227935557!5m2!1sen!2str"
      title="Özel Nova Sürücü Kursu Harita"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      style={{
        border: 0,
        width: "100%",
        height: "450px",
        display: "block",
        pointerEvents: "auto",
      }}
    ></iframe>
  );
};

export default ContactMap;
