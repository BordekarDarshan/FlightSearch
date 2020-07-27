export function filterFlight(origin, destination, data) {
  if (origin === destination) {
    let originalData = sameFlightSelection(data);
    return originalData;
  } else {
    let filteredData = data.filter(
      (content) =>
        content.origin === origin && content.destination === destination
    );
    return filteredData;
  }
}

const sameFlightSelection = (data) => {
  return data;
};
