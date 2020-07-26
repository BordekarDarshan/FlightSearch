import React from "react";
import "./FlightCard.css";
import CustomButton from "../Button/CustomButton";

function FlightCard() {
  return (
    <div className="flightCardWrapper">
      <span>Flight Name</span>
      <div className="flightDuration">
        <span>Arrival</span>
        <span>Departure</span>
        <span>Total</span>
      </div>
      <div className="payment">
        <span>Rs</span>
        <CustomButton>Book</CustomButton>
      </div>
    </div>
  );
}

export default FlightCard;
