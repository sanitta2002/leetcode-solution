/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let obj={}
    for(let [a,b] of trust){
        obj[a]=(obj[a] || 0)-1
        obj[b]=(obj[b] || 0 )+1
    }
    for(let i=1;i<=n;i++){
        if((obj[i]||0)===n-1){
            return i
        }
    }
    return-1
};