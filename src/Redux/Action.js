import axios from "axios";

const fetchFlightDataAction = (data) => ({
  type: "Fetch_Flight_Data",
  payload: data,
});

export const fetchFlightDataThunk = () => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://tw-frontenders.firebaseio.com/advFlightSearch.json`
    );

    dispatch(fetchFlightDataAction(response.data));
  };
};
