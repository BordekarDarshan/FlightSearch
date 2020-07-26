export const fetchFlightDataReducer = (state = [], action) => {
  switch (action.type) {
    case "Fetch_Flight_Data":
      return action.payload;

    default:
      return state;
  }
};
