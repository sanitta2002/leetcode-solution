/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    let a=n.toString().split('').reverse().join('')
    return Math.abs(n-a)
};