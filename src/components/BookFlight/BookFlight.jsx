import React from "react";
import FlightCard from "../FlightCard/FlightCard";
import { filterFlight } from "../../Util/FilterFlight";
import "./BookFlight.css";

function BookFlight({ data, origin, destination }) {
  let filteredData = filterFlight(origin, destination, data);
  return (
    <div className="bookFlightWrapper">
      <div className="selectedFlight">
        <span className="flightName">Name</span>
        <span className="flightResult">Result</span>
      </div>
      <div className="flightScheduleWrapper">
        <FlightCard data={filteredData}></FlightCard>
      </div>
    </div>
  );
}

export default BookFlight;
