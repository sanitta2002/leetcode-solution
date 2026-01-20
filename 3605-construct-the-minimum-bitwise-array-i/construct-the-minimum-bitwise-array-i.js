/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function(nums) {
   let ans = [];

    for (let n of nums) {
        let found = -1;

        for (let x = 0; x < n; x++) {
            if ((x | (x + 1)) === n) {
                found = x;
                break;
            }
        }

        ans.push(found);
    }

    return ans;
};