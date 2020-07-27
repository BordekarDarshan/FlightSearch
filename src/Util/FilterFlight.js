import { filterFilghtByUser } from "./filterFlightByUser";
import { samePlaceSelection } from "./samePlaceSelection";

export function filterFlight(origin, destination, data, slide) {
  if (origin === destination) {
    let samePlace = samePlaceSelection();
    return samePlace;
  } else {
    let filteredData = filterFilghtByUser(origin, destination, data, slide);
    return filteredData;
  }
}
