/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    let res=''
    for(let i=0;i<nums.length;i++){
       res+=nums[i][i] === "0" ? "1" : "0";
    }
    return res 
};