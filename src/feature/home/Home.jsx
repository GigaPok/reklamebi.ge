import React from "react";
import { Mainlayout } from "../../core";
import { Card } from "../../shared/card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import testImg from "../../assets/1.png";
import "./Home.scss";
import { Statements } from "../../shared";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const array = [
  {
    title: "ავეჯის გადატანა",
    img: testImg,
    link: "/",
  },
  {
    title: "რემონტი",
    img: testImg,
    link: "/",
  },
  {
    title: "ხელოსნები",
    img: testImg,
    link: "xelosnebi/",
  },
  {
    title: "სამშენებლო ნარჩენების გატანა",
    img: testImg,
    link: "/",
  },
  {
    title: "ბინები დღიურად",
    img: testImg,
    link: "/",
  },
  {
    title: "ფიტნესი",
    img: testImg,
    link: "/",
  },
  {
    title: "მოგზაურობა",
    img: testImg,
    link: "/",
  },
  {
    title: "მოგზაურობა",
    img: testImg,
    link: "/",
  },
  {
    title: "მოგზაურობა",
    img: testImg,
    link: "/",
  },
  {
    title: "მოგზაურობა",
    img: testImg,
    link: "/",
  },
  {
    title: "მოგზაურობა",
    img: testImg,
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
