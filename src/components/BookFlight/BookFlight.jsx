import React from "react";
import FlightCard from "../FlightCard/FlightCard";
import { filterFlight } from "../../Util/FilterFlight";
import MultilineFlightCard from "../MultilineFlightCard/MultilineFlightCard";
import { searchMultiAirline } from "../../Util/searchMultiAirline";
import "./BookFlight.css";

function BookFlight({ data, origin, destination, slide }) {
  let filteredData = filterFlight(origin, destination, data, slide);
  let multiline = searchMultiAirline(origin, destination, data);

  return (
    <div className="bookFlightWrapper">
      <div className="selectedFlight">
        {origin && destination && (
          <span className="flightName">
            {origin} To {destination}
          </span>
        )}
        <span className="flightResult">
          {multiline ? (
            <strong>{filteredData.length + multiline.id} Flights Found </strong>
          ) : (
            <strong>{filteredData.length} Flights Found </strong>
          )}
        </span>
      </div>
      <div className="flightScheduleWrapper">
        <FlightCard data={filteredData}></FlightCard>
        {multiline && multiline.price < slide && (
          <MultilineFlightCard multiline={multiline}></MultilineFlightCard>
        )}
      </div>
    </div>
  );
}

export default BookFlight;
