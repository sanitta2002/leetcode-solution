/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {
    let sum = 0
    let a=n.toString()
    let str=""
    for(let i=0;i<a.length;i++){
        if(a[i]!=0){
         str+=a[i]
          sum+=Number(a[i])
        }
    }
    return Number(str)*sum
    
};