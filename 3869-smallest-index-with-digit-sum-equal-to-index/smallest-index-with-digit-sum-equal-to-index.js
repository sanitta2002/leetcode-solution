/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
    let digit=(n)=>n.toString().split('').reduce((acc,cur)=>acc+Number(cur),0)
    for(i=0;i<nums.length;i++){
        if(digit(nums[i])==i){
            return i
        }
    }
    return -1
};