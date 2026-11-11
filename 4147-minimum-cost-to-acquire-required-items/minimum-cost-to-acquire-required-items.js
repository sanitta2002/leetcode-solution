/**
 * @param {number} cost1
 * @param {number} cost2
 * @param {number} costBoth
 * @param {number} need1
 * @param {number} need2
 * @return {number}
 */
var minimumCost = function(cost1, cost2, costBoth, need1, need2) {
    let b=Math.min(need1,need2)
    let c = b*Math.min(costBoth,cost1+cost2)
    c+=Math.max(0,need1-b)*Math.min(cost1,costBoth)
    c+=Math.max(0,need2-b)*Math.min(cost2,costBoth)
    return c
};