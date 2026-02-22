/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    let bin = n.toString(2);   
    let prev = -1;
    let max = 0;
    for (let i = 0; i < bin.length; i++) {
        if (bin[i] === '1') {
            if (prev !== -1) {
                max = Math.max(max, i - prev);
            }
            prev = i;
        }
    }
    return max;
     
};