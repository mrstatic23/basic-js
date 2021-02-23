const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let cats = 0;
  backyard.join().split(',').forEach(item => {
    if (item === '^^') {
      cats++;
    };
  });
  return cats;
}; 