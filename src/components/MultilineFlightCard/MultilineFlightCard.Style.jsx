import { Accordion } from "react-bootstrap";
import styled, { css } from "styled-components";

const alignCommon = css`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const commonAdjust = css`
  @media screen and (max-width: 968px) {
    width: 100%;
    margin: 2% 0 2% 0;
  }
`;

export const MutilineFlightStyle = styled.div`
  display: flex !important;
  flex-direction: row !important;
  justify-content: space-between;
  margin: 2% 0 2% 0;
  padding: 2%;
  @media screen and (max-width: 968px) {
    width: 25rem;
    display: flex;
    flex-direction: column !important;
  }
  @media screen and (max-width: 668px) {
    width: 100%;
  }
`;

export const FlightIdStyle = styled.div`
  min-width: 5em;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  > button {
    width: 6em;
  }
  ${commonAdjust}
  @media screen and (max-width: 968px) {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
  }
`;

export const FlightDurationStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  ${commonAdjust}

  @media screen and (max-width: 968px) {
    justify-content: space-between;
  }
`;

export const DepartureStyle = styled.div`
  ${alignCommon}
`;
export const ArrivalStyle = styled.div`
  ${alignCommon}
`;

export const TimeSpanStyle = styled.div`
  ${alignCommon}
`;

export const PaymentStyle = styled.div`
  min-width: 10em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${commonAdjust}
`;

export const AccordianStyle = styled(Accordion)`
  @media screen and (max-width: 668px) {
    display: flex;
    flex-flow: column;
    width: 96%;
  }
`;
