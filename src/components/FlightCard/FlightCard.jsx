import React from "react";
import "./FlightCard.css";
import CustomButton from "../Button/CustomButton";

function FlightCard({ data }) {
  console.log(data);
  return data.map((content) => (
    <div className="flightCardWrapper">
      <span>{content.name}</span>
      <div className="flightDuration">
        <span>{content.arrivalTime}</span>
        <span>{content.departureTime}</span>
        <span>Total</span>
      </div>
      <div className="payment">
        <span>{content.price}</span>
        <CustomButton>Book</CustomButton>
      </div>
    </div>
  ));
}

export default FlightCard;
