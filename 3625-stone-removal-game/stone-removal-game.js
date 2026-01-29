/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function(n) {
    let count=0
    for(let i=10;n>=i;i--){
        n-=i
        count++
    }
    return count%2!==0
};