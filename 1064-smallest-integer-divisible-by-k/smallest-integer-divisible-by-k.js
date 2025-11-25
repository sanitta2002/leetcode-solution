/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function(k) {
    let count=0
    for(i=1;i<=k;i++){
        count=(count*10+1)%k
        if(count===0) return i
    }
    return -1
    
};