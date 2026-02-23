/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
    let set=new Set()
    for(let i=0;i<=s.length-k;i++){
        set.add(s.substring(i,i+k))
        if(set.size===(1<<k)){
           return true
        }
    }
    return false
};