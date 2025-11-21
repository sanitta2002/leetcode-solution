/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function(nums1, nums2) {
    let min1=Math.min(...nums1)
    let min2=Math.min(...nums2)
    return min2-min1
};