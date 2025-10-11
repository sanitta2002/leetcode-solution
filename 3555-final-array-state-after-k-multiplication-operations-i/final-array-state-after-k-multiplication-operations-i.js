/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
    for(i=0;i<k;i++){
        let index=0
        for(j=0;j<nums.length;j++){
            if(nums[j]<nums[index]){
                index=j
            }
        }
        nums[index]*=multiplier
    }
    return nums
};