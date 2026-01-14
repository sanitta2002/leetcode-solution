/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort((a,b)=>a-b)
    let n=nums.length
    let pro1=nums[n-1]*nums[n-2]*nums[n-3]
    let pro2=nums[n-1]*nums[0]*nums[1]
    return Math.max(pro1,pro2)
};