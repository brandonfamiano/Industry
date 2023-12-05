import React, { useState } from "react";
import './Newmenuitem.scss';


//svg import
import LeftArrow from '../../assets/Left-arrow.svg';
import AddIcon from '../../assets/Add-icon.svg';


function NewMenuItem() {
  const [categories, setCategories] = useState(['Appetizer', 'Main', 'Side Dish', 'Dessert', 'Beverage', 'Special']);
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');

  const handleAddCategoryClick = () => {
    setIsAddingCategory(true);
  };

  const handleAddCategory = () => {
    if (newCategoryName.trim()) {
      setCategories(prevCategories => [...prevCategories, newCategoryName]);
      setNewCategoryName('');
      setIsAddingCategory(false);
    }
  };

  const handleNewCategoryNameChange = (e) => {
    setNewCategoryName(e.target.value);
  };

  return (
    <div className="menu__creator">
      <div className="menu__creator--header">
        <div className="menu__headings--container">
          <img className="arrow__icon" src={LeftArrow}></img><h3>Create New Menu Item</h3>
        </div>  
        <div className="menu__page--options">
          Menu / Current Menu / Create New Menu Item
        </div>
      </div>
      <div className="categories">
        {categories.map((category, index) => (
          <button key={index} className="category__button">{category}</button>
        ))}
        <button className="category__button--add-new" onClick={handleAddCategoryClick}>
          <img className="add__icon" src={AddIcon}></img>Add New Category
        </button>
        {isAddingCategory && (
          <div className="create-menu__add-category">
            <input
              type="text"
              className="create-menu__input"
              value={newCategoryName}
              onChange={handleNewCategoryNameChange}
              placeholder="Enter category name"
            />
            <button className="create-menu__button" onClick={handleAddCategory}>
              Add
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default NewMenuItem;