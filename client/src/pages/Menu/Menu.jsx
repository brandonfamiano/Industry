import "./Menu.scss";
import SideNav from "../../components/SideNav/SideNav";
import MenuItem from "../../components/MenuItem/MenuItem";
import "../../data/food-menu.json";

export default function Menu() {
  const categories = [
    {
      id: 1,
      name: "Special",
    },
    {
      id: 2,
      name: "Appetizer",
    },
    {
      id: 3,
      name: "Main",
    },
    {
      id: 4,
      name: "Beverage",
    },
  ];

  return (
    <div className="menu">
      <SideNav />
      <div className="menu__container">
        <div className="menu__top">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            color="#283237"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5 17L9.5 12L14.5 7"
              stroke="#63666A"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <div className="menu__top--text">
            <h3 className="menu__top--title">Current Menu</h3>
            <div>
              <a href="/">Menu</a> / <a href="/">Current Menu</a>
            </div>
          </div>
        </div>
        <div className="menu__main">
          <div className="menu__main--buttons">
            <a href="/" className="menu__addbutton">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0C5.37216 0 0 5.37216 0 12C0 18.6278 5.37216 24 12 24C18.6278 24 24 18.6278 24 12C24 5.37216 18.6278 0 12 0ZM18.24 12.96H12.96V18.24C12.96 18.4946 12.8589 18.7388 12.6788 18.9188C12.4988 19.0989 12.2546 19.2 12 19.2C11.7454 19.2 11.5012 19.0989 11.3212 18.9188C11.1411 18.7388 11.04 18.4946 11.04 18.24V12.96H5.76C5.50539 12.96 5.26121 12.8589 5.08118 12.6788C4.90114 12.4988 4.8 12.2546 4.8 12C4.8 11.7454 4.90114 11.5012 5.08118 11.3212C5.26121 11.1411 5.50539 11.04 5.76 11.04H11.04V5.76C11.04 5.50539 11.1411 5.26121 11.3212 5.08118C11.5012 4.90114 11.7454 4.8 12 4.8C12.2546 4.8 12.4988 4.90114 12.6788 5.08118C12.8589 5.26121 12.96 5.50539 12.96 5.76V11.04H18.24C18.4946 11.04 18.7388 11.1411 18.9188 11.3212C19.0989 11.5012 19.2 11.7454 19.2 12C19.2 12.2546 19.0989 12.4988 18.9188 12.6788C18.7388 12.8589 18.4946 12.96 18.24 12.96Z"
                  fill="#FFFFFF"
                />
              </svg>
              <p className="menu__button--text additem">ADD NEW ITEM</p>
            </a>
            <a href="/" className="menu__editbutton">
              {" "}
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 18.9993V24H5.00069L19.7561 9.24462L14.7554 4.24392L0 18.9993ZM23.6099 5.39075C24.13 4.87068 24.13 4.02389 23.6099 3.50382L20.4962 0.390054C19.9761 -0.130018 19.1293 -0.130018 18.6093 0.390054L16.1689 2.83039L21.1696 7.83109L23.6099 5.39075Z"
                  fill="#283237"
                />
              </svg>
              <p className="menu__button--text edititem">EDIT</p>
            </a>
          </div>
          {categories.map((category, key) => (
            <div className="menu__section">
              <h3 className="menu__section--title">{category.name}</h3>
              <div className="menu__section__container">
                <MenuItem />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
