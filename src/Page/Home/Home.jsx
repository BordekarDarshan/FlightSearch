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

  useEffect(() => {
    dispatch(fetchFlightDataThunk());
  }, [dispatch]);

  const counter = useSelector((state) => state.FlightData);

  const originSelect = (e) => {
    console.log(e);
    setOriginValue(e);
  };

  const destinationSelect = (e) => {
    console.log(e);
    setDestinationValue(e);
  };
  console.log("origin", originValue, "dest", destinationValue);
  return (
    <>
      <Header />
      <div className="container-fluid appWrapper">
        <Sidebar
          data={counter}
          selectOrigin={originSelect}
          selectDestination={destinationSelect}
        />
        <BookFlight data={counter} />
      </div>
    </>
  );
}

export default connect()(Home);
