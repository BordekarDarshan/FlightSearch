import React, { Component } from "react";
import { connect } from "react-redux";
import BookFlight from "../../components/BookFlight/BookFlight";
import Sidebar from "../../components/Sidebar/Sidebar";
import { fetchFlightDataThunk } from "../../Redux/Action";
import "./Home.css";

export class Home extends Component {
  componentDidMount() {
    this.props.flightData();
  }

  render() {
    return (
      <div className="container-fluid">
        <Sidebar />
        <BookFlight />
      </div>
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
