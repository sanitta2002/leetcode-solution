/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    let b=n.toString(2)
    for(let i=0;i<b.length;i++){
        if(b[i]===b[i+1]){
            return false
        }
    }
    return true
};