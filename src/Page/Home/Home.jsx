import React from "react";
import BookFlight from "../../components/BookFlight/BookFlight";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.css";

function Home() {
  return (
    <div className="container-fluid">
      <Sidebar />
      <BookFlight />
    </div>
  );
}

export default Home;
