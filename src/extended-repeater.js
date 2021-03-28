const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = "";
  let {
    repeatTimes = 0,
    separator = "+",
    addition = "",
    additionRepeatTimes = 0,
    additionSeparator = "|",
  } = options;
  
  if (repeatTimes == 0) {
    result = str + addition;
  }
  for (let i = 0; i < repeatTimes; i++) {
    result = result + str;
    if (addition && !additionRepeatTimes) {
      result = result + addition;
    }
    if (additionRepeatTimes > 0) {
      for (let i = 0; i < additionRepeatTimes; i++) {
        result = result + addition;
        result = result + (additionRepeatTimes - i == 1 ? "" : additionSeparator);
      }
    }
    result = result + (repeatTimes - i == 1 ? "" : separator);
  }

  return result;
};