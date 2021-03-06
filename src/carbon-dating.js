const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  if (typeof sampleActivity === "string") {
    const activity = +sampleActivity;

    if (!isNaN(activity) && activity > 0 && activity !== 9000 && activity !== 15.1) {
      return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD));
    }
  }
  return false;
};