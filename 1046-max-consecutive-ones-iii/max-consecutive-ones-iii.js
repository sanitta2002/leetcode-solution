/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let zero=0
    let max=0
    let left=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]===0){
            zero++
        }
        while(zero>k){
            if(nums[left]===0){
                zero--
            }
            left++
        }
        max=Math.max(max,i-left+1)
    }
    return max
};