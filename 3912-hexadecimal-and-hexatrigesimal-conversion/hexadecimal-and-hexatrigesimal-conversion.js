/**
 * @param {number} n
 * @return {string}
 */
var concatHex36 = function(n) {
    const hex = (n*n).toString(16).toUpperCase()

    const base = (n * n * n).toString(36).toUpperCase()
        
        return hex+base
};