/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let max=Math.max(...nums)
    let index=nums.indexOf(max)
    for(let i=0;i<nums.length;i++){
        if(i!=index && max<2*nums[i]){
           return -1
        }
    }
    return index
};