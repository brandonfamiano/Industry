import "../assets/styles/newMenuSpecial.scss";
import back_arrow from "../assets/Icons/Left-arrow.png";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NewMenuSpecial() {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [recommendItems, setRecommendItems] = useState([]);

  useEffect(() => {
    // Fetch data from the server using Axios
    const fetchData = async () => {
      try {
        const [responseFood, responseDrink] = await Promise.all([
          axios.get("trends/food"),
          axios.get("trends/drink"),
        ]);
        const foodItems = responseFood.data;
        const drinkItems = responseDrink.data;
        const items = [...foodItems, ...drinkItems];
        setRecommendItems(items);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    // Call the fetch function
    fetchData();
  }, []);

  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleAddItemName = (e) => {
    setItemName(e.target.value);
  };

  const handleAddItemPrice = (e) => {
    setItemPrice(e.target.value);
  };
  const handleAddItemDescription = (e) => {
    setItemDescription(e.target.value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setUploadedImage(file);

    // Display image preview
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleUploadBttn = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form Validation
    if (!itemName || !itemPrice || !itemDescription || !uploadedImage) {
      alert("All fields are required");
      return;
    }
    const newItem = {
      itemName,
      itemPrice,
      itemDescription,
      uploadedImage,
    };

    console.log("Submitting item:", newItem);

    localStorage.setItem("newMenuItem", JSON.stringify(newItem));

    navigate("/menu");

    setItemName("");
    setItemPrice("");
    setItemDescription("");
    setUploadedImage(null);
    setImagePreview(null);
  };

  const handleAddButtonClick = () => {
    // Manually trigger the form submission when the "ADD" button is clicked
    handleSubmit({
      preventDefault: () => {},
    });
  };

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
        <div className="item-img">
          {/* Display fetched data */}
          {recommendItems.map((item) => (
            <div key={item._id}>
              <p>{item.name}</p>
                  <p>{item.review}</p>
                  <img src={item.photo} alt="" />
            </div>
          ))}
        </div>
      </div>
      <h4 className="special__subheading">New Items</h4>
      <div className="newItem__main">
        <div className="special__subcontainer">
          <button
            className="uploadImg"
            onClick={handleUploadBttn}
            style={{
              backgroundImage: `url(${imagePreview})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            {!imagePreview && "Upload Image"}
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-input">
            <div className="input-box">
              <label className="input-label">Item Name</label>
              <input
                type="text"
                name="itemName"
                placeholder="Item Name"
                className="input-text"
                onChange={handleAddItemName}
              />
            </div>
            <div className="input-box">
              <label className="input-label">Item Price</label>
              <input
                type="text"
                name="itemPrice"
                placeholder="Item Price"
                className="input-text"
                onChange={handleAddItemPrice}
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
              onChange={handleAddItemDescription}
            ></textarea>
          </div>
        </form>
      </div>
      <button className="add-bttn" onClick={handleAddButtonClick}>
        ADD
      </button>
    </div>
  );
}
export default NewMenuSpecial;
