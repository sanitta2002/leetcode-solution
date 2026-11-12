/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    let dec=1
    let inc=1
    let max=1
    for(let i=1;i<nums.length;i++){
        if(nums[i]>nums[i-1]){
            inc++
            dec=1
        }else if(nums[i]<nums[i-1]){
            dec++
            inc=1
        }else{
            dec=1
            inc=1
        }
        max=Math.max(max,inc,dec)
    }
    return max
};