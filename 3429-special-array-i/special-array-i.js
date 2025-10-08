/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
    if(nums.length===1) return true
    for(i=0;i<nums.length;i++){
        if((nums[i]%2)===(nums[i-1]%2)){
           return false
        }
    }
    return true
};