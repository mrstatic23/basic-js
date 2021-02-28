const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {

  if (!Array.isArray(array)) {
    throw new Error("Initial data is not array");
}

const tArray = [];
const command = [ "--discard-next", "--discard-prev", "--double-next", "--double-prev" ]

for (let i = 0; i < array.length; i++) {

switch (command.find(e => e === array[i])) {
  case "--discard-next":
    if (i !== array.length) {
      tArray.push(undefined);
      i++;
    }
    break;
  case "--discard-prev":
    if (i !== 0) {
      tArray.pop();
    }
    break;
  case "--double-next":
    if (i !== array.length) {
      tArray.push(array[i + 1]);
    }
    break;
  case "--double-prev":
    if (i !== 0) {
      tArray.push(tArray[tArray.length - 1]);
    }
    break;
  default:
    tArray.push(array[i])
    continue;
}
}

return tArray.filter(e => e !== undefined);
};