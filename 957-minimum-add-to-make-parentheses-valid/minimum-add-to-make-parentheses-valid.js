/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let open = 0
    let add = 0

     for (let char of s) {
        if (char === '(') {
            open++
        } else {
            if (open > 0) {
                open--
            } else {
                add++
            }
        }
    }
    return add+open

};