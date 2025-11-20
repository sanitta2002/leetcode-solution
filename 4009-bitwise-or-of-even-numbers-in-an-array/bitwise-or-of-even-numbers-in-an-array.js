/**
 * @param {number[]} nums
 * @return {number}
 */
var evenNumberBitwiseORs = function(nums) {
    let a=0
    for(i=0;i<nums.length;i++){
        if(nums[i]%2===0){
            a|=nums[i]
        }
    }
    return a
};