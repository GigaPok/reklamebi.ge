import React, { useEffect, useState } from "react";
import "./Statements.scss";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import StatementCard from "./statementcard/StatementCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aos from "aos";
import "aos/dist/aos.css";

export function Statements() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [show, setShow] = useState(false);

  const [stepTwo, setStepTwo] = useState(false);
  const [stepThree, setStepThree] = useState(false);

  useEffect(() => {
    Aos.init();
  }, []);

  const twoStep = () => {
    setShow(false);
    setStepTwo(true);
  };

  const threStep = () => {
    setStepTwo(false);
    setStepThree(true);
  };

  const addKeyword = () => {};

  return (
    <>
      <div className="statements">
        <div className="leftbar">
          <div className="top-card">
            <div className="tittle-addpost">
              <h3>განცხადებები</h3>
              <button onClick={() => setShow(true)}>
                <FontAwesomeIcon icon={faPlus} />
                სიახლის განთავსება
              </button>
            </div>
            <div className="fast-search">
              <NavLink to="/">აქტუალური</NavLink>
              <NavLink to="/s">ახალი გამოქყვეყნებული</NavLink>
              <NavLink to="/ss">დამახსოვრებული</NavLink>
            </div>
          </div>
          {array.map((el) => (
            <StatementCard />
          ))}
        </div>
        <div className="sidebar"></div>

        {show && (
          <div className="modal-add-post" data-aos="flip-left">
            <form action="/action_page.php">
              <div className="wrapper">
                <h2 className="border-bottom">სიახლის სწრაფი დამატება</h2>
                <div class="wrapper-inputs">
                  <input
                    type="text"
                    placeholder="სათაური"
                    name="title"
                    id="title"
                    required
                  />
                  <textarea
                    type="text"
                    placeholder="ინფორმაცია"
                    name="information"
                    id="information"
                    required
                    rows={5}
                  />
                </div>
                <div className="button-wrapper border-top">
                  <button onClick={() => setShow(false)}>გათიშვა</button>
                  <button onClick={() => twoStep()} class="registerbtn">
                    დამასხოვრება
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
        {stepTwo && (
          <div className="modal-add-post" data-aos="flip-left">
            <form action="/action_page.php">
              <div className="wrapper">
                <h2 className="border-bottom">მეტი ინფორმაციის დამატება</h2>
                <div class="wrapper-inputs">
                  <input
                    type="text"
                    placeholder="სახელი, გვარი"
                    name="title"
                    id="title"
                  />

                  <input
                    type="number"
                    placeholder="მობილურის ნომერი"
                    name="phone"
                    id="phone"
                    rows={5}
                  />
                </div>
                <label className="border-top ptop-25">
                  დაუმატე TAG - ები, რომ უფრო მეტმა ნახოს
                </label>
                <div className="keyword-wrapper">
                  <span className="keyword">
                    <FontAwesomeIcon icon={faPlus} />
                    ხელოსანი
                  </span>
                  <span className="keyword">
                    <FontAwesomeIcon icon={faPlus} />
                    ონკანის ხელოსანი
                  </span>
                  <span className="keyword">
                    <FontAwesomeIcon icon={faPlus} />
                    პროფესიონალი
                  </span>
                </div>
                <input
                  type="hidden"
                  placeholder="tags"
                  name="keywords"
                  id="keywords"
                />
                <div className="button-wrapper border-top">
                  <button
                    onClick={() => alert("სიახლე წარმატებით გამოქვეყნდა")}
                  >
                    გამოქვეყნება
                  </button>
                  <button onClick={() => threStep()} class="registerbtn">
                    ინფორმაციის დამატება
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}

        {stepThree && (
          <div className="modal-add-post" data-aos="flip-left">
            <form>
              <div className="wrapper">
                <h2 className="border-bottom">ბოლო ეტაპი</h2>
                <div class="wrapper-inputs">
                  <input
                    type="text"
                    placeholder="eMail სურვილისამებრ"
                    name="title"
                    id="title"
                  />
                  <input
                    type="text"
                    placeholder="პაროლი"
                    name="password"
                    id="password"
                  />
                  <input
                    type="text"
                    placeholder="გაიმეორე პაროლი"
                    name="passwordrepeat"
                    id="passwordrepeat"
                    rows={5}
                  />
                </div>
                <div className="button-wrapper border-top">
                  <button onClick={() => twoStep()}>შევსებულის ნახვა</button>
                  <button
                    onClick={() => alert("სიახლე წარმატებით გამოქვეყნდა")}
                  >
                    გამოქვეყნება
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
