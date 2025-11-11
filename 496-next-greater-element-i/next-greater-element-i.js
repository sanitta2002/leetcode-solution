/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let array=[]
   
    for(let i=0;i<nums1.length;i++){
        let num=nums1[i]
        let next=-1
        let index = nums2.indexOf(num);
     for(let j=index+1;j<nums2.length;j++){
        if(nums2[j]>num){
            next=nums2[j] 
            break
        }     
      }
      array.push(next)
    }
    return array
    
};