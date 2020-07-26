import React from "react";
import "./Sidebar.css";
import CustomButton from "../Button/CustomButton";
import CustomDropdown from "../Dropdown/CustomDropdown";

function Sidebar({ selectCity }) {
  return (
    <div className="sidebarWrapper">
      <div className="tabWrapper">
        <CustomButton>One Way</CustomButton>
        <CustomButton>Return</CustomButton>
      </div>
      <div className="inputWrapper">
        <CustomDropdown
          title="Origin City"
          selectCity={selectCity}
        ></CustomDropdown>
        <CustomDropdown
          title="Destination City"
          selectCity={selectCity}
        ></CustomDropdown>
      </div>
      <div className="sideImage">
        <img alt="plane" src="https://i.ibb.co/0Y70z2y/blue-plane.png"></img>
      </div>
    </div>
  );
}

export default Sidebar;
