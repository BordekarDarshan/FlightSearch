import React from "react";
import { Slide } from "../MultilineFlightCard/MultilineFlightCard.Style";

function Slider({ slide, handleChange }) {
  let strongStyle = {
    marginBottom: "10px",
  };
  return (
    <>
      <strong style={strongStyle}>Price</strong>
      <input
        type="range"
        min="0"
        max="20000"
        value={slide}
        onChange={handleChange}
        step="1"
      ></input>
      <Slide>{slide}</Slide>
    </>
  );
}

export default Slider;
