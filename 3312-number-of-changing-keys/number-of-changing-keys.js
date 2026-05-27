/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
     let arr = s.toUpperCase().split('')
    let count=0
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]!==arr[i+1])
        {
            count++
        }
    }
    return (count-1)
};