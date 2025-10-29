/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let a=0
    let b=1
    for(i=1;i<=n;i++){
        a+=b+(i-1)%7
        if(i%7===0){
            b++
        }
    }
    return a
};