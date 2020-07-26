import React from "react";
import "./FlightCard.css";
import CustomButton from "../Button/CustomButton";

function FlightCard({ data }) {
  console.log(data);
  return data.map((content) => (
    <div className="card flightCardWrapper">
      <div className="flightId">
        <span>{content.name}</span>
        <span>{content.flightNo}</span>
      </div>
      <div className="flightDuration">
        <div className="departure">
          <span>{content.departureTime}</span>
          <span>{content.origin}</span>
        </div>
        <div className="arrival">
          <span>{content.arrivalTime}</span>
          <span>{content.destination}</span>
        </div>
        <div className="totalDuration">
          <span>Total duration</span>
        </div>
      </div>
      <div className="payment">
        <span>₹ {content.price}</span>
        <CustomButton>Book</CustomButton>
      </div>
    </div>
  ));
}

export default FlightCard;
