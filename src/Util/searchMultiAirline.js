export const searchMultiAirline = (origin, destination, data) => {
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
