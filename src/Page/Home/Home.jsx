import React, { useEffect, useState } from "react";
import BookFlight from "../../components/BookFlight/BookFlight";
import { fetchFlightDataThunk } from "../../Redux/Action";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { connect, useSelector } from "react-redux";
import "./Home.css";

function Home({ dispatch }) {
  const [originValue, setOriginValue] = useState("");
  const [destinationValue, setDestinationValue] = useState("");
  const [oneWay, setOneWay] = useState(true);

  useEffect(() => {
    dispatch(fetchFlightDataThunk());
  }, [dispatch]);

  const counter = useSelector((state) => state.FlightData);

  const originSelect = (e) => {
    setOriginValue(e);
  };

  const destinationSelect = (e) => {
    setDestinationValue(e);
  };

  const switchOneWay = () => {
    setOneWay(true);
  };

  const switchReturn = () => {
    setOneWay(false);
  };

  return (
    <>
      <Header />
      <div className="container-fluid appWrapper">
        <Sidebar
          data={counter}
          selectOrigin={originSelect}
          selectDestination={destinationSelect}
          switchOneWay={switchOneWay}
          switchReturn={switchReturn}
        />
        {oneWay ? (
          <BookFlight
            data={counter}
            origin={originValue}
            destination={destinationValue}
          />
        ) : (
          <BookFlight
            data={counter}
            origin={destinationValue}
            destination={originValue}
          />
        )}
      </div>
    </>
  );
}

export default connect()(Home);
