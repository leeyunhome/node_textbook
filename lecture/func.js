// const value = require("./var");
// console.log(value);

// import { odd, even } from "./var";
const { odd, even } = require("./var");

// console.time("hi");
function checkOddOrEven(number) {
  if (number % 2) {
    return odd;
  }

  return even;
}
// console.timeEnd("hi");

// console.log(checkOddOrEven(2));
// console.log(checkOddOrEven(3));

module.exports = checkOddOrEven;
// export default checkOddOrEven;

// module.exports = {
//   checkOddOrEven,
//   odd,
//   even,
// };
