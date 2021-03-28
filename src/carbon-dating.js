const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;


module.exports = function dateSample( sampleActivity ) {
  if (!sampleActivity || typeof sampleActivity !== "string" || !(sampleActivity>0) || sampleActivity>15) {
    return false;
}
const sampleActivityNum = parseFloat(sampleActivity);
   const r = 0.693 / HALF_LIFE_PERIOD;
   let t = Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivityNum)/r);
   return t;

};