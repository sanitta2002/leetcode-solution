/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
   const row = [1];
    let val = 1;

    for (let k = 1; k <= rowIndex; k++) {
        val = val * (rowIndex - k + 1) / k;
        row.push(val);
    }

    return row;
};