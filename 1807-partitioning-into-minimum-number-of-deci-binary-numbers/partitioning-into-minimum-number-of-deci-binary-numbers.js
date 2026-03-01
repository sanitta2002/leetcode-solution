/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    let max=0
    for(let char of n){
        max=Math.max(max,Number(char))
        if(max===9) return 9
    }
    return max
};