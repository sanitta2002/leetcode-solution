/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let res=0
    for(let i=1;i<=s.length;i++){
        let char =s.charAt(i-1)
        let value = 26-(char.charCodeAt(0)-'a'.charCodeAt(0))
        res+=i*value
    }
    return res
};