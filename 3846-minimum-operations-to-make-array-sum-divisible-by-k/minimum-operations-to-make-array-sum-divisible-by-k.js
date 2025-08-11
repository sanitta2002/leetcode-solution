/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let sum=nums.reduce((acc,cur)=>acc+cur,0)
    return sum%k
};