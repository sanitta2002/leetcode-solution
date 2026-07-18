/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let count=0
    let max=Math.max(...nums)
    let min=Math.min(...nums)

    for(var i=1;i<=min;i++)
    {
       if(max%i==0 && min%i==0)
       {
        count=i
       }
    }
    return count
};