/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
    let totalSum=arr.reduce((acc,cur)=>acc+cur,0)
    if (totalSum%3!==0) return false
    let targat=totalSum/3
    let sum=0
    let count=0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
        if(sum===targat){
            count++
            sum=0
        }
    }
    return count>=3

};