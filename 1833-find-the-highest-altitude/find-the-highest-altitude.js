/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let current =0
    let max=0
    for(let i=0;i<gain.length;i++){
        current += gain[i]
        max=Math.max(max,current)
    }
    return max
};