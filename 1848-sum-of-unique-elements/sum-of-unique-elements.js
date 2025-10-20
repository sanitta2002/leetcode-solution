/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let obj={}
    for(i=0;i<nums.length;i++){
        if(obj[nums[i]]){
            obj[nums[i]]++
        }else{
            obj[nums[i]]=1
        }
    }
   let sum=0
   for(let key in obj){
    if(obj[key]===1){
         sum+=+key
        
    }
   }
   return sum
};