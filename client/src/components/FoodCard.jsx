import React from "react";
import { HeartIcon } from "../assets/icons/HeartIcon.jsx";
import "../assets/styles/foodcard.css";

export const FoodCard = ({ id }) => {
  return (
    <div className="card__wrapper">
      <div className="card__image-wrapper">
        <img src={`https://picsum.photos/id/${id}/300/200`} alt="food" />
        <div className="card__heart-icon">
          <HeartIcon width={16} />
        </div>
      </div>
      <h5 className="card__title">Food Card</h5>
    </div>
  );
};
