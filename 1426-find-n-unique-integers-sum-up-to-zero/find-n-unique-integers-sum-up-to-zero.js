/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let arr=[]
    if(n%2===1){
        arr.push(0)
    }
    for(let i=1;i<=Math.floor(n/2);i++){
        arr.push(i)
        arr.push(-i)
    }
    return arr
};