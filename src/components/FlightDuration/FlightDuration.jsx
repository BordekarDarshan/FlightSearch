import React from "react";
import { CalculateTotalDuration } from "../../Util/CalculateTime";

function FlightDuration({ a, b }) {
  let flightSpan = CalculateTotalDuration(a, b);
  return <strong>{flightSpan}</strong>;
}

export default FlightDuration;
