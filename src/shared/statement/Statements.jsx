import React from "react";
import "./Statements.scss";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import StatementCard from "./statementcard/StatementCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Statements() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="statements">
      <div className="leftbar">
        <div className="top-card">
          <div className="tittle-addpost">
            <h3>განცხადებები</h3>
            <button>
              <FontAwesomeIcon icon={faPlus} />
              დამატება
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
    </div>
  );
}
