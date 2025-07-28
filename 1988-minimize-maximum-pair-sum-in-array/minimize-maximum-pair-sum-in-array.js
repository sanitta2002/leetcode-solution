/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums.sort((a,b)=>a-b)
    let sum=0
    let n=nums.length
    for(i=0;i<n/2;i++){
        let pair = nums[i]+nums[n-1-i]
        sum=Math.max(sum,pair)
    }
    return sum
};