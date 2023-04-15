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
];

export function Home() {
  return (
    <Mainlayout>
      <div className="container" id="main">
        <div className="main-top">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={50}
            slidesPerView={5}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {array.map((el, id) => (
              <SwiperSlide>
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
