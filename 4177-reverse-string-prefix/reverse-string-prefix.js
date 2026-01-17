/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(s, k) {
    let a= s.slice(0,k)
    let b=s.slice(k)
    let res=a.split('').reverse().join('')+b
    return res
};