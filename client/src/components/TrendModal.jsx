import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./../assets/styles/trendModal.css";
import { HeartIcon } from "../assets/icons/HeartIcon";

export const TrendModal = ({ id, setSelectedFood }) => {
  //   const [open, setOpen] = useState(true);
  const [data, setData] = useState(null);

  const getData = async () => {
    const res = await axios.get(`http://localhost:4000/trend/${id}`);
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  if (!data) return null;
  return (
    <>
      <dialog open>
        <div className="modal__card">
          <div className="modal__card-header">
            <h4>{data.name}</h4>
            <div className="modal__card-header-right">
              <p className="review-number">
                {data.review} <span className="review">Reviews</span>
              </p>
              <button
                className="close-button"
                onClick={() => setSelectedFood(null)}
              >
                X
              </button>
            </div>
          </div>
          <div className="modal__card-body">
            <div className="modal__image-container">
              <img
                className="modal__card-image"
                src={`/trends-photos/${data.image}`}
                alt="cocktail"
              />
              <div className="heart-icon">
                <HeartIcon />
              </div>
            </div>
            <div className="modal__card-ingredients">
              <h4>Ingredient</h4>
              <ul>
                {data.ingredients.map((ingredient) => (
                  <li>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div className="modal__card-information">
              <h4>Information</h4>
              <div className="modal__information-list">
                {data.information.map((info) => (
                  <div className="modal__information-box">
                    <span className="info-icon">&#9432;</span>
                    <p className="info-text">{info}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="modal__actions">
              <button className="add-button">Add</button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};
