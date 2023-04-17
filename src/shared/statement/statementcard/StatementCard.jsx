import { React, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faHeart,
  faThumbsDown,
  faArrowLeft,
  faUpRightFromSquare,
  faTag,
  faUserNurse,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./StatementCard.scss";
import Aos from "aos";
import "aos/dist/aos.css";

export default function StatementCard() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="statement-card" onClick={() => setShow(true)}>
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
          დამონტაჟება სასწრაფოდ, ვისაც გცალიათ მხოლოდ ისენი გამომეხმაურეთ.
          მადლობა წინასწარ
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
      {show && (
        <div className="modal">
          <div className="modal-wrapper">
            <div className="opacity" onClick={() => setShow(false)}></div>
            <div className="content" data-aos="fade-left">
              <div className="back-newtab">
                <FontAwesomeIcon
                  onClick={() => setShow(false)}
                  icon={faArrowLeft}
                />
                <a href="/" target="_blank">
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
                  ახალ თაბში გახსნა
                </a>
              </div>
              <div className="work-about">
                <div>
                  <div className="hed-title pad-20 border-bottom border-right">
                    <h3>გვჭირდება სასწრაფოდ ონკანის ხელოსანი</h3>
                    <span className="different">კომპანია ვანი</span>
                    <span className="date">გამოქვეყნებულია 45 წუთის წინ</span>
                    <span>
                      <FontAwesomeIcon icon={faLocationDot} />
                      თბილისი
                    </span>
                  </div>
                  <div className="about pad-20 border-bottom border-right">
                    <h2>გვჭირდება 5 ხელოსანი</h2>
                    <p>
                      გამარჯობა, კომპანია ვანს ესაჭიროვება 5 ხელოსანი. გვჭირდება
                      მხოლოდ გამოცდილები. დასამონტაჟებელი არის 1000 ონკანი.
                      <br />
                      <br />
                      გვესაჭიროვება სასწრაფოდ, შეგვეხმიანეთ მხოლოდ ის
                      ადამიანები, რომლებიც მალევე შეძლებენ დაწყებას.
                      <br />
                      <br />
                      გადახდა შესძლებელია 2 ნაწილადად.
                      <br />
                      <br />
                      დაგვიკავშირდით მაილზე ან ნომერზე
                    </p>
                  </div>
                  <div className="price pad-20 border-bottom border-right">
                    <div className="box">
                      <span className="hed-title">
                        <FontAwesomeIcon icon={faTag} />
                        საფასური
                      </span>
                      <span>ფასი შეთანხმებით</span>
                    </div>
                    <div className="box">
                      <span className="hed-title">
                        <FontAwesomeIcon icon={faUserNurse} />
                        გამოცდილება
                      </span>
                      <span>პროფესიონალი</span>
                    </div>
                    <div className="box">
                      <span className="hed-title">
                        <FontAwesomeIcon icon={faUserTie} />
                        დამკვეთი
                      </span>
                      <span>კომპანია</span>
                    </div>
                  </div>
                  <div className="pad-20 border-bottom border-right statement-status">
                    <span>
                      განცხადება:
                      <span>აქტიურია</span>
                    </span>
                  </div>
                  <div className="pad-20 border-right theme">
                    <h2>თემატიკა</h2>
                    <div className="tags">
                      <a href="/" target="_blank">
                        ხელოსანი
                      </a>
                      <a href="/" target="_blank">
                        თბილისი
                      </a>
                      <a href="/" target="_blank">
                        ონკანის შეკეთება
                      </a>
                      <a href="/" target="_blank">
                        ონკანის ხელოსანი
                      </a>
                      <a href="/" target="_blank">
                        გამოცდილი ხელოსანი
                      </a>
                    </div>
                  </div>
                </div>
                <div className="aside">
                  <div className="client-info-top pad-20 border-bottom">
                    <button>დარეკვა</button>
                    <button className="save-button">
                      <span>
                        <FontAwesomeIcon icon={faHeart} />
                        შენახვა
                      </span>
                    </button>
                    <span>შპს ვანი</span>
                    <span>კომპანია</span>
                  </div>
                  <div className="pad-20 user-info border-bottom">
                    <h2>მომხმარებლის შესახებ</h2>
                    <span>
                      მარკეტების ქსელი „გვირილა“ ინოვაციური ბრენდია საქართველოს
                      ბაზარზე, რომლის მიზანია შესთავაზოს სხვადასხვა გემოვნების
                      მომხმარებელს მაღალი ხარისხის, ხელმისაწვდომი ფასისა და
                      ფართო ასორტიმენტის პროდუქცია მთელი ქვეყნის მასშტაბით.
                      ამჟამად კომპანია არის სწრაფად მზარდი, რომლისთვისაც
                      მნიშვნელოვანია თანამშრომლის კარიერულ და პროფესიულ
                      განვითარებაზე ზრუნვა.
                    </span>
                    <span className="hed-title">მდებარეობა</span>
                    <span>თბილისი</span>
                    <span className="hed-title">გრაფიკი</span>
                    <span>ორშ-პარ</span>
                    <span className="hed-title">წევრი</span>
                    <span> 2022 წლის 19 ოქტომბრიდან</span>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
          {(document.body.style.height = "100vh")}
        </div>
      )}
    </>
  );
}
