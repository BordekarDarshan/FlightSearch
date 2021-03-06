import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

function CustomDropdownDestination({ selectDestination, destinationValue }) {
  return (
    <div className="customDropdownWrapper">
      <DropdownButton title={destinationValue} onSelect={selectDestination}>
        <Dropdown.Item eventKey="Pune (PNQ)">Pune (PNQ)</Dropdown.Item>
        <Dropdown.Item eventKey="Mumbai (BOM)">Mumbai (BOM)</Dropdown.Item>
        <Dropdown.Item eventKey="Bengaluru (BLR)">
          Bengaluru (BLR)
        </Dropdown.Item>
        <Dropdown.Item eventKey="Delhi (DEL)">Delhi (DEL)</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default CustomDropdownDestination;
