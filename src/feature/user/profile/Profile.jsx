import React, { useState } from "react";
import {
  faGear,
  faGraduationCap,
  faNewspaper,
  faPlus,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { add, statement, news, settings, home } from "../../../router";
import { NavLink, Outlet } from "react-router-dom";
import "./Profile.scss";
import { Add } from "../add/Add";
import { Setting } from "../setting/Setting";
import { Mystatement } from "../mystatement/Mystatement";
import { Mainlayout } from "../../../core";

export function Profile() {
  const [category, setCategory] = useState(null);

  return (
    <Mainlayout>
      <div id="profile">
        <div className="container wrapper">
          <div className="hed-title border-bottom">
            <FontAwesomeIcon icon={faUser} />
            <h2>გამარჯობა, GIGA KARKUSASHVILI</h2>
          </div>
          <div className="main-content">
            <nav>
              <ul>
                <li className="border-bottom">
                  <NavLink to={add}>
                    <FontAwesomeIcon icon={faPlus} />
                    დამატება
                  </NavLink>
                </li>
                <li className="border-bottom">
                  <NavLink to={statement}>
                    <FontAwesomeIcon icon={faGraduationCap} />
                    ჩემი განცხადება
                  </NavLink>
                </li>
                <li className="border-bottom">
                  <NavLink to={news}>
                    <FontAwesomeIcon icon={faNewspaper} />
                    ჩემი სიახლეები
                  </NavLink>
                </li>
                <li className="border-bottom">
                  <NavLink
                    to={settings}
                    onClick={() => setCategory("settings")}
                  >
                    <FontAwesomeIcon icon={faGear} />
                    პარამეტრები
                  </NavLink>
                </li>
                <li className="border-bottom">
                  <NavLink to={home}>
                    <FontAwesomeIcon icon={faRightFromBracket} />
                    გამოსვლა
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className="outlet">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
}
