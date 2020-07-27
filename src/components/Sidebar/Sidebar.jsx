import React, { useState } from "react";
import "./Sidebar.css";
import CustomButton from "../Button/CustomButton";
import CustomDropdownOrigin from "../CustomDropdownOrigin/CustomDropdownOrigin";
import CustomDropdownDestination from "../CustomDropdownDestination/CustomDropdownDestination";

function Sidebar({
  selectOrigin,
  selectDestination,
  switchOneWay,
  switchReturn,
}) {
  const [slide, setSlide] = useState(0);
  const handleChange = (event) => {
    setSlide(event.target.value);
  };

  return (
    <div className="sidebarWrapper">
      <div className="tabWrapper">
        <CustomButton onClick={switchOneWay}>One Way</CustomButton>
        <CustomButton onClick={switchReturn}>Return</CustomButton>
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
      <div className="sliderWrapper">
        <strong>Price</strong>
        <input
          type="range"
          min="0"
          max="10000"
          value={slide}
          onChange={handleChange}
          step="1"
        ></input>
        <span>{slide}</span>
      </div>
      <div className="sideImage">
        <img alt="plane" src="https://i.ibb.co/0Y70z2y/blue-plane.png"></img>
      </div>
    </div>
  );
}

export default Sidebar;
