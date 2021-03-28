const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const operatinTime = 3600 / turnsSpeed,
      minValueOfOperation = (2 ** disksNumber) -1,
      seconds = Math.floor(operatinTime * minValueOfOperation);
  
  let solution = {
    turns: minValueOfOperation,
    seconds: seconds,
  };

  return solution;
};