import React from "react";
import FlightCard from "../FlightCard/FlightCard";
import "./BookFlight.css";

function BookFlight({ data }) {
  return (
    <div className="bookFlightWrapper">
      <div className="selectedFlight">
        <span className="flightName">Name</span>
        <span className="flightResult">Result</span>
      </div>
      <div className="flightScheduleWrapper">
        <FlightCard data={data}></FlightCard>
      </div>
    </div>
  );
}

export default BookFlight;
