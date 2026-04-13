/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
    let dis=Infinity
    for(let i=0;i<nums.length;i++){
        if(nums[i]===target){
            dis=Math.min(dis, Math.abs(i - start));
        }
    }
    return dis
};