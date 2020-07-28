export const CalculateTotalDuration = (arrTime, desTime) => {
  let calcArrMin = parseTime(arrTime);
  let calcDesMin = parseTime(desTime);

  let totalTime = calcArrMin - calcDesMin;
  return getMinHourFormat(totalTime);
};

const parseTime = (time) => {
  let getMin = time.split(":");
  return parseInt(getMin[0] * 60 + parseInt(getMin[1]));
};

function getMinHourFormat(min) {
  let para = min;
  let hour = para / 60;
  let roundHr = Math.floor(hour);
  let minutes = (hour - roundHr) * 60;
  let roundMin = Math.round(minutes);
  return `${roundHr} h ${roundMin} min`;
}
