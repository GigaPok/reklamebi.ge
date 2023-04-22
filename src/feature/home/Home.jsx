import React, { useState } from "react";
import { Mainlayout } from "../../core";
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

export function Home() {
  return (
    <Mainlayout>
      <div className="container" id="main">
        <span className="hr"></span>
        <div className="main-content">
          <h1>მოძებნე, განათავსე განცხადება</h1>
        </div>
        <Statements c />
      </div>
    </Mainlayout>
  );
}
