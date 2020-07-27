import React from "react";
import CustomButton from "../Button/CustomButton";

function MultilineFlightCard({ multiline }) {
  return (
    <div className="card flightCardWrapper">
      <div className="flightId">
        <strong>{multiline.name}</strong>
        <CustomButton>Details</CustomButton>
      </div>
      <div className="flightDuration">
        <div className="departure">
          <strong>{multiline.departureTime}</strong>
          <strong>{multiline.origin}</strong>
        </div>
        <div className="arrival">
          <strong>{multiline.arrivalTime}</strong>
          <strong>{multiline.destination}</strong>
        </div>
      </div>
      <div className="payment">
        <strong>₹ {multiline.price}</strong>
        <CustomButton>Book</CustomButton>
      </div>
    </div>
  );
}

export default MultilineFlightCard;
