/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxTotalValue = function(nums, k) {
    let min = Infinity
    let max = -Infinity
    for(let num of nums){
        min=Math.min(min,num)
        max=Math.max(max,num)
    }
    return k*(max - min)
};