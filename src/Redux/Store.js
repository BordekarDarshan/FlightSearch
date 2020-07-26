import { createStore, combineReducers, applyMiddleware } from "redux";
import { fetchFlightDataReducer } from "./Reducer";
import thunk from "redux-thunk";

const middleware = [thunk];

const rootReducer = combineReducers({ FlightData: fetchFlightDataReducer });

export const store = createStore(rootReducer, applyMiddleware(...middleware));
