/**
 * @param {number} num
 * @param {number} sum
 * @return {string}
 */
var maxSumOfSquares = function(num, sum) {
    if(sum>num*9){
        return ""
    } 
    let result = ""
     while (num > 0) {
        let digit = Math.min(9, sum)

        result += digit
        sum -= digit
        num--
    }

    return result
};
