import "../assets/styles/newMenuSpecial.scss";

function NewMenuSpecial() {
  return (
    <div className="special__main">
      <div>
        <h3>Special</h3>
        <p>Menu / Current Menu / Create New Menu Item / Special</p>
      </div>
      <div>
        <h4>Recommend Items</h4>
        <div className="item-img"></div>
      </div>

      <div>
        <h4>New Items</h4>
        <div>
          <div className="uploadImg"></div>
          <form>
            <div>
              <label>Item Name</label>
              <input type="text" name="itemName" placeholder="Item Name" />
              <label>Item Price</label>
              <input type="text" name="itemPrice" placeholder="Item Price" />
            </div>
            <label>Description</label>
            <textarea
              name="itemDescription"
              id=""
              cols="30"
              rows="10"
              placeholder="Item Description"
            ></textarea>
          </form>
          <button>Add</button>
        </div>
      </div>
    </div>
  );
}

export default NewMenuSpecial;
