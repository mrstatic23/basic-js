// Extended repeater
// Your task is to implement the function repeater(str, options). This function returns a repeating string based on the given parameters:
// 
// str is a string to repeat;
// options is an object of options, that contains properties:
// repeatTimes sets the number of repetitions of the str;
// separator is a string separating repetitions of the str;
// addition is an additional string that will be added to each repetition of the str;
// additionRepeatTimes sets the number of repetitions of the addition;
// additionSeparator is a string separating repetitions of the addition.
// The str and addition parameters are strings by default. In case when type of these parameters is different, they must be converted to a string.
// 
// separator and additionSeparator parameters are strings.
// 
// repeatTimes and additionRepeatTimes are integer numbers (in the absence of any of them, the corresponding string is not repeated).
// 
// The only indispensable parameter is str, any others may be not defined. separator default value is '+'. additionSeparator default value is '|'.
// 
// For example: 
// repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }) => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
// 
// Write your code in src/extended-repeater.js.

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