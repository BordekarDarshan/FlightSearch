import React from "react";
import "./Button.css";

function Button({ children, ...other }) {
  return (
    <div className="btn btn-primary btnTab" {...other}>
      {children}
    </div>
  );
}

export default Button;
