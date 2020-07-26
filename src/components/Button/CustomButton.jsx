import React from "react";
import "./CustomButton.css";

function CustomButton({ children, ...other }) {
  return (
    <div className="customButtonWrapper">
      <span className="btn btn-primary btnTab" {...other}>
        {children}
      </span>
    </div>
  );
}

export default CustomButton;
