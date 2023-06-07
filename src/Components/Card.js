import React from "react";
import "../Card.css";
import { ButtonClick } from "./ButtonEvent";

// Card is a component that receive 4 props
export const Card = ({ imgSrc, imgAlt, title, description }) => {
  return (

      <div className="card">
        <img src={imgSrc} alt={imgAlt} className="card-img" />
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <div className="center-btn">
          <ButtonClick />
        </div>
      </div>

  );
};
