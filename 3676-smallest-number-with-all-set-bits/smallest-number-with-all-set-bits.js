/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function(n) {
    let x=1
    while(x-1<n){
        x<<=1
    }
    return x-1
};