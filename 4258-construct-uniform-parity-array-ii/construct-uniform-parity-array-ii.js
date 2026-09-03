/**
 * @param {number[]} nums1
 * @return {boolean}
 */
var uniformArray = function(nums1) {
    let a = Infinity
    for(let x of nums1){
        if(x%2===1)
         a = Math.min(a, x);
    }
    for(let x of nums1){
        if(x % 2 === 0 && a !== Infinity && x < a){
            return false
        }
    }
    return true
};