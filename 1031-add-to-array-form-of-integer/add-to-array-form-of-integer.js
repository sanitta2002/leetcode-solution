/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
  let n=BigInt(num.join(''))
  let sum=n+BigInt(k)
  return sum.toString().split('').map(Number)

};