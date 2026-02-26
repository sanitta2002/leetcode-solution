/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
    let steps = 0;
    let carry = 0;
    for (let i = s.length -1; i>0;i--){
        const bit = s[i] - '0';
        if(bit + carry === 1){
            steps += 2;
            carry = 1;
        }else{
            steps += 1;
        }
    }

    return steps + carry;
};