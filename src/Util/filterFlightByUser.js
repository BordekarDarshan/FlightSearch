export const filterFilghtByUser = (origin, destination, data, slide) => {
  let filteredData = data.filter(
    (content) =>
      content.origin === origin &&
      content.destination === destination &&
      content.price < slide
  );
  return filteredData;
};
