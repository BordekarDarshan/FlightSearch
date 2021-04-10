import axios from "axios";

const fetchFlightDataAction = (data) => ({
  type: "Fetch_Flight_Data",
  payload: data,
});

export const fetchFlightDataThunk = () => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://flight.free.beeceptor.com/my/api/path`
    );

    dispatch(fetchFlightDataAction(response.data));
  };
};
