/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function(nums, k) {
   let count = {};
    for (let i = 0; i <= nums.length - k; i++) {
        let seen = new Set();

        for (let j = i; j < i + k; j++) {
            seen.add(nums[j]);
        }
        for (let num of seen) {
            count[num] = (count[num] || 0) + 1;
        }
    }

    let ans = -1;

    for (let num in count) {
        if (count[num] === 1) {
            ans = Math.max(ans, Number(num));
        }
    }

    return ans;
};