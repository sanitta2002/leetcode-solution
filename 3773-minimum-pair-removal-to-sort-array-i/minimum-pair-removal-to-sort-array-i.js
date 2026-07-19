/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function(nums) {
    let operations = 0;

    while (!isSorted(nums)) {
        let minSum = Infinity;
        let index = 0;
        for (let i = 0; i < nums.length - 1; i++) {
            let sum = nums[i] + nums[i + 1];
            if (sum < minSum) {
                minSum = sum;
                index = i;
            }
        }
        nums.splice(index, 2, minSum);
        operations++;
    }

    return operations;
};

function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) return false;
    }
    return true;
}
