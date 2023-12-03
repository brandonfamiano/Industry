import React from "react";
import './CreateNewMenuItem.scss';

function CreateNewMenuItem (props) {

    menuItem = props.menuItem;

    return (
        <div className="menu__item--container">
                    <h4 className="menu__item">{menuItem}</h4>
        </div>

    );
}