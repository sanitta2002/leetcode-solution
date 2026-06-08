/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    let arr=[]
    for(let i=0;i<nums.length;i++){
        if(nums[i]<pivot){
            arr.push(nums[i])
        }
    }
    for(let i=0;i<nums.length;i++){
        if(nums[i]===pivot){
            arr.push(nums[i])
        }
    }
    for(let i=0;i<nums.length;i++){
        if(nums[i]>pivot){
            arr.push(nums[i])
        }
    }
    return arr
};