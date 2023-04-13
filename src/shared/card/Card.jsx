import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

export function Card({ link, img, title }) {
  return (
    <div className="card">
      <Link to={link}>
        {title}
        <img src={img} alt={title}></img>
      </Link>
    </div>
  );
}
