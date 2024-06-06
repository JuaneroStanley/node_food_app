import React, { useState } from "react";
import "./MenuButton.css";
import DropDownMenu from "./DropDownMenu";

const MenuButton = () => {
  const [isToggled, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!isToggled);
  };
  return (
    <div className="menu_button_all">
      <button className="button_menu" onClick={handleToggle}>
        <div className="bar black"></div>
        <div className="bar bronze"></div>
        <div className="bar black"></div>
        <div className="bar bronze"></div>
      </button>
    </div>
  );
};

export default MenuButton;
