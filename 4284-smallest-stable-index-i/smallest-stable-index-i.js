/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function(nums, k) {
    for(let i=0;i<nums.length;i++){
        let max=-Infinity
        let min=Infinity
        for(let j=0;j<=i;j++){
            max=Math.max(max,nums[j])
        }
        for(let j=i;j<nums.length;j++){
            min=Math.min(min,nums[j])
        }
        if(max-min<=k){
            return i
        }
    }
    return -1
};