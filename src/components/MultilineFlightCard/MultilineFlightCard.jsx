import React from "react";
import "./MultilineFlightCard.css";
import CustomButton from "../Button/CustomButton";

function MultilineFlightCard({ multiline }) {
  return (
    <div className="card mutilineFlightCardWrapper">
      <div className="mutilineFlightId">
        <strong>{multiline.name}</strong>
        <CustomButton>Details</CustomButton>
      </div>
      <div className="mutilineFlightDuration">
        <div className="mutilineDeparture">
          <strong>{multiline.departureTime}</strong>
          <strong>{multiline.origin}</strong>
        </div>
        <div className="mutilineArrival">
          <strong>{multiline.arrivalTime}</strong>
          <strong>{multiline.destination}</strong>
        </div>
      </div>
      <div className="mutilinePayment">
        <strong>₹ {multiline.price}</strong>
        <CustomButton>Book</CustomButton>
      </div>
    </div>
  );
}

export default MultilineFlightCard;
