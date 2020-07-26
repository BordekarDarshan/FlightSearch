import React from "react";
import "./Sidebar.css";
import CustomButton from "../Button/CustomButton";
import CustomDropdownOrigin from "../CustomDropdownOrigin/CustomDropdownOrigin";
import CustomDropdownDestination from "../CustomDropdownDestination/CustomDropdownDestination";

function Sidebar({ selectOrigin, selectDestination }) {
  return (
    <div className="sidebarWrapper">
      <div className="tabWrapper">
        <CustomButton>One Way</CustomButton>
        <CustomButton>Return</CustomButton>
      </div>
      <div className="inputWrapper">
        <CustomDropdownOrigin
          title="Origin City"
          selectOrigin={selectOrigin}
        ></CustomDropdownOrigin>
        <CustomDropdownDestination
          title="Destination City"
          selectDestination={selectDestination}
        ></CustomDropdownDestination>
      </div>
      <div className="sideImage">
        <img alt="plane" src="https://i.ibb.co/0Y70z2y/blue-plane.png"></img>
      </div>
    </div>
  );
}

export default Sidebar;
