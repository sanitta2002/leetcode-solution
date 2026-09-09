/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
    let count=0
    for(let i=1000;i<=n;i *= 1000){
        count += n - i + 1;
    }
    return count
};