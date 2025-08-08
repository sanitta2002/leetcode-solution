/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    if(nums.length == 1)
        return 0;
     let count=0
    for(i=0;i<nums.length-1;i++){
       if(nums[i]>=nums[i+1]){
        const diff =  nums[i]-nums[i+1]
        count = count+(diff+1);
         nums[i+1]=nums[i+1]+(diff+1)
       }
       
       
    }
       return count
   
};