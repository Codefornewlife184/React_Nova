import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const PHONE_REGEX = /^[+\d\s()-]{7,20}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const DEFAULT_API_URL = "/api/send-mail.php";

const ContactForm = () => {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === "en";

  const apiUrl =
    (process.env.REACT_APP_CONTACT_API_URL || "").trim() || DEFAULT_API_URL;

  const content = useMemo(
    () =>
      isEnglish
        ? {
            title: "Contact Form",
            name: "Your Name",
            phone: "Your Phone Number",
            email: "Your Email Address",
            subject: "Subject",
            message: "Your Message",
            messagePlaceholder: "Write your message here",
            submit: "Send Message",
            sending: "Sending...",
            success:
              "Your message has been sent successfully. We will get back to you as soon as possible.",
            error:
              "An error occurred while sending your message. Please try again in a moment or contact us directly by phone.",
            validationName: "Please enter your name.",
            validationPhone: "Please enter a valid phone number.",
            validationEmail: "Please enter a valid email address.",
            validationSubject: "Please enter a subject.",
            validationMessage: "Please enter your message (at least 10 characters).",
            networkError:
              "Connection error. Please check the endpoint URL or contact your administrator.",
          }
        : {
            title: "İletişim Formu",
            name: "Adınız",
            phone: "Telefon Numaranız",
            email: "E-posta Adresiniz",
            subject: "Konu",
            message: "Mesajınız",
            messagePlaceholder: "Mesajınızı buraya yazın",
            submit: "Mesajı Gönder",
            sending: "Gönderiliyor...",
            success:
              "Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.",
            error:
              "Mesajınız gönderilirken bir hata oluştu. Lütfen biraz sonra tekrar deneyin veya doğrudan telefonla iletişime geçin.",
            validationName: "Lütfen adınızı girin.",
            validationPhone: "Lütfen geçerli bir telefon numarası girin.",
            validationEmail: "Lütfen geçerli bir e-posta adresi girin.",
            validationSubject: "Lütfen bir konu girin.",
            validationMessage: "Lütfen mesajınızı girin (en az 10 karakter).",
            networkError:
              "Bağlantı hatası. Lütfen endpoint adresini kontrol edin veya yöneticinizle iletişime geçin.",
          },
    [isEnglish]
  );

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [statusText, setStatusText] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    if (status !== "idle") setStatus("idle");
  };

  const validate = () => {
    const next = {};
    const name = formData.name.trim();
    const phone = formData.phone.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (!name) next.name = content.validationName;
    if (!phone || !PHONE_REGEX.test(phone)) next.phone = content.validationPhone;
    if (!email || !EMAIL_REGEX.test(email)) next.email = content.validationEmail;
    if (!subject) next.subject = content.validationSubject;
    if (!message || message.length < 10) next.message = content.validationMessage;

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (status === "sending") return;
    if (!validate()) return;

    setStatus("sending");
    setStatusText(content.sending);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000);

    try {
      const payload = {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        lang: i18n.language || "tr",
        page: typeof window !== "undefined" ? window.location.href : "",
      };

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      let data = null;
      try {
        data = await response.json();
      } catch (_) {
        data = null;
      }

      if (response.ok && data && data.ok) {
        setStatus("success");
        setStatusText(data.message || content.success);
        setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setStatusText(
          (data && data.message) || content.error
        );
      }
    } catch (err) {
      clearTimeout(timeoutId);
      const aborted = err && err.name === "AbortError";
      setStatus("error");
      setStatusText(aborted ? content.networkError : content.error);
    }
  };

  const inputErrorCls = (key) =>
    errors[key] ? "1px solid #dc3545" : "1px solid rgba(35, 31, 32, 0.12)";

  return (
    <>
      <div className="contact-form-card">
        <div className="contact-form-head">
          <span>{content.title}</span>
          <h3>{content.title}</h3>
        </div>

        {status === "success" && (
          <div className="contact-form-alert contact-form-alert--success" role="status">
            {statusText || content.success}
          </div>
        )}
        {status === "error" && (
          <div className="contact-form-alert contact-form-alert--error" role="alert">
            {statusText || content.error}
          </div>
        )}

        <form onSubmit={onSubmit} noValidate>
          <div className="row g-4">
            <div className="col-md-6">
              <label className="contact-form-label" htmlFor="contact-name">
                {content.name}
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                className="contact-form-input"
                placeholder={content.name}
                autoComplete="name"
                value={formData.name}
                onChange={onChange}
                required
                disabled={status === "sending"}
                style={{ borderColor: inputErrorCls("name") }}
              />
              {errors.name && (
                <div className="contact-form-field-error">{errors.name}</div>
              )}
            </div>

            <div className="col-md-6">
              <label className="contact-form-label" htmlFor="contact-phone">
                {content.phone}
              </label>
              <input
                id="contact-phone"
                type="tel"
                name="phone"
                className="contact-form-input"
                placeholder={content.phone}
                autoComplete="tel"
                value={formData.phone}
                onChange={onChange}
                required
                disabled={status === "sending"}
                style={{ borderColor: inputErrorCls("phone") }}
              />
              {errors.phone && (
                <div className="contact-form-field-error">{errors.phone}</div>
              )}
            </div>

            <div className="col-md-6">
              <label className="contact-form-label" htmlFor="contact-email">
                {content.email}
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                className="contact-form-input"
                placeholder={content.email}
                autoComplete="email"
                value={formData.email}
                onChange={onChange}
                required
                disabled={status === "sending"}
                style={{ borderColor: inputErrorCls("email") }}
              />
              {errors.email && (
                <div className="contact-form-field-error">{errors.email}</div>
              )}
            </div>

            <div className="col-md-6">
              <label className="contact-form-label" htmlFor="contact-subject">
                {content.subject}
              </label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                className="contact-form-input"
                placeholder={content.subject}
                autoComplete="off"
                value={formData.subject}
                onChange={onChange}
                required
                disabled={status === "sending"}
                style={{ borderColor: inputErrorCls("subject") }}
              />
              {errors.subject && (
                <div className="contact-form-field-error">{errors.subject}</div>
              )}
            </div>

            <div className="col-12">
              <label className="contact-form-label" htmlFor="contact-message">
                {content.message}
              </label>
              <textarea
                id="contact-message"
                name="message"
                className="contact-form-textarea"
                placeholder={content.messagePlaceholder}
                required
                rows="6"
                value={formData.message}
                onChange={onChange}
                disabled={status === "sending"}
                style={{ borderColor: inputErrorCls("message") }}
              />
              {errors.message && (
                <div className="contact-form-field-error">{errors.message}</div>
              )}
            </div>

            <div className="col-12">
              <div className="contact-form-submit-wrap">
                <button
                  type="submit"
                  className="contact-form-submit"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? content.sending : content.submit}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <style>{`
        .contact-form-card {
          background: #ffffff;
          border: 1px solid rgba(35, 31, 32, 0.08);
          border-radius: 28px;
          box-shadow: 0 18px 44px rgba(35, 31, 32, 0.08);
          padding: 2rem;
        }

        .contact-form-head {
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .contact-form-head span {
          display: inline-flex;
          padding: 0.45rem 0.95rem;
          border-radius: 999px;
          background: rgba(190, 171, 116, 0.16);
          color: #231f20;
          font-weight: 600;
          margin-bottom: 0.8rem;
        }

        .contact-form-head h3 {
          color: #231f20;
          margin-bottom: 0;
          font-size: clamp(1.6rem, 3vw, 2.2rem);
        }

        .contact-form-alert {
          border-radius: 16px;
          padding: 0.9rem 1rem;
          margin-bottom: 1.25rem;
          font-weight: 600;
          line-height: 1.6;
        }

        .contact-form-alert--success {
          background: rgba(25, 135, 84, 0.1);
          color: #198754;
          border: 1px solid rgba(25, 135, 84, 0.25);
        }

        .contact-form-alert--error {
          background: rgba(220, 53, 69, 0.08);
          color: #b02a37;
          border: 1px solid rgba(220, 53, 69, 0.22);
        }

        .contact-form-submit-wrap {
          display: flex;
          justify-content: center;
        }

        .contact-form-label {
          display: block;
          margin-bottom: 0.6rem;
          color: #231f20;
          font-weight: 600;
        }

        .contact-form-input,
        .contact-form-textarea {
          width: 100%;
          border-radius: 16px;
          background: #f8f8f8;
          padding: 0.95rem 1rem;
          color: #231f20;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }

        .contact-form-input:disabled,
        .contact-form-textarea:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .contact-form-input:focus,
        .contact-form-textarea:focus {
          outline: none;
          border-color: #beab74 !important;
          box-shadow: 0 0 0 4px rgba(190, 171, 116, 0.14);
          background: #ffffff;
        }

        .contact-form-field-error {
          margin-top: 0.4rem;
          font-size: 0.85rem;
          color: #b02a37;
          font-weight: 600;
        }

        .contact-form-submit {
          min-width: min(100%, 260px);
          min-height: 58px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #beab74;
          background: #beab74;
          color: #231f20;
          border-radius: 999px;
          padding: 0.95rem 1.75rem;
          font-weight: 700;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .contact-form-submit:hover:not(:disabled),
        .contact-form-submit:focus:not(:disabled) {
          background: #231f20;
          color: #beab74;
          border-color: #231f20;
        }

        .contact-form-submit:disabled {
          opacity: 0.75;
          cursor: not-allowed;
        }

        @media (max-width: 767px) {
          .contact-form-card {
            padding: 1.4rem;
          }
        }
      `}</style>
    </>
  );
};

export default ContactForm;
