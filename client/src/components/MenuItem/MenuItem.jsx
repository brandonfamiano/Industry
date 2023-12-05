import "./MenuItem.scss";

function MenuItem(props) {
  return (
    <div className="menu-item">
      <div>image</div>
      <div className="menu-item__text">
        <h3>Guacamole and Chips</h3>
        <h3>$11.00</h3>
        <p>Fresh Avacado, Tomatoes, Onions, Cilantro, and Lime</p>
      </div>
    </div>
  );
}

export default MenuItem;
