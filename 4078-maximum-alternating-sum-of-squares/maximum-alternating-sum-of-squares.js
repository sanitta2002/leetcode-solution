/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
     let sq = [];

    for (let i = 0; i < nums.length; i++) {
        sq.push(nums[i] ** 2);
    }

    sq.sort((a, b) => a - b);

    let sum = 0;

    for (let i = 0; i < sq.length; i++) {
        if (i < Math.floor((sq.length + 1) / 2)) {
            sum += sq[sq.length - 1 - i];
        } else {
            sum -= sq[sq.length - 1 - i];
        }
    }

    return sum;
};