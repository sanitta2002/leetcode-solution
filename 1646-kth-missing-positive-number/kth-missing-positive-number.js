/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let num=1
    let i=0
    while(k>0){
        if(i<arr.length &&arr[i]===num){
            i++
        }else{
            k--
            if(k===0) return num
        }
        num++
    }
    
};