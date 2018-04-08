import React from "react";
import Link from "gatsby-link";
import styles from "../styles/Nav.module.css";
import website from "../images/website.svg";

const github =
  "https://res.cloudinary.com/mateoolarte/image/upload/v1521778769/personal_website/github.svg";
const twitter =
  "https://res.cloudinary.com/mateoolarte/image/upload/v1521778769/personal_website/twitter.svg";
const email =
  "https://res.cloudinary.com/mateoolarte/image/upload/v1521778769/personal_website/email.svg";
const logo =
  "https://res.cloudinary.com/mateoolarte/image/upload/v1521778769/personal_website/logo.svg";

export default function Nav({ currentUrl, menuScrolled }) {

  return (
    <header
      className={
        currentUrl === "/"
          ? `${styles.header} ${menuScrolled}`
          : `${styles.header} ${styles.headerFixed}`
      }
    >
      <Link to="/">
        <img src={logo} className={styles.logo} alt="Logo" />
      </Link>

      <div className={styles.contactMe}>
        <span>Contáctame</span>
        <ul className={styles.contactMe__list}>
          <li className={styles.contactMe__listItem}>
            <a
              href="https://mateoolarte.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={website} alt="" />
            </a>
          </li>
          <li className={styles.contactMe__listItem}>
            <a
              href="https://twitter.com/mateo_olarte"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="" />
            </a>
          </li>
          <li className={styles.contactMe__listItem}>
            <a
              href="https://github.com/mateoolarte"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="" />
            </a>
          </li>
          <li className={styles.contactMe__listItem}>
            <a href="mailto:mateo.olarte8@gmail.com">
              <img src={email} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
