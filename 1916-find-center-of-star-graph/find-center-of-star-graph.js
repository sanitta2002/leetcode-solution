/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    let [a,b]=edges[0]
    let [c,d]=edges[1]

    if(a===c || a===d) return a
    return b
};