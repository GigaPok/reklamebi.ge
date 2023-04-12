import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { home, contact } from "../../../../router";
import { useTranslation } from "react-i18next";
import logo from "../../../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";

export function Header() {
  const { t, i18n } = useTranslation();

  const [active, setActive] = useState(true);

  const switchLang = () => {
    i18n.changeLanguage(i18n.language === "ge" ? "en" : "ge");
    setActive(!active);
  };

  return (
    <header>
      <div className="topHeader container">
        <div className="main">
          <span>{t("header.topHeader.Toptext")}</span>
        </div>
        <div className="langSwitcher" onClick={switchLang}>
          <Link>
            <span>{{ en: "Geo", ge: "Eng" }[i18n.language] || "Geo"}</span>
            <div className="switcher">
              <span className={active ? "active" : ""}></span>
            </div>
          </Link>
        </div>
      </div>
      <div className="headerMain container">
        <div className="wrapperLogoSearch">
          <img alt="reklamebi.ge logo" src={logo}></img>
          <form action="/action_page.php">
            <input
              type="search"
              id="rsearch"
              name="rsearch"
              placeholder={t("header.main.search")}
            />
            <button type="submit" />
          </form>
        </div>
        <div className="WrapperCartProfile">
          <Link>
            <FontAwesomeIcon className="userIcon" icon={faCartShopping} />{" "}
            {t("header.main.cart")}
          </Link>
          <Link>
            <FontAwesomeIcon className="userIcon" icon={faUser} />
            {t("header.main.login")}
          </Link>
        </div>
      </div>
    </header>
  );
}
