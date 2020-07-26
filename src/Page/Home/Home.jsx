import React, { useEffect, useState } from "react";
import BookFlight from "../../components/BookFlight/BookFlight";
import { fetchFlightDataThunk } from "../../Redux/Action";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { connect, useSelector } from "react-redux";
import "./Home.css";

function Home({ dispatch }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    dispatch(fetchFlightDataThunk());
  }, [dispatch]);

  const counter = useSelector((state) => state.FlightData);

  const handleSelect = (e) => {
    console.log(e);
    setValue(e);
  };

  return (
    <>
      <Header />
      <div className="container-fluid appWrapper">
        <Sidebar data={counter} selectCity={handleSelect} />
        <BookFlight data={counter} />
      </div>
    </>
  );
}

export default connect()(Home);
