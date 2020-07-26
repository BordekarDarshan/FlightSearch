import React from "react";
import "./CustomDropdown.css";
import { Dropdown, DropdownButton } from "react-bootstrap";

function CustomDropdown({ title }) {
  return (
    <div className="customDropdownWrapper">
      <DropdownButton title={title}>
        <Dropdown.Item>Pune (PNQ)</Dropdown.Item>
        <Dropdown.Item>Mumbai (BOM)</Dropdown.Item>
        <Dropdown.Item>Bengaluru (BLR)</Dropdown.Item>
        <Dropdown.Item>Delhi (DEL)</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default CustomDropdown;
