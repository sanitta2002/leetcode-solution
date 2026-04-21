/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let res=0
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            let d=(nums[i]-1)*(nums[j]-1)
            res=Math.max(res,d)
        }
    }
    return res
};