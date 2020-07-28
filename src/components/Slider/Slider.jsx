import React from "react";

function Slider({ slide, handleChange }) {
  return (
    <>
      <strong>Price</strong>
      <input
        type="range"
        min="0"
        max="20000"
        value={slide}
        onChange={handleChange}
        step="1"
      ></input>
      <span>{slide}</span>
    </>
  );
}

export default Slider;
