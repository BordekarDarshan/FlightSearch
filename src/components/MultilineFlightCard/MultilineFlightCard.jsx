import React from "react";
import {
  MutilineFlightStyle,
  FlightIdStyle,
  FlightDurationStyle,
  DepartureStyle,
  ArrivalStyle,
  TimeSpanStyle,
  PaymentStyle,
  AccordianStyle,
} from "./MultilineFlightCard.Style";
import "./MultilineFlightCard.css";
import CustomButton from "../Button/CustomButton";
import { Accordion, Button } from "react-bootstrap";
import FlightDuration from "../FlightDuration/FlightDuration";

function MultilineFlightCard({ multiline }) {
  return (
    <AccordianStyle>
      <MutilineFlightStyle className="card">
        <FlightIdStyle>
          <strong>{multiline.name}</strong>
          <Accordion.Toggle as={Button} variant="success" eventKey="0">
            Details
          </Accordion.Toggle>
        </FlightIdStyle>
        <FlightDurationStyle>
          <DepartureStyle>
            <strong>{multiline.departureTime}</strong>
            <strong>{multiline.origin}</strong>
          </DepartureStyle>
          <ArrivalStyle>
            <strong>{multiline.arrivalTime}</strong>
            <strong>{multiline.destination}</strong>
          </ArrivalStyle>
        </FlightDurationStyle>
        <PaymentStyle>
          <strong>₹ {multiline.price}</strong>
          <CustomButton>Book</CustomButton>
        </PaymentStyle>
      </MutilineFlightStyle>
      <Accordion.Collapse eventKey="0">
        <>
          {multiline.multiple.map((data) => (
            <MutilineFlightStyle className="card">
              <FlightIdStyle>
                <strong>{data.name}</strong>
                <span>{data.flightNo}</span>
              </FlightIdStyle>
              <FlightDurationStyle>
                <DepartureStyle>
                  <strong>{data.departureTime}</strong>
                  <strong>{data.origin}</strong>
                </DepartureStyle>
                <ArrivalStyle>
                  <strong>{data.arrivalTime}</strong>
                  <strong>{data.destination}</strong>
                </ArrivalStyle>
                <TimeSpanStyle>
                  <FlightDuration a={data.arrivalTime} b={data.departureTime} />
                  <span>Non stop</span>
                </TimeSpanStyle>
              </FlightDurationStyle>
              <PaymentStyle>
                <strong>₹ {data.price}</strong>
              </PaymentStyle>
            </MutilineFlightStyle>
          ))}
        </>
      </Accordion.Collapse>
    </AccordianStyle>
  );
}

export default MultilineFlightCard;
