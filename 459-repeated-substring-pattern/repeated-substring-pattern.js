/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let str=s+s
    return str.slice(1,-1).includes(s)
};