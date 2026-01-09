/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let row=0
    for(i=1;i<=n;i++){
        if(n>=i){
          n-=i
          row++
        }else{
            break
        }
    }
    return row
};