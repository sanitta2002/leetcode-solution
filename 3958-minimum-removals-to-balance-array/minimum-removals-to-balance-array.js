/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minRemoval = function(nums, k) {
    nums.sort((a,b)=>a-b);
    let left = 0;
    let maxLen = 0;
    for(let right = 0; right < nums.length; right++){
        while(nums[right] > k * nums[left]){
            left++;
        }
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return nums.length - maxLen;
};