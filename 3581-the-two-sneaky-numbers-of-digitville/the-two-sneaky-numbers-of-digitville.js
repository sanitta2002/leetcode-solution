/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let obj={}
    for(i=0;i<nums.length;i++){
        if(obj[nums[i]]){
            obj[nums[i]]++
        }else{
            obj[nums[i]]=1
        }
    }
    let arr=[]
    for(let key in obj){
        if(obj[key]>1){
            let a=+key
            arr.push(a)
        }
    }
    return arr
};