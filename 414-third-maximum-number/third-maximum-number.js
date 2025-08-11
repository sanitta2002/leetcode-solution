/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let str=new Set(nums)
    let a=Array.from(str)
    a.sort((a,b)=>b-a)
    if(a.length<3){
       return a[0]
    }
        return a[2]
    
};