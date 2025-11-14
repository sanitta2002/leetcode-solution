/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxKDistinct = function(nums, k) {
      nums.sort((a,b)=>b-a)
      let a=new Set(nums)
      return [...a].splice(0,k)
};