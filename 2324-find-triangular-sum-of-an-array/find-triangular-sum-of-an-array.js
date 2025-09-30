/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {

    while(nums.length>1){
         let newArr=[]
         for(i=0;i<nums.length-1;i++){
            newArr.push((nums[i]+nums[i+1])%10)
         }
          nums=newArr
    }
    return nums[0]

    
};