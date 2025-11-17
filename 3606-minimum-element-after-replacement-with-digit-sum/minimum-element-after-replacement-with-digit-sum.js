/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    let a=Math.min(...nums.map(num=>String(num).split('').reduce((acc,cur)=>Number(acc)+Number(cur),0)))
  return a
 


};