import React from "react";
import { Profile } from "../profile/Profile";
import { Mainlayout } from "../../../core";
import "./Mystatement.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleRight,
  faArrowRight,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";

export function Mystatement() {
  let color = "green";

  const array = [
    {
      id: 100,
      statusColor: "red",
      status: "ვადაგასული",
      title: "ვაკეთებ სანტექნიკას",
      date: "01.04.2023",
      view: "233",
    },
    {
      id: 101,
      statusColor: "green",
      status: "აქტიური",
      title: "ბინა დღიურად",
      date: "20.20.2023",
      view: "533",
    },
    {
      id: 102,
      statusColor: "yellow",
      status: "ელოდება დასტურს",
      title: "ონკანის ხელოსანი",
      date: "05.11.2023",
      view: "6565",
    },
  ];

  return (
    <div id="myStatement">
      {array.map((el, id) => (
        <div className="card" key={id}>
          <div className="card-wrapper">
            <div className="icon">
              <FontAwesomeIcon icon={faNewspaper} />
              <span
                className="status-color"
                style={{ backgroundColor: el.statusColor }}
              ></span>
            </div>
            <div>
              <div className="hed-title">
                <span>განცხადების ID: {el.id}</span>
                <span>სათაური: {el.title}</span>
              </div>
              <div className="bottom-title">
                <span>ნახვა: {el.view}</span>
                <span>დამატების თარიღი: {el.date}</span>
                <span
                  className="status-color"
                  style={{ backgroundColor: el.statusColor }}
                ></span>
                <span>სტატუსი: {el.status}</span>
              </div>
            </div>
          </div>
          <div>
            <div className="see-more">
              <span>დეტალურად</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
