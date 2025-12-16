/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let newArr=nums.map(num=>num.toString().split('')).flat(Infinity).map(num=>Number(num))
    return newArr
};