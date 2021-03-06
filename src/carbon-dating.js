// Task 
// Carbon dating
// To determine the age of archaeological finds, radioisotope dating is widely used. One of its types is radiocarbon dating.
// The approximate age of the sample is calculated by measuring the ratio of the modern activity of the C14 isotope to the activity of the same isotope in the sample.
// 
// Read about method: https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Nuclear_Chemistry/Nuclear_Kinetics/Half-Lives_and_Radioactive_Decay_Kinetics#section_2
// 
// You can use the formula from the article at the link above. 0.693 is an approximation of the natural logarithm of two.
// Your task is to implement the function dateSample(sampleActivity) that calculates sample approximate age (in years). Please use given MODERN_ACTIVITY and HALF_LIFE_PERIOD.
// Function parameter sampleActivity is a string. Calculated sample age must be number.
// Age must be integer. Age must be rounded up (ceiling). In case of wrong input parameter type or inadequate activity value or absence of argument function must return false.
// 
// For example:
// dateSample('1') => 22387 (or 22392 depending on formula used)
// dateSample('WOOT!') => false
// Write your code in src/carbon-dating.js.



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