/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxCount=0
    let count=0
    for(i=0;i<nums.length;i++){
        if(nums[i]===1){
            count++
            maxCount=Math.max(maxCount,count)
        }else{
            count=0
        }
    }
    return maxCount
};