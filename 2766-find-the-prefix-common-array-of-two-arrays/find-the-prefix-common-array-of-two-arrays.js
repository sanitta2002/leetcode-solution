/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
     let n = A.length;
    let freq = new Map();
    let count = 0;
    let result = [];

    for (let i = 0; i < n; i++) {
       
        freq.set(A[i], (freq.get(A[i]) || 0) + 1);
        if (freq.get(A[i]) === 2) count++;

       
        freq.set(B[i], (freq.get(B[i]) || 0) + 1);
        if (freq.get(B[i]) === 2) count++;

        result.push(count);
    }

    return result;
};