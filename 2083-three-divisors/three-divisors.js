/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
    let count=0
    for(i=1;i<=n;i++){
        if(n%i===0){
            count++
        }
       
    }
    return count===3
};