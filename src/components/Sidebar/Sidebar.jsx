import React from "react";
import "./Sidebar.css";
import CustomButton from "../Button/CustomButton";
import CustomDropdownOrigin from "../CustomDropdownOrigin/CustomDropdownOrigin";
import CustomDropdownDestination from "../CustomDropdownDestination/CustomDropdownDestination";
import Slider from "../Slider/Slider";

function Sidebar({
  selectOrigin,
  selectDestination,
  switchOneWay,
  switchReturn,
  slide,
  handleChange,
  originValue,
  destinationValue,
}) {
  return (
    <div className="sidebarWrapper">
      <div className="tabWrapper">
        <CustomButton onClick={switchOneWay}>One Way</CustomButton>
        <CustomButton onClick={switchReturn}>Return</CustomButton>
      </div>
      <div className="inputWrapper">
        <CustomDropdownOrigin
          selectOrigin={selectOrigin}
          originValue={originValue}
        ></CustomDropdownOrigin>
        <CustomDropdownDestination
          selectDestination={selectDestination}
          destinationValue={destinationValue}
        ></CustomDropdownDestination>
      </div>
      <div className="sliderWrapper">
        <Slider slide={slide} handleChange={handleChange}></Slider>
      </div>
      <div className="sideImage">
        <img alt="plane" src="https://i.ibb.co/0Y70z2y/blue-plane.png"></img>
      </div>
    </div>
  );
}

export default Sidebar;
