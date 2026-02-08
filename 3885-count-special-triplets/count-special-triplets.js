/**
 * @param {number[]} nums
 * @return {number}
 */
var specialTriplets = function(nums) {

    let MOD = 1000000007;

    let left = new Map();
    let right = new Map();
    let count = 0;
    for (let num of nums) {
        right.set(num, (right.get(num) || 0) + 1);
    }

    for (let j = 0; j < nums.length; j++) {
        let mid = nums[j];
        right.set(mid, right.get(mid) - 1);

        let target = mid * 2;

        let leftCount = left.get(target) || 0;
        let rightCount = right.get(target) || 0;

        count = (count + leftCount * rightCount) % MOD;
        left.set(mid, (left.get(mid) || 0) + 1);
    }

    return count;
};