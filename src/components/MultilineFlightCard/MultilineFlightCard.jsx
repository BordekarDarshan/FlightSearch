import React from "react";
import "./MultilineFlightCard.css";
import CustomButton from "../Button/CustomButton";
import { Accordion, Button } from "react-bootstrap";

function MultilineFlightCard({ multiline }) {
  return (
    <Accordion>
      <div className="card mutilineFlightCardWrapper">
        <div className="mutilineFlightId">
          <strong className="mb-1">{multiline.name}</strong>
          <Accordion.Toggle as={Button} variant="success" eventKey="0">
            Details
          </Accordion.Toggle>
        </div>
        <div className="mutilineFlightDuration">
          <div className="mutilineDeparture">
            <strong>{multiline.departureTime}</strong>
            <strong>{multiline.origin}</strong>
          </div>
          <div className="mutilineArrival">
            <strong>{multiline.arrivalTime}</strong>
            <strong>{multiline.destination}</strong>
          </div>
        </div>
        <div className="mutilinePayment">
          <strong>₹ {multiline.price}</strong>
          <CustomButton>Book</CustomButton>
        </div>
      </div>
      <Accordion.Collapse eventKey="0">
        <>
          {multiline.multiple.map((data) => (
            <div className="card mutilineFlightCardWrapper">
              <div className="mutilineFlightId">
                <strong>{data.name}</strong>
                <span>{data.flightNo}</span>
              </div>
              <div className="mutilineFlightDuration">
                <div className="mutilineDeparture">
                  <strong>{data.departureTime}</strong>
                  <strong>{data.origin}</strong>
                </div>
                <div className="mutilineArrival">
                  <strong>{data.arrivalTime}</strong>
                  <strong>{data.destination}</strong>
                </div>
              </div>
              <div className="mutilinePayment">
                <strong>₹ {data.price}</strong>
              </div>
            </div>
          ))}
        </>
      </Accordion.Collapse>
    </Accordion>
  );
}

export default MultilineFlightCard;
