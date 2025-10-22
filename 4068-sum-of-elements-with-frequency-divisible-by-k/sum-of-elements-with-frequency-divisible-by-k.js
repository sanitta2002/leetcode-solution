/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumDivisibleByK = function(nums, k) {
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
        if(obj[key]%k==0){
            sum+=Number(key)*obj[key]
        }
     }
     return sum
};