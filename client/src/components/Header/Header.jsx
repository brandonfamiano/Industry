import menu_icon from "../../assets/Icons/Menu-icon.png";
import clover_logo from "../../assets/Logo/Clover-logo.svg";
import bell_icon from "../../assets/Icons/Notification-icon.png";
import language_icon from "../../assets/Icons/Language-icon.png";
import down_arrow from "../../assets/Icons/Down-arrow.png";
import help_icon from "../../assets/Icons/Help-icon.png";
import settings_icon from "../../assets/Icons/Settings-icon.png";
import "./Header.scss";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header__main">
      <div className="header__left">
        
        <img
          src={menu_icon}
          alt="hamburger menu bar"
          className="header__left--hamburger"
        />
        <img src={clover_logo} alt="app logo" className="header__left--logo"/>
        <p className="header__text">Fiesta</p>
      </div>

      <div className="header__right">
        <img
          src={bell_icon}
          alt="notification icon"
          className="header__right--bell"
        />

        <img
          src={language_icon}
          alt="globe language icon"
          className="header__right--icons"
        />
        <p className="header__text">Language</p>
        <img
          src={down_arrow}
          alt="down arrow"
          className="header__right--icons header__down-arrow"
        />

        <img src={help_icon} alt="help icon" className="header__right--icons" />
        <p className="header__text">Help</p>
        <img
          src={down_arrow}
          alt="down arrow"
          className="header__right--icons header__down-arrow"
        />

        <img
          src={settings_icon}
          alt="account settings icon"
          className="header__right--icons"
        />
        <p className="header__text">Account</p>
        <img
          src={down_arrow}
          alt="down arrow"
          className="header__right--icons header__down-arrow"
        />
      </div>
    </div>
  );
}

export default Header;
