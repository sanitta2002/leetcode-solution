/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if (num === 0) return "0"

    let hex = "0123456789abcdef"
    let result = ""

    for (let i = 0; i < 8; i++) {
        let digit = num & 15
        result = hex[digit] + result
        num = num >>> 4

        if (num === 0) break
    }

    return result
};