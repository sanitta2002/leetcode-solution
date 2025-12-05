/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
    let sum=nums.reduce((acc,cur)=>acc+cur,0)
    if(sum%2===0){
        return nums.length-1
    }
    return 0
};