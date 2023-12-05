import { Link } from "react-router-dom";
import "./SideNav.scss";

function SideNav() {
  return (
    <div className="side-menu">
      <a className="side-menu__top__button">
        <p className="side-menu__top__button--text">Virtual Terminal</p>
      </a>

      <ul className="side-menu__list">
        <li className="side-menu__list--button">Dashboard</li>
        <li className="side-menu__list--button">Reporting</li>
        <li className="side-menu__list--button">Orders</li>
        <li className="side-menu__list--button">Transactions</li>
        <li className="side-menu__list--button">Closeout</li>
        <li className="side-menu__list--button">Disputes</li>
        <li className="side-menu__list--button">Cash Log</li>
        <li className="side-menu__list--button">Clover Dinning</li>
        <li className="side-menu__list--button selected">Menu</li>
        <li className="side-menu__list--button--border">Tips</li>
        <li className="side-menu__list--button--border">Inventory</li>
        <li className="side-menu__list--button--border">Customers</li>
      </ul>
    </div>
  );
}

export default SideNav;
