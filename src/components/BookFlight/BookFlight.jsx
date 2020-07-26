import React from "react";
import FlightCard from "../FlightCard/FlightCard";
import "./BookFlight.css";

function BookFlight() {
  return (
    <div className="bookFlightWrapper">
      <div className="selectedFlight">
        <span className="flightName">Name</span>
        <span className="flightResult">Result</span>
      </div>
      <div className="flightScheduleWrapper">
        <FlightCard></FlightCard>
      </div>
    </div>
  );
}

export default BookFlight;
