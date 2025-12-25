/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    happiness.sort((a,b)=>b-a)
    let total=0
    for(i=0;i<k;i++){
        let current=happiness[i]-i
        if(current>0){
            total+=current
        }
    }
    return  total
};