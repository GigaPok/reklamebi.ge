import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faHeart,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./StatementCard.scss";

export default function StatementCard() {
  return (
    <div className="statement-card">
      <div className="wrapper-top">
        <h2>ვეძებ ხელოსანს, რომელიც დამიმონტაჟებს ონკანს</h2>
        <div>
          <span>
            <FontAwesomeIcon icon={faThumbsDown} />
          </span>
          <span>
            <FontAwesomeIcon icon={faHeart} />
          </span>
        </div>
      </div>
      <div className="info-on-statemet">
        <span>ფასი შეთანხმებით</span>
        <span>ნინი გოგიძე</span>
        <span>სავარაუდო ბიუჯეტი: 50 GEL</span>
        <span>გამოქვეყნებულია 5 საათის წინ</span>
      </div>
      <p>
        გამარჯობა! ვეძებ ხელოსანს, რომელიც დამიმონტაჟებს ონკანს. მჭირდება
        დამონტაჟება სასწრაფოდ, ვისაც გცალიათ მხოლოდ ისენი გამომეხმაურეთ. მადლობა
        წინასწარ
      </p>
      <div className="tags">
        <Link>ონკანის ხელოსანი</Link>
        <Link>ონკანის მონტაჟი</Link>
        <Link>თბილისი</Link>
      </div>
      <div className="location">
        <FontAwesomeIcon icon={faLocationDot} /> თბილისი, ვაკე-საბურთალო
      </div>
    </div>
  );
}
