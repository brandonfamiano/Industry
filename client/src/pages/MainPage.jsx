import React from "react";
import { Link } from "react-router-dom";
import { FoodMenuIcon } from "../assets/icons/FoodMenuIcon";
import { LeftArrowIcon } from "../assets/icons/LeftArrowIcon";
import { DownArrowIcon } from "../assets/icons/DownArrowIcon";
import { HelpIcon } from "../assets/icons/HelpIcon";
import { TriArrowUpIcon } from "../assets/icons/TriArrowUpIcon";
import { TriArrowDownIcon } from "../assets/icons/TriArrowDownIcon";
import "../assets/styles/MainPage.css";

const BarGraphData = [
  {
    name: "Cerne Asada Plate",
    value: 2100,
  },
  {
    name: "Pollo en Mole Poblano",
    value: 1700,
  },
  {
    name: "Chimichanga",
    value: 1600,
  },
  {
    name: "Mole Negro Oaxaqueno",
    value: 1500,
  },
  {
    name: "Barbacoa a la Diabla",
    value: 1400,
  },
  {
    name: "Pescado a la Veracruazana",
    value: 1300,
  },
  {
    name: "Pescado al Ajillo",
    value: 1200,
  },
  {
    name: "Camarones al Mojo",
    value: 1100,
  },
];

const maxValue = BarGraphData.map((item) => item.value).reduce(
  (a, b) => Math.max(a, b) + 150
);
const minValue = BarGraphData.map((item) => item.value).reduce((a, b) =>
  Math.min(a, b, 100)
);

const statsData = [
  { name: "Average Sales Volumes", value: "100 Unit", positive: true },
  {
    name: " Total Revenue Generated",
    value: "$14,500.00",
    positive: true,
  },
  {
    name: "Profit Margin",
    value: "$4,350.00",
    positive: true,
  },
  {
    name: "Average Preparation Time",
    value: "20 mins",
    positive: false,
  },
  {
    name: "  Cost of Goods Sold",
    value: "$5,075.00",
    positive: true,
  },
  {
    name: "Average Repeat Order Rate",
    value: "13%",
    positive: true,
  },
];

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
        <Link to="/trends" className="home__nav-card-button">
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
          <div className="home__graph-body-content">
            <div className="home__graph-body-bar-graph">
              {/* create bar graph using the data array */}
              {BarGraphData.map((item, index) => {
                const percentage =
                  ((item.value - minValue) / (maxValue - minValue)) * 100;

                return (
                  <div
                    key={index}
                    className="home__graph-body-bar-graph-bar"
                    style={{ width: `${15 + percentage}%` }}
                  >
                    <div className="home__graph-body-bar-graph-bar-label">
                      <p>{item.name}</p>
                      <p>
                        {item.value.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="home__graph-body-stats">
              {statsData.map((item, index) => (
                <div key={index} className="home__graph-body-stats-point">
                  <div>
                    <span>{item.name}</span>
                    <HelpIcon width={12} />
                  </div>
                  <div>
                    {item.positive ? (
                      <TriArrowUpIcon width={16} />
                    ) : (
                      <TriArrowDownIcon width={16} />
                    )}
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
