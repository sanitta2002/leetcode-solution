/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    let min=Math.min(...nums)
    let max=Math.max(...nums)
    let diff=max-min-2*k
    return diff >0 ? diff :0
};