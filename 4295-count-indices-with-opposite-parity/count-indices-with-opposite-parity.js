/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countOppositeParity = function(nums) {
       let n = nums.length;
    let answer = []

    let even = 0;
    let odd = 0;

    for (let i = n - 1; i >= 0; i--) {

        if (nums[i] % 2 === 0) {
            answer[i] = odd;
            even++;
        } else {
            answer[i] = even;
            odd++;
        }

    }

    return answer;
};