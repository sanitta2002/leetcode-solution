/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function(nums) {
    let map = new Map();
    let res = Infinity;

    for (let i = 0; i < nums.length; i++) {

        if (!map.has(nums[i])) {
            map.set(nums[i], []);
        }

        let arr = map.get(nums[i]);
        arr.push(i);
        if (arr.length >= 3) {
            let len = arr.length;

            let i1 = arr[len - 3];
            let i3 = arr[len - 1];

            let cur = 2 * (i3 - i1);
            res = Math.min(res, cur);
        }
    }

    return res === Infinity ? -1 : res;
};