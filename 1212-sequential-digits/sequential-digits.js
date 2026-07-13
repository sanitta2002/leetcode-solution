/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    const ans = [];
    const str = "123456789";

    const lowLen = low.toString().length;
    const highLen = high.toString().length;

    for (let len = lowLen; len <= highLen; len++) {
        for (let i = 0; i + len <= 9; i++) {
            const num = Number(str.substring(i, i + len));

            if (num >= low && num <= high) {
                ans.push(num);
            }
        }
    }

    return ans;
};