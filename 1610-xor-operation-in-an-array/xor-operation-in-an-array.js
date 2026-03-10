/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let num
    for(let i=0;i<n;i++){
        num^=start + 2 * i
        
    }
    return num
    
};