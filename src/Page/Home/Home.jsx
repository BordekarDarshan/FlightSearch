import React, { Component } from "react";
import "./Home.css";
import { connect } from "react-redux";
import Sidebar from "../../components/Sidebar/Sidebar";
import { fetchFlightDataThunk } from "../../Redux/Action";
import BookFlight from "../../components/BookFlight/BookFlight";
import Header from "../../components/Header/Header";

export class Home extends Component {
  componentDidMount() {
    this.props.flightData();
  }

  render() {
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
}

const mapStateToProps = (state) => ({
  flightContent: state.FlightData,
});

const mapDispatchToProps = (dispatch) => ({
  flightData: () => dispatch(fetchFlightDataThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
