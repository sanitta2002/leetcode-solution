/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    let result = 0;

    for (let i = 0; i < 32; i++) {
        let lastBit = n & 1;
        result = (result << 1) | lastBit;
        n = n >>> 1;
    }

    return result >>> 0;
};