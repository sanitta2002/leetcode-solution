/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let max = Math.max(...nums);
    let moves = 0;

    for (let num of nums) {
        moves += max - num;
    }

    return moves;
};