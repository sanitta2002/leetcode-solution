/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minprice=prices[0]
    let maxPro=0
    for(let i=0;i<prices.length;i++){
        let profit=prices[i]-minprice

        if(profit>maxPro){
            maxPro=profit
        }
        if(prices[i]<minprice){
            minprice=prices[i]
        }
    }
    return maxPro
};