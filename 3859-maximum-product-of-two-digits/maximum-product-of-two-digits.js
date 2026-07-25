/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    const digits = String(n)
        .split("")
        .map(Number)
        .sort((a, b) => b - a);

    return digits[0] * digits[1];
};