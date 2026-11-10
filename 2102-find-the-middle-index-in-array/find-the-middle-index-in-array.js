/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    let t=nums.reduce((acc,cur)=>acc+cur,0)
    let sum=0
    for(let i=0;i<nums.length;i++){
        let rightsum=t-sum-nums[i]
        if(sum===rightsum){
            return i
        }
        sum+=nums[i]
    }
   return -1
};