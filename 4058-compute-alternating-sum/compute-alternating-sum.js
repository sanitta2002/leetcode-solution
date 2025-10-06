/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSum = function(nums) {
    let sum=nums.reduce((acc,cur,i)=>{
        return i%2===0 ? acc+cur :acc-cur
    },0)
    return sum
};
