/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function(nums) {
    let count=0
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
           for(k=j+1;k<nums.length;k++){
            if(nums[i]!==nums[j] && nums[i]!==nums[k] && nums[j]!==nums[k]){
               count++
            }
           }
        }
    }
    return count
};