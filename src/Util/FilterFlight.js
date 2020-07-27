import { filterFilghtByUser } from "./filterFlightByUser";
import { searchMultiAirline } from "./searchMultiAirline";
import { samePlaceSelection } from "./samePlaceSelection";

export function filterFlight(origin, destination, data, slide) {
  if (origin === destination) {
    let samePlace = samePlaceSelection();
    return samePlace;
  } else {
    let filteredData = filterFilghtByUser(origin, destination, data, slide);
    let MultiAirline = searchMultiAirline(origin, destination, data);

    if (MultiAirline && filteredData) {
      return [MultiAirline, ...filteredData];
    } else {
      return filteredData;
    }
  }
}
