export const searchMultiAirline = (origin, destination, data) => {
  if (origin === destination) {
    return null;
  } else {
    let originData = data.filter((data) => data.origin === origin);
    let destinationData = data.filter(
      (data) => data.destination === destination
    );
    for (const origin of originData) {
      for (const destination of destinationData) {
        if (origin.destination === destination.origin) {
          let refinedContent = {
            id: 1,
            multiple: [origin, destination],
            name: "Multiple",
            TotalDuration: "",
            departureTime: origin.departureTime,
            arrivalTime: destination.arrivalTime,
            price: calculatePrice(origin, destination),
            origin: origin.origin,
            destination: destination.destination,
          };
          return refinedContent;
        }
      }
    }
  }
};

const calculatePrice = (...array) => {
  return array.reduce((prev, next) => prev + next.price, 0);
};
