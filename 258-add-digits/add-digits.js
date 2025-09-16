/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num<10) return num
    let sum=num.toString().split('').reduce((acc,cur)=>acc+Number(cur),0)
    return addDigits(sum)
};