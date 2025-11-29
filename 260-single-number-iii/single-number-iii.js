/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let obj={}
    let result=[]
    for(i=0;i<nums.length;i++){
        if(obj[nums[i]]){
            obj[nums[i]]++
        }else{
            obj[nums[i]]=1
        }
    }
    for(let key in obj){
        if(obj[key]===1){
            result.push(Number(key))
        }
    }
    return result
};