/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    let max=0
    for(let a of strs){
        if(!isNaN(a)){
            max=Math.max(max,a)
        }else{
            max=Math.max(max,a.length)
        }
    }
    return max
};