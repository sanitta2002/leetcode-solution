/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    let arr=[]
    for(i=0;i<nums.length;i++){
        if(nums[i]<pivot){
            arr.push(nums[i])
        }
    }
    for(i=0;i<nums.length;i++){
        if(nums[i]==pivot){
            arr.push(nums[i])
        }
    }
      for(i=0;i<nums.length;i++){
        if(nums[i]>pivot){
            arr.push(nums[i])
        }
    }
    return arr
};