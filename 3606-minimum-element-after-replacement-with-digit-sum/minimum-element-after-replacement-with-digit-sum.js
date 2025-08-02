/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
   return Math.min(...nums.map(n=>String(n).split('').reduce((acc,cur)=>Number(acc)+Number(cur),0)))
};