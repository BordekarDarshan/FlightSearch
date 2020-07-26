import React, { useEffect } from "react";
import BookFlight from "../../components/BookFlight/BookFlight";
import { fetchFlightDataThunk } from "../../Redux/Action";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { connect, useSelector } from "react-redux";
import "./Home.css";

function Home({ dispatch }) {
  useEffect(() => {
    dispatch(fetchFlightDataThunk());
  }, []);

  const counter = useSelector((state) => state.FlightData);

  return (
    <>
      <Header />
      <div className="container-fluid">
        <Sidebar />
        <BookFlight />
      </div>
    </>
  );
}

export default connect()(Home);
