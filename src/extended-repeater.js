const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (str === undefined) {
    throw new Error('str is not existed');
  }

  let { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options;

  str = String(str);
  addition = addition === undefined ? addition : String(addition);
  separator = (separator === undefined) ? '+' : String(separator);
  additionSeparator = (additionSeparator === undefined) ? '|' : String(additionSeparator)

  str += Array(additionRepeatTimes).fill(addition).join(additionSeparator);

  return Array(repeatTimes).fill(str).join(separator);
};