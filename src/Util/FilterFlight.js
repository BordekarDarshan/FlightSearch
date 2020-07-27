export function filterFlight(origin, destination, data) {
  if (origin === destination) {
    let originalData = sameFlightSelection(data);
    return originalData;
  } else {
    let filteredData = filterFilghtByUser(origin, destination, data);
    let MultiAirline = searchMultiAirline(origin, destination, data);

    if (MultiAirline && filteredData) {
      return [...MultiAirline, ...filteredData];
    } else {
      return filteredData;
    }
  }
}

const filterFilghtByUser = (origin, destination, data) => {
  let filteredData = data.filter(
    (content) =>
      content.origin === origin && content.destination === destination
  );
  return filteredData;
};

const sameFlightSelection = (data) => {
  return data;
};

const searchMultiAirline = (origin, destination, data) => {
  let originData = data.filter((data) => data.origin === origin);
  let destinationData = data.filter((data) => data.destination === destination);
  for (const origin of originData) {
    for (const destination of destinationData) {
      if (origin.destination === destination.origin) {
        return [origin, destination];
      }
    }
  }
};
