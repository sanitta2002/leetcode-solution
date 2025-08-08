/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let res=[]
    for(let num of arr2){
        while(arr1.includes(num)){
           res.push(num)
           arr1.splice(arr1.indexOf(num),1)
        }
    }
    arr1.sort((a,b)=>a-b)
    res.push(...arr1)
    return res
};