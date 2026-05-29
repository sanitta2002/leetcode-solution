/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
     let array = [...nums1,...nums2]
    array.sort((a,b)=>a-b)

    let mid = Math.floor((array.length/2))
    if(array.length%2===0){
        return (array[mid-1]+array[mid])/2
    }else{
        return array[mid]
    }
    
};