import "../assets/styles/newMenuSpecial.scss";
import back_arrow from "../assets/Icons/Left-arrow.png";

function NewMenuSpecial() {
  return (
    <div className="special__main">
      <div className="special__header-container">
        <div className="special__block">
          <div className="special__back-arrow">
            <img src={back_arrow} />
            <h3 className="special__heading">Special</h3>
          </div>

          <p className="special__para">
            <a href="#">Menu</a>/<a href="#">Current Menu</a>/
            <a href="#">Create New Menu Item</a>/
            <span className="special__special-text">Special</span>
          </p>
        </div>
      </div>
      <div>
        <h4 className="special__subheading recommend-items">Recommend Items</h4>
        <div className="item-img"></div>
      </div>
      <h4 className="special__subheading">New Items</h4>
      <div className="newItem__main">
        <div className="special__subcontainer">
          <button className="uploadImg">Upload Image</button>
        </div>
        <form className="form">
          <div className="form-input">
            <div className="input-box">
              <label className="input-label">Item Name</label>
              <input
                type="text"
                name="itemName"
                placeholder="Item Name"
                className="input-text"
              />
            </div>
            <div className="input-box">
              <label className="input-label">Item Price</label>
              <input
                type="text"
                name="itemPrice"
                placeholder="Item Price"
                className="input-text"
              />
            </div>
          </div>
          <div className="input-box">
            {" "}
            <label className="input-label">Description</label>
            <textarea
              name="itemDescription"
              id=""
              cols="30"
              rows="10"
              placeholder="Item Description"
              className="input-text textarea-text"
            ></textarea>
          </div>
        </form>
      </div>
      <button className="add-bttn">ADD</button>
    </div>
  );
}

export default NewMenuSpecial;
