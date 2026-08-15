/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubsequence = function(nums) {
    let xor =0
    let zero = false
    for(let num of nums){
        xor^=num
        if(num!==0){
            zero=true
        }
    }
    if(xor!==0){
        return nums.length
    }
    if(!zero){
        return 0
    }
    return nums.length-1
};