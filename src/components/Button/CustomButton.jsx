import React from "react";
import "./CustomButton.css";

function CustomButton({ children, ...other }) {
  return (
    <div className="btn btn-primary btnTab" {...other}>
      {children}
    </div>
  );
}

export default CustomButton;
