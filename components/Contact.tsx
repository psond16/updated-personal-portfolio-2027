
"use client";

import type { FormEvent } from "react";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = `Portfolio Inquiry from ${name}`;

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      phone ? `Phone: ${phone}` : null,
      "",
      "Message:",
      message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const mailtoUrl =
      `mailto:parineetsond16@gmail.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  }

  return (
    <section id="contact" className={styles.contact}>
      {/* LEFT SIDE */}

      <div className={styles.contactInfo}>
        <p className={styles.eyebrow}>
          GET IN TOUCH
        </p>

        <h2 className={styles.title}>
          Let&apos;s
          <br />
          Connect.
        </h2>

        <p className={styles.description}>
          Open to engineering opportunities, new ideas,
          collaborations, and conversations.
        </p>

        {/* CONTACT LINKS */}

        <div className={styles.contactLinks}>
          <a
            href="mailto:parineetsond16@gmail.com"
            className={styles.contactLink}
          >
            <span className={styles.linkIcon} aria-hidden="true">
              ✉
            </span>

            <span>parineetsond16@gmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/parineetsond"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            <span
              className={`${styles.linkIcon} ${styles.linkedinIcon}`}
              aria-hidden="true"
            >
              in
            </span>

            <span>linkedin.com/in/parineetsond</span>
          </a>

          <a
            href="https://github.com/psond16"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            <span className={styles.linkIcon} aria-hidden="true">
              ⌘
            </span>

            <span>github.com/psond16</span>
          </a>
        </div>
      </div>

      {/* RIGHT SIDE — CONTACT FORM */}

      <div className={styles.formCard}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGrid}>
            <div className={styles.field}>
              <label htmlFor="contact-name">
                Name <span className={styles.required}>*</span>
              </label>

              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-company">
                Company (optional)
              </label>

              <input
                id="contact-company"
                name="company"
                type="text"
                autoComplete="organization"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-email">
                Email <span className={styles.required}>*</span>
              </label>

              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-phone">
                Phone (optional)
              </label>

              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
              />
            </div>

            <div className={`${styles.field} ${styles.messageField}`}>
              <label htmlFor="contact-message">
                Message <span className={styles.required}>*</span>
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className={styles.submitButton}
          >
            Send Message
          </button>

          <p className={styles.formNote}>
            Opens your email app to send the message.
          </p>
        </form>
      </div>
    </section>
  );
}
