/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    
   let inside = false;
    let count = 0;

    for (let ch of s) {
        if (ch === '|') {
            inside = !inside;
        } else if (ch === '*' && !inside) {
            count++;
        }
    }

    return count;
};