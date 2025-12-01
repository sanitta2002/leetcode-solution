/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let res=arr.filter((e)=>{
        return arr.indexOf(e)===arr.lastIndexOf(e)
    })
   
    return res[k-1] || ""
};