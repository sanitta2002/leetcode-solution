/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
    let num = BigInt('0b' + s);
     let steps = 0n;

    while(num > 1n){
        if(num % 2n === 0n){
            num = num / 2n;
        }else{
            num = num + 1n;
        }
        steps++;
    }
    return Number(steps);
};