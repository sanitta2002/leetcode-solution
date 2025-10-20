/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let arr=[]
    for(i=0;i<n;i++){
        arr.push(nums[i])
        arr.push(nums[i+n])
    }
    return arr
};