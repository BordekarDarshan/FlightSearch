import React from "react";
import "./Sidebar.css";
import CustomButton from "../Button/CustomButton";
import CustomDropdown from "../Dropdown/CustomDropdown";

function Sidebar() {
  return (
    <div className="sidebarWrapper">
      <div className="tabWrapper">
        <CustomButton>One Way</CustomButton>
        <CustomButton>Return</CustomButton>
      </div>
      <div className="inputWrapper">
        <CustomDropdown title="Origin City"></CustomDropdown>
        <CustomDropdown title="Destination City"></CustomDropdown>
      </div>
    </div>
  );
}

export default Sidebar;
