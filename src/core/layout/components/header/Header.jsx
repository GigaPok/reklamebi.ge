import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { home, contact } from "../../../../router";
import { useTranslation } from "react-i18next";
import logo from "../../../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faPlus,
  faBars,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { AddStatement } from "../../../../shared/addStatement/AddStatement";
import { Card } from "../../../../shared";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import xelosnebi from "../../../../assets/xelosnebi.png";
import avejisGadazidva from "../../../../assets/avejis-gadazidva.jpg";
import binebiDgiurad from "../../../../assets/binebi-dgiurad.png";
import fitness from "../../../../assets//fitness-varjishi.png";
import mogzauroba from "../../../../assets/mogzauroba.png";
import manqanisXelosani from "../../../../assets/manqanis-xelosani.png";
import "swiper/css";

const array = [
  {
    id: 0,
    title: "ხელოსნები",
    img: xelosnebi,
    link: "xelosnebi/",
    subCategory: [
      {
        img: xelosnebi,
        title: "სანტექნიკა1",
      },
      {
        img: xelosnebi,
        title: "სანტექნიკა2",
      },
      {
        img: xelosnebi,
        title: "სანტექნიკა3",
      },
      {
        img: xelosnebi,
        title: "სანტექნიკა4",
      },
      {
        img: xelosnebi,
        title: "ყველას ნახვა",
      },
    ],
  },
  {
    id: 1,
    title: "ავეჯის გადატანა",
    img: avejisGadazidva,
    link: "/bdfbdf",
    subCategory: [
      {
        img: xelosnebi,
        title: "ავეჯის გადატანა1",
      },
      {
        img: xelosnebi,
        title: "ავეჯის გადატანა2",
      },
      {
        img: xelosnebi,
        title: "ავეჯის გადატანა3",
      },
      {
        img: xelosnebi,
        title: "ავეჯის გადატანა4",
      },
      {
        img: xelosnebi,
        title: "ყველას ნახვა",
      },
    ],
  },
  {
    id: 2,
    title: "მანქანის ხელოსანი",
    img: manqanisXelosani,
    link: "/cbfd",
    subCategory: [
      {
        img: xelosnebi,
        title: "მანქანის ხელოსანი1",
      },
      {
        img: xelosnebi,
        title: "მანქანის ხელოსანი2",
      },
      {
        img: xelosnebi,
        title: "მანქანის ხელოსანი3",
      },
      {
        img: xelosnebi,
        title: "მანქანის ხელოსანი4",
      },
      {
        img: xelosnebi,
        title: "ყველას ნახვა",
      },
    ],
  },

  {
    id: 3,
    title: "სამშენებლო ნარჩენების გატანა",
    img: avejisGadazidva,
    link: "/sd",
    subCategory: [
      {
        img: xelosnebi,
        title: "სამშენებლო ნარჩენების გატანა1",
      },
      {
        img: xelosnebi,
        title: "სამშენებლო ნარჩენების გატანა2",
      },
      {
        img: xelosnebi,
        title: "სამშენებლო ნარჩენების გატანა3",
      },
      {
        img: xelosnebi,
        title: "სამშენებლო ნარჩენების გატანა4",
      },
      {
        img: xelosnebi,
        title: "ყველას ნახვა",
      },
    ],
  },
  {
    id: 4,
    title: "ბინები დღიურად",
    img: binebiDgiurad,
    link: "/fsd",
    subCategory: [
      {
        img: xelosnebi,
        title: "ბინები დღიურად1",
      },
      {
        img: xelosnebi,
        title: "ბინები დღიურად2",
      },
      {
        img: xelosnebi,
        title: "ბინები დღიურად3",
      },
      {
        img: xelosnebi,
        title: "ბინები დღიურად4",
      },
      {
        img: xelosnebi,
        title: "ყველას ნახვა",
      },
    ],
  },
  {
    id: 5,
    title: "ფიტნესი",
    img: fitness,
    link: "/csd",
    subCategory: [
      {
        img: xelosnebi,
        title: "ფიტნესი1",
      },
      {
        img: xelosnebi,
        title: "ფიტნესი2",
      },
      {
        img: xelosnebi,
        title: "ფიტნესი3",
      },
      {
        img: xelosnebi,
        title: "ფიტნესი4",
      },
      {
        img: xelosnebi,
        title: "ყველას ნახვა",
      },
    ],
  },
  {
    id: 6,
    title: "მოგზაურობა",
    img: mogzauroba,
    link: "/csdcsd",
    subCategory: [
      {
        img: xelosnebi,
        title: "მოგზაურობა1",
      },
      {
        img: xelosnebi,
        title: "მოგზაურობა2",
      },
      {
        img: xelosnebi,
        title: "მოგზაურობა3",
      },
      {
        img: xelosnebi,
        title: "მოგზაურობა4",
      },
      {
        img: xelosnebi,
        title: "ყველას ნახვა",
      },
    ],
  },
  {
    id: 7,
    title: "მოგზაურობა",
    img: avejisGadazidva,
    link: "/csdcdss",
    subCategory: [
      {
        img: xelosnebi,
        title: "მოგზაურობა1",
      },
      {
        img: xelosnebi,
        title: "მოგზაურობა2",
      },
      {
        img: xelosnebi,
        title: "მოგზაურობა3",
      },
      {
        img: xelosnebi,
        title: "მოგზაურობა4",
      },
      {
        img: xelosnebi,
        title: "ყველას ნახვა",
      },
    ],
  },
  {
    id: 8,
    title: "მოგზაურობა",
    img: avejisGadazidva,
    link: "/sdcsdcsd",
    subCategory: [
      {
        img: xelosnebi,
        title: "მოგზაურობა1",
      },
      {
        img: xelosnebi,
        title: "მოგზაურობა2",
      },
      {
        img: xelosnebi,
        title: "მოგზაურობა3",
      },
      {
        img: xelosnebi,
        title: "მოგზაურობა4",
      },
      {
        img: xelosnebi,
        title: "ყველას ნახვა",
      },
    ],
  },
  {
    id: 9,
    title: "მოგზაურობა",
    img: avejisGadazidva,
    link: "/awd",
    subCategory: [
      {
        img: xelosnebi,
        title: "მოგზაურობა1",
      },
      {
        img: xelosnebi,
        title: "მოგზაურობა2",
      },
      {
        img: xelosnebi,
        title: "მოგზაურობა3",
      },
      {
        img: xelosnebi,
        title: "მოგზაურობა4",
      },
      {
        img: xelosnebi,
        title: "ყველას ნახვა",
      },
    ],
  },
  {
    id: 10,
    title: "მოგზაურობა",
    img: avejisGadazidva,
    link: "/ewt",
    subCategory: [
      {
        img: xelosnebi,
        title: "მოგზაურობა1",
      },
      {
        img: xelosnebi,
        title: "მოგზაურობა2",
      },
      {
        img: xelosnebi,
        title: "მოგზაურობა3",
      },
      {
        img: xelosnebi,
        title: "მოგზაურობა4",
      },
      {
        img: xelosnebi,
        title: "ყველას ნახვა",
      },
    ],
  },
];

export function Header() {
  const { t, i18n } = useTranslation();

  const [active, setActive] = useState(true);

  const switchLang = () => {
    i18n.changeLanguage(i18n.language === "ge" ? "en" : "ge");
    setActive(!active);
  };

  const [activeId, setActiveId] = useState(null);

  const [allCategory, setAllCategory] = useState(false);

  if (allCategory) {
    document.body.className = "body-scroll-off";
  }

  return (
    <>
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
            <a href={home}>
              <img alt="reklamebi.ge logo" src={logo}></img>
            </a>
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
            <Link to={"add"}>
              <FontAwesomeIcon className="userIcon" icon={faPlus} />{" "}
              {t("header.main.statement")}
            </Link>
            <Link>
              <FontAwesomeIcon className="userIcon" icon={faUser} />
              {t("header.main.login")}
            </Link>
          </div>
        </div>
        <div
          className={allCategory ? "header-bottom" : "header-bottom container"}
          style={{ marginTop: allCategory ? "0" : "40px" }}
        >
          {allCategory ? (
            <div className="allCategory">
              <div className="top-wrapper container">
                <h2>ყველა კატეგორია</h2>
                <button onClick={() => setAllCategory(false)}>x</button>
              </div>
              <div className="card-wrapper">
                <div className="cards container">
                  {array.map((el, id) => (
                    <>
                      <div className="card" onClick={() => setActiveId(el.id)}>
                        <button
                          className={
                            activeId === el.id ? "active card" : "card"
                          }
                        >
                          <span>{el.title}</span>

                          <img src={el.img} alt={el.title}></img>
                        </button>
                      </div>
                    </>
                  ))}
                  {activeId && (
                    <div
                      className="sub-category"
                      style={{ gridRow: (activeId - 4) / 2 }}
                    >
                      {array[activeId].subCategory.map((el, index) => (
                        <Link key={index}>
                          <div className="img-wrapper">
                            <img src={el.img}></img>
                            <span>{el.title}</span>
                          </div>
                          <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div
                className="opacity"
                onClick={() => setAllCategory(false)}
              ></div>
            </div>
          ) : (
            <>
              <div className="see-all" onClick={() => setAllCategory(true)}>
                ყველა
                <br />
                კატეგორია
                <FontAwesomeIcon icon={faBars} />
              </div>
              <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={15}
                slidesPerView={8}
                className="swiper"
                breakpoints={{
                  0: {
                    spaceBetween: 10,
                    slidesPerView: 1,
                  },
                  480: {
                    spaceBetween: 10,
                    slidesPerView: 2,
                  },
                  768: {
                    spaceBetween: 15,
                    slidesPerView: 3,
                  },
                  1024: {
                    spaceBetween: 15,
                    slidesPerView: 4,
                  },
                  1280: {
                    spaceBetween: 15,
                    slidesPerView: 5,
                  },
                  1400: {
                    spaceBetween: 15,
                    slidesPerView: 6,
                  },
                  1900: {
                    spaceBetween: 15,
                    slidesPerView: 8,
                  },
                }}
              >
                {array.map((el, id) => (
                  <SwiperSlide className="slide">
                    <Card
                      key={id}
                      title={el.title}
                      img={el.img}
                      link={el.link}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          )}
        </div>
      </header>
    </>
  );
}
