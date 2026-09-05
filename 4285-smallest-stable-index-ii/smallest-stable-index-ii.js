/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function(nums, k) {
     let n = nums.length;

    let min = nums[n - 1];
    let rightMin = new Array(n);

    for (let i = n - 1; i >= 0; i--) {
        min = Math.min(min, nums[i]);
        rightMin[i] = min;
    }

    let max = nums[0];

    for (let i = 0; i < n; i++) {
        max = Math.max(max, nums[i]);

        if (max - rightMin[i] <= k) {
            return i;
        }
    }

    return -1;
};