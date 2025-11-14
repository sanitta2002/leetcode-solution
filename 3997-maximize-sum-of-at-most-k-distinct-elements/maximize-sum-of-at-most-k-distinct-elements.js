/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxKDistinct = function(nums, k) {
    
    
    let sort=nums.sort((a,b)=>b-a)
   
    let set= new Set(nums)
    
    return [...set].slice(0,k)
    
};