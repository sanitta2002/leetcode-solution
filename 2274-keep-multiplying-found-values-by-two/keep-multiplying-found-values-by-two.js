/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    for(i=0;i<nums.length;i++){
        if(nums.includes(original)){
            original*=2
        }
    }
    return original
};