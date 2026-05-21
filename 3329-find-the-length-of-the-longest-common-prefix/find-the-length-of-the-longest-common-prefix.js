/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function(arr1, arr2) {
    const a = new Set()
    for(let num of arr1){
        let str=num.toString()
        for(let i=1;i<=str.length;i++){
            a.add(str.slice(0,i))
        }
    }
    let max=0
    for(num of arr2){
        const str=num.toString()
        for(let i=1;i<=str.length;i++){
            if(a.has(str.slice(0,i))){
                max=Math.max(max,i)
            }
        }
    }
    return max
};