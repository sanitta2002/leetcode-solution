/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    let n=nums.length
    let sum=0
    for(i=0;i<=n;i++){
      if(n%i===0){
        sum+=nums[i-1]*nums[i-1]
      }
    }
    return sum
};