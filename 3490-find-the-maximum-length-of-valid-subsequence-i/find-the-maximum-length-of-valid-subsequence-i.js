/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function(nums) {
    let even = 0;
    let odd = 0;

    for (let num of nums) {
        if (num % 2 === 0) even++;
        else odd++;
    }

    let same = Math.max(even, odd);
    let a = 1;
    let prev = nums[0] % 2;

    for (let i = 1; i < nums.length; i++) {
        let curr = nums[i] % 2;

        if (curr !== prev) {
            a++;
            prev = curr;
        }
    }

    return Math.max(same, a);
};