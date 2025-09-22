/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
     let obj={}
    let count=0
    for(i=0;i<nums.length;i++){
        if(obj[nums[i]]){
            obj[nums[i]]++
        }else{
            obj[nums[i]]=1
        }
    }
    let max=0
    for(let key in obj){
         max = Math.max(max,obj[key]);
    }

    for(let key in obj){
        if(obj[key]===max)
        {
            count+=obj[key]
        }
    }
    return count
};