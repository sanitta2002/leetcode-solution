/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let a=nums.map((num)=>num**2)
    return a.sort((a,b)=>a-b)
};