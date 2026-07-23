/**
 * @param {number[]} nums
 * @return {number}
 */
var uniqueXorTriplets = function(nums) {
   const n = nums.length;

    if (n === 1) return 1;
    if (n === 2) return 2;

    let ans = 1;
    while (ans <= n) {
        ans <<= 1;
    }

    return ans;
};