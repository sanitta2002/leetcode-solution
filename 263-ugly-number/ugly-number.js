/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if(n<=0) return false
    let f=[2,3,5]
    for(let a of f){
       while(n%a===0){
        n=n/a
       }
    }
    return n===1
};