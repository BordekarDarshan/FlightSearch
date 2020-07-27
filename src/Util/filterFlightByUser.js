export const filterFilghtByUser = (origin, destination, data) => {
  let filteredData = data.filter(
    (content) =>
      content.origin === origin && content.destination === destination
  );
  return filteredData;
};
