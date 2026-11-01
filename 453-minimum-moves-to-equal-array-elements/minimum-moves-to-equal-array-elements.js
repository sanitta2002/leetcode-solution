/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let min = Math.min(...nums)
    let moves=0
    for(let i=0;i<nums.length;i++){
         moves += nums[i] - min;
    }
    return moves
};