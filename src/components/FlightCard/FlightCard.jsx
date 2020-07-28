import React from "react";
import "./FlightCard.css";
import CustomButton from "../Button/CustomButton";
import FlightDuration from "../FlightDuration/FlightDuration";

function FlightCard({ data }) {
  console.log(data);
  return data.map((content) => (
    <div className="card flightCardWrapper">
      <div className="flightId">
        <strong>{content.name}</strong>
        <span>{content.flightNo}</span>
      </div>
      <div className="flightDuration">
        <div className="departure">
          <strong>{content.departureTime}</strong>
          <strong>{content.origin}</strong>
        </div>
        <div className="arrival">
          <strong>{content.arrivalTime}</strong>
          <strong>{content.destination}</strong>
        </div>
        <div className="timeSpan">
          <FlightDuration
            a={content.arrivalTime}
            b={content.departureTime}
          ></FlightDuration>
          <span>Non Stop</span>
        </div>
      </div>
      <div className="payment">
        <strong>₹ {content.price}</strong>
        <CustomButton>Book</CustomButton>
      </div>
    </div>
  ));
}

export default FlightCard;
