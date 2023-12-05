import React from "react";
import { LeftArrowIcon } from "../assets/icons/LeftArrowIcon";
import { SearchIcon } from "../assets/icons/SearchIcon";
import { FilterIcon } from "../assets/icons/FilterIcon";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

import "../assets/styles/Trends.css";

export const Trends = () => {
  const { pathname } = useLocation();
  return (
    <div className="trends__wrapper">
      <div className="trends__header">
        <Link to="/">
          <LeftArrowIcon />
        </Link>
        <div>
          <h3 className="trends__header-title"> Food Trends </h3>
          <div className="trends__header-breadcrumb">
            <Link to="/">Menu</Link>/
            <Link to="/trends/food" className="active">
              Food Trends
            </Link>
          </div>
        </div>
      </div>

      <div className="trends__content">
        <div className="trends__content-header">
          <div className="trends__tabs">
            <NavLink to="/trends/food">Food Trends</NavLink>
            <NavLink to="/trends/drink">Drink Trends</NavLink>
          </div>
          <div className="trends__content-header-search">
            <FilterIcon width={16} />
            <SearchIcon width={26} />
          </div>
        </div>
        <div className="trends__tab-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
