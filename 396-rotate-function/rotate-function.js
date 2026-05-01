/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function(nums) {
    let n = nums.length
    let sum= nums.reduce((acc, num) => acc + num, 0)
    let f = nums.reduce((acc, num, i) => acc + i * num, 0)
     let maxVal = f
     for (let k = 1; k < n; k++) {
        f = f + sum - n * nums[n - k];
        maxVal = Math.max(maxVal, f);
    }

    return maxVal

};