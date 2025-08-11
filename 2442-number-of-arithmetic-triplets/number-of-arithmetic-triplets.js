/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    let count=0
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            if(nums[j] - nums[i] == diff){
                for(k=j+1;k<nums.length;k++){
                    if(nums[k] - nums[j] == diff){
                        count++
                    }
                }
            }
        }
    }
    return count
};