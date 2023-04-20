import React from "react";
import { Mainlayout } from "../../core";
import { Card } from "../../shared/card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import xelosnebi from "../../assets/xelosnebi.png";
import avejisGadazidva from "../../assets/avejis-gadazidva.jpg";
import binebiDgiurad from "../../assets/binebi-dgiurad.png";
import fitness from "../../assets//fitness-varjishi.png";
import mogzauroba from "../../assets/mogzauroba.png";
import manqanisXelosani from "../../assets/manqanis-xelosani.png";
import "./Home.scss";
import { Statements } from "../../shared";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const array = [
  {
    title: "ხელოსნები",
    img: xelosnebi,
    link: "xelosnebi/",
  },
  {
    title: "ავეჯის გადატანა",
    img: avejisGadazidva,
    link: "/",
  },
  {
    title: "მანქანის ხელოსანი",
    img: manqanisXelosani,
    link: "/",
  },

  {
    title: "სამშენებლო ნარჩენების გატანა",
    img: avejisGadazidva,
    link: "/",
  },
  {
    title: "ბინები დღიურად",
    img: binebiDgiurad,
    link: "/",
  },
  {
    title: "ფიტნესი",
    img: fitness,
    link: "/",
  },
  {
    title: "მოგზაურობა",
    img: mogzauroba,
    link: "/",
  },
  {
    title: "მოგზაურობა",
    img: avejisGadazidva,
    link: "/",
  },
  {
    title: "მოგზაურობა",
    img: avejisGadazidva,
    link: "/",
  },
  {
    title: "მოგზაურობა",
    img: avejisGadazidva,
    link: "/",
  },
  {
    title: "მოგზაურობა",
    img: avejisGadazidva,
    link: "/",
  },
];

export function Home() {
  return (
    <Mainlayout>
      <div className="container" id="main">
        <div className="main-top">
          <div className="see-all">
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
                <Card key={id} title={el.title} img={el.img} link={el.link} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <span className="hr"></span>
        <div className="main-content">
          <h1>მოძებნე, განათავსე განცხადება</h1>
        </div>
        <Statements />
      </div>
    </Mainlayout>
  );
}
