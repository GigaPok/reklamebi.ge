import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  faFacebook,
  faInstagramSquare,
  faYoutube,
  faLinkedin,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const social = [
  {
    title: "Facebook",
    icon: faFacebook,
    link: "/",
  },
  {
    title: "Instagram",
    icon: faInstagramSquare,
    link: "/",
  },
  {
    title: "Youtube",
    icon: faYoutube,
    link: "/",
  },
  {
    title: "Linkedin",
    icon: faLinkedin,
    link: "/",
  },
  {
    title: "TikTok",
    icon: faTiktok,
    link: "/",
  },
];
export function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <footer className="container">
      <div id="footer">
        <div>
          <h2>{t("footer.about.tittle")}</h2>
          <ul>
            <li>
              <Link>{t("footer.about.text1")}</Link>
            </li>
            <li>
              <Link>{t("footer.about.text2")}</Link>
            </li>
            <li>
              <Link>{t("footer.about.text3")}</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>{t("footer.terms.tittle")}</h2>
          <ul>
            <li>
              <Link>{t("footer.terms.text1")}</Link>
            </li>
            <li>
              <Link>{t("footer.terms.text2")}</Link>
            </li>
            <li>
              <Link>{t("footer.terms.text3")}</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>გამოგვყევი</h2>
          <ul>
            {social.map((el, key) => (
              <li key={key}>
                <Link to={el.link}>
                  <FontAwesomeIcon icon={el.icon} />
                  {el.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>კონტაქტი</h2>
          <a href="tel:+995555555">
            <FontAwesomeIcon icon={faPhone} />
            555 55 55 55
          </a>
          <a href="mailito:test@mail.ru">
            <FontAwesomeIcon icon={faEnvelope} />
            info@reklamebi.ge
          </a>
        </div>
      </div>
      <span>Copyright © 2023 Reklamebi.ge, ყველა უფლება დაცულია.</span>
    </footer>
  );
}
