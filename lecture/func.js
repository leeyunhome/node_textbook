// const value = require("./var");
// console.log(value);

const { odd, even } = require("./var");

function checkOddOrEven(number) {
  if (number % 2) {
    return odd;
  }

  return even;
}

console.log(checkOddOrEven(2));
console.log(checkOddOrEven(3));
