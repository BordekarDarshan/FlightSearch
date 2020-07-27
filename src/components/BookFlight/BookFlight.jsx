import React from "react";
import FlightCard from "../FlightCard/FlightCard";
import { filterFlight } from "../../Util/FilterFlight";
import "./BookFlight.css";
import MultilineFlightCard from "../MultilineFlightCard/MultilineFlightCard";
import { searchMultiAirline } from "../../Util/searchMultiAirline";

function BookFlight({ data, origin, destination, slide }) {
  let filteredData = filterFlight(origin, destination, data, slide);
  let mutilineData = searchMultiAirline(origin, destination, data);

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
        {mutilineData && (
          <MultilineFlightCard multiline={mutilineData}></MultilineFlightCard>
        )}
      </div>
    </div>
  );
}

export default BookFlight;
