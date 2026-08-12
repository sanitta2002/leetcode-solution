/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
     for(let a of s)
    t=t.replace(a,"")
    return t
};