/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function(prices) {
    let len=1
    let res=0
    for(i=0;i<prices.length;i++){
        if(prices[i]===prices[i-1]-1){
            len++
        }else{
            len=1
        }
        res+=len
    }
    return res
};