import React from "react";
import { HeartIcon } from "../assets/icons/HeartIcon.jsx";
import "../assets/styles/foodcard.css";

export const FoodCard = ({ name, image }) => {
  return (
    <div className="card__wrapper">
      <div className="card__image-wrapper">
        <img src={image} alt="food" />
        <div className="card__heart-icon">
          <HeartIcon width={16} />
        </div>
      </div>
      <h5 className="card__title">{name}</h5>
    </div>
  );
};
