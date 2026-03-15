/**
 * @param {string} s
 * @return {number}
 */
var maxDistinct = function(s) {
    let set=new Set()
    for(let a of s){
        set.add(a)
    }
    return set.size
};