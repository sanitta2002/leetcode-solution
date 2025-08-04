/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
 
   
    for(i=0;i<nums.length;i++){
        if(nums[i]%2===0){
            nums[i]=0
        }else{
            nums[i]=1
        }
    }
    return   nums.sort((a,b)=>a-b)
};