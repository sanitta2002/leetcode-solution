/**
 * @param {number} n
 * @return {boolean}
 */
var winnerSquareGame = function(n) {
    let dp = new Array(n + 1).fill(false);
    for(let i=1;i<=n;i++){
        for(let j=1;j*j<=i;j++){
            let a=i-j*j
            if(dp[a]===false){
               dp[i]=true
               break
            }
        }
    }
    return dp[n]
};