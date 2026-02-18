/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    let prev=-1
    while(n>0){
        let cur=n&1
        if(prev===cur){
            return false
        }
        prev=cur
        n>>=1
    }
    return true

};