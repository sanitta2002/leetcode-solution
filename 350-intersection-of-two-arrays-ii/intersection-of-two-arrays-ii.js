/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
 let arr=[]
 for(i=0;i<nums1.length;i++){
   let index=nums2.indexOf(nums1[i])
   if(index!=-1){
    arr.push(nums1[i])
    nums2.splice(index,1)
   }
 }

 console.log(nums1, nums2)
 return arr
};