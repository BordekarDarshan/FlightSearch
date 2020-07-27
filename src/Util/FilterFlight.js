export function filterFlight(origin, destination, data) {
  searchMultiAirline(origin, destination, data);
  if (origin === destination) {
    let originalData = sameFlightSelection(data);
    return originalData;
  } else {
    let filteredData = filterFilghtByUser(origin, destination, data);
    return filteredData;
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

// origin's destination === destination's origin

const searchMultiAirline = (origin, destination, data) => {
  let originData = data.filter((data) => data.origin === origin);
  let destinationData = data.filter((data) => data.destination === destination);
  let concatedData = [...originData, ...destinationData];
  return concatedData;
};
