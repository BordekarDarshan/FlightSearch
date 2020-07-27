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
}) {
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
        <Slider slide={slide} handleChange={handleChange}></Slider>
      </div>
      <div className="sideImage">
        <img alt="plane" src="https://i.ibb.co/0Y70z2y/blue-plane.png"></img>
      </div>
    </div>
  );
}

export default Sidebar;
