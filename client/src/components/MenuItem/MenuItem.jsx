import "./MenuItem.scss";
import axios from "axios";
import { useEffect, useState } from "react";

function MenuItem(props) {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios
      .get("/menu")
      .then(({ data }) => {
        const filterData = data.filter(
          (data) => data.category === props.category.name
        );
        console.log(filterData);
        setMenu(filterData);
      })
      .catch((error) => {
        console.log("error"), error;
      });
  }, []);

  return (
    <>
      {menu.length > 0 &&
        menu.map((item) => (
          <div className="menu-item">
            <img className="menu-item__image" src={item.photo} alt="" />
            <div className="menu-item__text">
              <h3>{item.name}</h3>
              <h3>${item.price}.00</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
    </>
  );
}

export default MenuItem;
