import React from "react";
import "./Card.scss";

export function Card({ className, img, title }) {
  return (
    <div className={`${className} card`}>
      <button>
        <span>{title}</span>

        <img src={img} alt={title}></img>
      </button>
    </div>
  );
}
