import React from "react";
import { Link } from "react-router-dom";
import { FoodMenuIcon } from "../assets/icons/FoodMenuIcon";
import { LeftArrowIcon } from "../assets/icons/LeftArrowIcon";
import { DownArrowIcon } from "../assets/icons/DownArrowIcon";
import "../assets/styles/MainPage.css";

export const MainPage = () => {
  return (
    <div className="home__wrapper">
      <div className="home__nav-section">
        <Link to="/" className="home__nav-card-button active">
          <FoodMenuIcon width={12} className="home__icon" />
          <span>current menu</span>
        </Link>
        <Link to="/" className="home__nav-card-button">
          events
        </Link>
        <Link to="/" className="home__nav-card-button">
          food trend
        </Link>
      </div>

      {/* Graph */}
      <div className="home__graph-section">
        <div className="home__graph-header">
          <h3 className="home__graph-header-title">
            current menu item performances
          </h3>
          <div className="home__graph-header-actions">
            <button className="home__graph-header-action-button">tour</button>
            <button className="home__graph-header-action-button">export</button>
            <button className="home__graph-header-action-button">print</button>
            <button className="home__graph-header-action-button">more</button>
          </div>
        </div>
        <div className="home__graph-body">
          <div className="home__graph-body-header">
            <LeftArrowIcon />
            <div className="home__graph-body-header-title">
              <p>Dec 1, 2023 12:00 AM - Dec 2. 2023 12:59 PM</p>
              <div className="home__graph-body-header-subtitle">
                Compared to{" "}
                <button className="home__graph-compare-button">
                  This day last week <DownArrowIcon />
                </button>
              </div>
            </div>
            <div className="home__graph-button-group">
              <button className="active">trends</button>
              <button>full report</button>
            </div>
          </div>
          <div className="home__graph-body-content"></div>
        </div>
      </div>
    </div>
  );
};
