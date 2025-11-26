/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
   return date.split('-').map(e=>Number(e).toString(2)).join('-')
   
};