import React from "react";
import FlightCard from "../FlightCard/FlightCard";
import { filterFlight } from "../../Util/FilterFlight";
import "./BookFlight.css";

function BookFlight({ data, origin, destination }) {
  let filteredData = filterFlight(origin, destination, data);

  return (
    <div className="bookFlightWrapper">
      <div className="selectedFlight">
        {origin && destination && (
          <span className="flightName">
            {origin} To {destination}
          </span>
        )}
        <span className="flightResult">
          <strong>{filteredData.length}</strong> Flights Found
        </span>
      </div>
      <div className="flightScheduleWrapper">
        <FlightCard data={filteredData}></FlightCard>
      </div>
    </div>
  );
}

export default BookFlight;
