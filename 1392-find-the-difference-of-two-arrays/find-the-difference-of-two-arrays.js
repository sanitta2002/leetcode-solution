/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let arr1=new Set(nums1)
    let arr2=new  Set(nums2)

    let dif1=[...arr1].filter(e=>!arr2.has(e))

    let dif2=[...arr2].filter(e=>!arr1.has(e))
    return [dif1,dif2]
};