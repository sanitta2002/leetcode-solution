/**
 * @param {number[]} cost
 * @return {number[]}
 */
var minCosts = function(cost) {
   let min=Infinity
   return cost.map(num=>{
    min=Math.min(min,num)
    return min
   })
};