import React from "react";
import "./Sidebar.css";
import { Dropdown, DropdownButton } from "react-bootstrap";
import CustomButton from "../Button/CustomButton";

function Sidebar() {
  return (
    <div className="sidebarWrapper">
      <div className="tabWrapper">
        <CustomButton>One Way</CustomButton>
        <CustomButton>Return</CustomButton>
      </div>
      <div className="inputWrapper">
        <DropdownButton title="Origin City">
          <Dropdown.Item>Pune (PNQ)</Dropdown.Item>
          <Dropdown.Item>Mumbai (BOM)</Dropdown.Item>
          <Dropdown.Item>Bengaluru (BLR)</Dropdown.Item>
          <Dropdown.Item>Delhi (DEL)</Dropdown.Item>
        </DropdownButton>
        <DropdownButton title="Destination City">
          <Dropdown.Item>Pune (PNQ)</Dropdown.Item>
          <Dropdown.Item>Mumbai (BOM)</Dropdown.Item>
          <Dropdown.Item>Bengaluru (BLR)</Dropdown.Item>
          <Dropdown.Item>Delhi (DEL)</Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
}

export default Sidebar;
