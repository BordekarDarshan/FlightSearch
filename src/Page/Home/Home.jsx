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
  }, [dispatch]);

  const counter = useSelector((state) => state.FlightData);
  console.log(counter);
  return (
    <>
      <Header />
      <div className="container-fluid appWrapper">
        <Sidebar />
        <BookFlight />
      </div>
    </>
  );
}

export default connect()(Home);
